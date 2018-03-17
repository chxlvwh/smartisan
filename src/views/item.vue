<template>
<div id="iteminfo" class="clear">

	<div class="loading" v-if="loading">
		loading...
	</div>

	<div v-if="newItem">
		<ul class="imglist">
			<li v-for="img,index in itemIndex.shop_info.ali_images" @click="changeImg(index)" :class="{ 'active-small-img': imgIndex===index }"><img :src="img"></li>
		</ul>
		<img class="mainImg" :src="itemIndex.shop_info.ali_images[imgIndex]">
		<div class="info">
			<div class="sku-title">
				<h4>{{itemIndex.shop_info.sku_mobile_title}}</h4>
				<h6>{{itemIndex.shop_info.sub_title}}</h6>
				<span>￥<i>{{itemIndex.price.toFixed(2)}}</i></span>
			</div>
			<div class="corlor-num">
				<div class="color">
					<span>颜色</span>
					<ul class="clear">
						<li v-for="sku,index in itemIndex.spu.sku_info/**shop_info.spec_v2[0].spec_values*/" :class="{ 'active-color': index==colorSelection }" @click="colorSelect(sku, index)"><img :src="sku.spec_json[0].image"></li>
					</ul>
				</div>
				<slot name="api-selection"></slot>
				<!--<slot name="api-selection">-->
				<!--<div class="api">-->
				<!--<span>接口</span>-->
				<!--<ul class="api-items clear">-->
				<!--<li class="active-api-items">3.5mm</li>-->
				<!--<li>Type-C</li>-->
				<!--</ul>-->
				<!--</div>-->
				<!--</slot>-->
				<div class="num">
					<span>数量</span>
					<i @click="numMinus" :class="{unclick: num==1}">-</i>
					<input type="text" v-model="num"></input>
					<i @click="numPlus" :class="{unclick: num==itemIndex.shop_info.limit_num}">+</i>
				</div>
			</div>
			<div class="sku-status">
				<button @click="addCarPanelHandle(itemIndex,num)">加入购物车</button>
				<div class="nowBuy" @click="nowBuy">
					<router-link :to="{name: 'Buyinfo'}">现在购买</router-link>
				</div>
				<p>
					<span>Smartisan S-1001 圈铁线控耳机（Type-C 版）仅支持 坚果 Pro 系列手机，乐视 Pro 3，小米 6。</span>
				</p>
			</div>
		</div>
	</div>
</div>
</template>

<script>
/* eslint-disable */
// import newItem from '@/lib/newItemsData.js'
export default {
	name: 'Item',
	data() {
		return {
			itemId: this.$route.query.itemId,
			ids: this.$route.query.ids,
			newItem: null,
			// 左边5张图片中被选中图片的索引值
			imgIndex: 0,
			num: 1,
            // 储存当前被选中的颜色的索引
            colorIndex: 0,
			loading: false
		}
	},
	computed: {
		// 被选中的颜色的商品
		itemIndex() {
			return this.newItem.filter((item) => {
				return String(item.id) === String(this.itemId)
			})[0]
		},
		//
		colorSelection() {
			return this.$store.state.colorSelect
		}
	},
	methods: {
		changeImg(index) {
			// 找到被选中的图片，以能够给他加样式
			this.imgIndex = index
		},
		colorSelect(color, index) {
			// 选择颜色时，切换不同颜色的sku图片
			this.itemId = color.sku_id
			// 给选中的颜色加样式
			this.$store.commit('selectColor', {
				color,
				index
			})
			// 让默认选中左边5张图片中的第一张
			this.imgIndex = 0
			// 初始化num
			this.num = 1
            // 储存当前被选中的颜色的索引
            this.colorIndex = index
		},
		numMinus() {
			if (this.num > 1) {
				this.num--
			}
		},
		numPlus() {
			if (this.num < this.itemIndex.shop_info.limit_num) {
				this.num++
			}
		},
		addCarPanelHandle(itemIndex, num) {
			console.log(num)
			let t = itemIndex.spu.sku_info[this.colorIndex]
			t.limit_num = this.itemIndex.shop_info.limit_num
			console.log(t);
			this.$store.commit('addCarPanelData', {
				data: t,
				num
			})
		},
		nowBuy() {
			// this.itemIndex是数组的一项，不是数组，所以要新建一个数组
			let items = []
			// 动态给对象添加方法，不能用Vue.set()方法，因为这个方法只能放到实例下面不能在组件中使用
			let item = Object.assign({}, this.itemIndex.spu.sku_info[this.colorIndex], {
				count: this.num
			})
			items.push(item)
			this.$store.commit('selectedItem', items)
		},
        fetchData () {
            this.loading = true
            this.$http.get('/api/product/spus?ids=' + this.ids).then(
    			function(res) {
    				this.newItem = res.body.data.list
                    this.loading = false
    				console.log(this.newItem)
    			}
    		)
        }
	},
	// 监控手动输入的数字
	watch: {
		num: function(val, oldVal) {
			// 如果输入的是非数字格式，num初始化为1
			if (!Number(val)) {
				this.num = 1
			}
			// 如果输入值大于最大购买量，num自动变成最大购买量
			if (val > this.itemIndex.limit_num) {
				let _index = this
				setTimeout(function() {
					_index.num = _index.itemIndex.limit_num
					// alert(1)
				}, 500)
				// this.num = this.itemIndex.limit_num
			}
		}
	},
	created() {
        // 每次刷新页面执行一次获取数据
        this.fetchData()
	}
}
</script>

