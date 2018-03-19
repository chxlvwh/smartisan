<template>
<li class="content-goods">
	<router-link target="_blank" class="to-item" :to="{name: 'Item', query: { itemId: item.sku_info[skuIndex].sku_id, ids: ids }}">
		<img class="goods-img" :alt="item.name" :src="item.sku_info[skuIndex].ali_image" style="opacity: 1;" />
	</router-link>
	<a class="content-href" href="#">
		<h3 class="content-name">{{item.name}}</h3>
		<h6 class="content-info">{{item.name_title}}</h6>
	</a>
	<ul class="color-select">
		<li v-for="sku,index in item.sku_info" :title="sku.spec_json.show_name" @click="selectSku(index)" :class="{'select-active': isActive(index)}">
			<img :src="sku.spec_json[0].image">
			<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
			<div class="cart-btn clear" v-if="btnShow(index)">
				<button>
		            <router-link @click="getIds" target="_blank" :to="{
		                name:'Item',
		                query: { itemId: item.sku_info[index].sku_id, ids: ids }
		                }">查看详情
		            </router-link>
		          </button>
				<button @click="addCarPanelHandle(item.sku_info[skuIndex])">加入购物车</button>
			</div>
		</li>
	</ul>
	<span class="content-price">￥ {{item.price.toFixed(2)}}</span>
</li>
</template>

<script>
/* eslint-disable */
import Item from '@/views/item'
export default {
	props: ['item'],
	data() {
		return {
			// 当前选中的颜色的索引
			skuIndex: 0,
			// 放置skuid的集合，用作获取数据
			ids: ''
		}
	},
	methods: {
		selectSku: function(index) {
			this.skuIndex = index
			this.$store.commit('selectColor', index)
		},
		isActive: function(index) {
			return this.skuIndex === index
		},
		addCarPanelHandle: function(data) {
			let limitNum = 0
			this.$http.get('api/skus?ids=' + this.ids + '&with_stock=true&with_spu=true').then(
    			function(res) {
    				limitNum = res.body.data.list[this.skuIndex].shop_info.limit_num
					data.limit_num = limitNum
					// console.log(res);
					// console.log(this.ids);
    			}
    		)
			console.log(data);
			this.$store.commit('addCarPanelData', {
				data,
				num: 1
			})
			// setTimeout(function () {
			//   console.log(this)
			//  let a = this.$store.getters.totalCount
			//  console.log(a)
			//  this.$root.$cart.save('num', a)
			//  console.log(this.$root.$cart.fetch('num'))
			// }, 1000)
		},
		btnShow(index) {
			return this.skuIndex === index
		},
		getIds () {
			let itemids = this.item.sku_info.map(function(i) {
				return i.sku_id
			}).join(',')
			this.ids = itemids
		}
	},
	created () {
		// console.log(this.item);
		let itemids = this.item.sku_info.map(function(i) {
			return i.sku_id
		}).join(',')
		this.ids = itemids
	},
	updated () {
		let itemids = this.item.sku_info.map(function(i) {
			return i.sku_id
		}).join(',')
		this.ids = itemids
	},
	components: {
		Item
	}
}
</script>

<style>
.to-item {
	width: 206px;
	height: 206px;
	margin: 50px auto 10px;
	cursor: pointer;
	display: block;
}

#content-container .to-item .goods-img {
	width: 206px;
	height: 206px;
}

#content-container .content-goods {
	width: 303.75px;
	height: 428px;
	border: 1px solid #efefef;
	border-top: none;
	border-left: none;
	background: #fff;
	float: left;
	transition: all 0.2s;
	position: relative;
}

#content-container .content-goods .content-href {
	display: block;
	width: auto;
	/*background: url(../img/phone2.jpg) no-repeat center center;*/
}

#content-container .content-goods .content-href h3,
#content-container .content-goods .content-href h6 {
	text-align: center;
}

#content-container .content-goods .content-href h3 {
	font: 16px/26px "微软雅黑";
	color: #424242;
}

#content-container .content-goods .content-href h6 {
	font: 12px/22px "微软雅黑";
	color: #d0d0d0;
}

#content-container .content-goods .color-select {
	padding-top: 20px;
	text-align: center;
	font-size: 0;
}

#content-container .content-goods .color-select li {
	border: 1px solid #e7e7e7;
	border-radius: 50%;
	width: 10px;
	height: 10px;
	padding: 1px;
	display: inline-block;
	margin: 0 5px;
	text-align: center;
	cursor: pointer;
	transition: all 0.3s;
}

#content-container .content-goods .color-select li img {
	display: block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	border: 1px solid #fff;
}

#content-container .content-goods .color-select .select-active {
	border-color: #b9b9b9;
	background: #b9b9b9;
}

#content-container .content-goods .content-price {
	display: block;
	padding-top: 21px;
	text-align: center;
	color: #d44d44;
	font-weight: bold;
	font-size: 18px;
}

.content-goods .cart-btn {
	padding: 0 46px;
	margin-bottom: 29px;
	position: absolute;
	left: 0;
	bottom: 0;
	transition: all .3s;
	display: none;
}

.content-goods .cart-btn button {
	width: 98px;
	padding: 8px 0;
	display: block;
	float: left;
	border-radius: 4px;
	font: 12px/12px "微软雅黑";
	text-align: center;
	margin-right: 10px;
	position: relative;
}

.content-goods .cart-btn button:nth-of-type(1) {
	border: 1px solid #d5d5d5;
	color: #a9a6a9;
	background: #fff;
}

.content-goods .cart-btn button:nth-of-type(1):hover {
	background: #f1f1f1;
}

.content-goods .cart-btn button:nth-of-type(2) {
	border: 1px solid #5c81e3;
	color: #e6ecf4;
	background: linear-gradient(to bottom, #7699e8, #5c81e3);
	margin: 0;
}

.content-goods .cart-btn button:nth-of-type(2):hover {
	background: linear-gradient(to bottom, #6d8dd4, #5374c8);
}

.content-goods .cart-btn button a {
	display: block;
}

#content-container .content-goods:hover {
	box-shadow: inset rgba(0, 0, 0, 0.1) 0px 0px 40px 0px;
}

#content-container .content-goods:hover .cart-btn {
	display: block;
}

#content-container .content-goods:hover .content-price {
	display: none;
}

#content-container .content-goods:nth-of-type(4n) {
	border-right: none;
}
</style>