<style scoped>
.loading {
	text-align: center;
	margin: 100px 0;
	font-size: 30px;
}

.nowBuy {
	display: inline-block;
}

.clear {
	*zoom: 1;
}

.clear:before,
.clear:after {
	content: '';
	display: table;
}

.clear:after {
	clear: both;
}

i {
	font-style: normal;
}

ul {
	padding: 0;
	margin: 0;
	list-style: none;
}

#iteminfo {
	margin: 0 auto;
	width: 1098px;
	padding: 60px;
	border: 1px solid #dcdcdc;
	-webkit-border-radius: 7px;
	-moz-border-radius: 7px;
	border-radius: 7px;
	position: relative;
	background: #fff;
	/*overflow: hidden;// 清除浮动*/
}

#iteminfo .imglist {
	float: left;
}

#iteminfo .imglist li {
	cursor: pointer;
	width: 54px;
	height: 54px;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	background: #fff;
	padding: 12px;
	border: 1px solid #f0f0f0;
	margin-bottom: 10px;
}

#iteminfo .imglist li img {
	width: 54px;
	height: 54px;
}

#iteminfo .imglist li:nth-of-type(5) {
	margin: 0;
}

#iteminfo .imglist .active-small-img {
	padding: 10px;
	border: 3px solid #cccccc;
}

#iteminfo .mainImg {
	width: 440px;
	height: 440px;
	margin-left: 20px;
	margin-right: 108px;
	float: left;
	background: #ccc;
}

.info {
	width: 450px;
	height: 440px;
	display: table-cell;
	vertical-align: middle;
}

.info .sku-title {
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	position: relative;
	border-bottom: 1px solid #ebebeb;
	padding: 8px 8px 18px 10px;
}

.info h4 {
	width: 360px;
	font-size: 24px;
	line-height: 1.25;
	color: #000;
	margin-bottom: 13px;
	font-weight: 400;
}

.info h6 {
	width: 360px;
	font-size: 14px;
	line-height: 1.5;
	color: #bdbdbd;
	font-weight: normal;
}

.info .sku-title span {
	display: block;
	color: #d44d44;
	font-weight: 700;
	font-size: 16px;
	line-height: 20px;
	text-align: right;
	position: absolute;
	right: 8px;
	bottom: 8px;
}

.info span i {
	padding-left: 2px;
	font-size: 24px;
	font-style: normal;
}

.corlor-num {
	padding: 29px 0 8px 10px;
	border-bottom: 1px solid #ebebeb;
}

.color {
	margin-bottom: 20px;
}

.color li {
	width: 36px;
	height: 36px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	border: 2px solid #e5e5e5;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	float: left;
	margin-right: 10px;
	padding: 3px;
	cursor: pointer;
}

.color li img {
	display: inline-block;
	width: 26px;
	height: 26px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	border: 1px solid rgba(0, 0, 0, 0.1);
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	/*background: red;*/
}

.color .active-color {
	border: 3px solid #b6b6b6;
	padding: 2px;
}

.color>span,
.num>span,
.api>span {
	float: left;
	font-size: 12px;
	color: #8d8d8d;
	line-height: 3;
	margin-right: 20px;
}

.num {
	margin-bottom: 19px;
}

.num>i {
	display: inline-block;
	background: #fff;
	text-align: center;
	line-height: 24px;
	width: 26px;
	height: 26px;
	border: 1px solid #e9e9e9;
	-webkit-border-radius: 50%;
	-moz-border-radius: 50%;
	border-radius: 50%;
	margin-top: 4px;
	box-shadow: 0 0 4px 1px #ccc;
	font-weight: 800;
	color: #8b8b8b;
	cursor: pointer;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.num>i:hover {
	background: #f2f2f2;
}

.num>input {
	width: 56px;
	text-align: center;
	color: #8b8b8b;
	font-weight: 400;
	font-size: 13px;
}

.num .unclick {
	cursor: not-allowed;
	box-shadow: 0 0 4px 1px #eaeaea;
}

.num .unclick:hover {
	background: #fff;
}

.api {
	margin-bottom: 19px;
	height: 36px;
}

.api .api-items li {
	float: left;
	width: 64px;
	height: 34px;
	text-align: center;
	font-size: 14px;
	line-height: 34px;
	border: 1px solid #e9e9e9;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	margin-right: 10px;
	cursor: pointer;
}

.api .api-items .active-api-items {
	width: 62px;
	height: 32px;
	border: 2px solid #b2b2b2;
	line-height: 32px;
}

.sku-status {
	padding: 30px 0 0 10px;
}

.sku-status a {
	display: inline-block;
	text-align: center;
}

.sku-status button,
.sku-status .nowBuy>a {
	width: 145px;
	height: 50px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
	border: 1px solid #e0e0e0;
	margin-right: 20px;
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
	background: linear-gradient(to bottom, #fefefe, #fafafa);
	font-size: 14px;
	color: #8c8c8c;
	line-height: 48px;
	cursor: pointer;
	margin-bottom: 23px;
}

.sku-status button:nth-of-type(1) {
	background: linear-gradient(to bottom, #7699e8, #5078df);
	border: 1px solid #7292e7;
	color: #fff;
}

.sku-status p {
	font-size: 11px;
	line-height: 18px;
	color: #999999;
	position: relative;
}

.sku-status p:before {
	content: '*';
	position: absolute;
	top: 2px;
	left: 0;
}

.sku-status p span {
	position: absolute;
	left: 10px;
}
</style>
