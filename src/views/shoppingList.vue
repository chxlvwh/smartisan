<template>
<div id="buyPage">
	<div class="info">
		<div class="headerName">购物清单</div>
		<div id="noItem" v-if="noItem">
			<p>您的购物车中还没有商品</p>
			<router-link :to="{ name: 'Shop'}">现在选购</router-link>
		</div>
		<div class="haveItems">
			<p class="boxName">商品信息<span>操作</span><span>小计</span><span>数量</span><span>单价</span></p>
			<ul class="goodsList">
				<li v-for="item,index in carPanelData">
					<b>
              <a :class="{'item-select': isItemSelected[index]}" @click="changeSelect(index)" href="javascript:"></a>
            </b>
					<img :src="item.ali_image" />
					<h4>{{item.title}}</h4>
					<div class="deleteItem" @click="delThisItem(index)">
						<a href="javascript:"></a>
					</div>
					<div>￥{{item.price*num[index]}}</div>
					<div class="num">
						<i @click="numMinus(index)" :class="{'unclick': num[index]==1}">-</i>
						<input type="text" v-model="num[index]"></input>
						<i @click="numPlus(index)" :class="{'unclick': num[index]==item.limit_num}">+</i>
					</div>
					<div>￥{{item.price}}</div>
				</li>
			</ul>
			<div class="list-bottom">
				<b>
            <a @click="allSelectedCancel" :class="{'item-select':isAllSelected}" href="javascript:"></a>
          </b>
				<p><span>全选</span><b @click="delAllSelectedHandle">删除选中的商品</b></p>
				<div class="all-buyinfo">
					<p>已选择<span>{{selectedNum}}</span>件商品</p>
					<p>共计<span>{{totalCount}}</span>件商品</p>
				</div>
				<div class="all-buyinfo">
					<p>应付总额：￥<span>{{selectedPrice}}</span></p>
					<p>应付总额不含运费</p>
				</div>
				<div @click="selectedItemHandle" id="nowClick">
					<router-link :to="{name: 'Buyinfo'}">现在结算</router-link>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
/* eslint-disable */
export default {
	name: 'ShoppingList',
	data() {
		return {
			carPanelData: this.$store.state.carPanelData
		}
	},
	computed: {
		// 返回一个数组，存储每个产品的数量
		num() {
			return this.carPanelData.map((item) => {
				return item.count
			})
		},
		// 购物车总数
		totalCount() {
			return this.$store.getters.totalCount
		},
		// 存储购物车中item是否选中的状态,为true和false的集合
		isItemSelected() {
			return this.$store.state.selectPay
		},
		isAllSelected() {
			let arr = this.isItemSelected.filter((item) => {
				return item === false
			})
			if (arr.length === 0) {
				return true
			} else {
				return false
			}
		},
		// 选中产品的总数
		selectedNum() {
			let num = 0
			for (let i = 0; i < this.carPanelData.length; i++) {
				if (this.isItemSelected[i] === true) {
					num += this.num[i]
				}
			}
			return num
		},
		selectedPrice() {
			let price = 0
			for (let i = 0; i < this.carPanelData.length; i++) {
				if (this.isItemSelected[i] === true) {
					price += this.num[i] * this.carPanelData[i].price
				}
			}
			return price
		},
		noItem() {
			if (this.carPanelData.length == 0) {
				return true
			} else {
				return false
			}
		},
		// 存储已经选中的item的集合
		selectedCarPanelData() {
			let selectedItem = []
			for (let i = 0; i < this.carPanelData.length; i++) {
				if (this.isItemSelected[i] === true) {
					selectedItem.push(this.carPanelData[i])
				}
			}
			return selectedItem
		}
	},
	methods: {
		numMinus(index) {
			this.$store.commit('delCarPanelNumData', index)
		},
		numPlus(index) {
			this.$store.commit('addCarPanelNumData', index)
		},
		changeSelect(index) {
			this.$store.commit('changePayItem', {
				index
			})
		},
		// 全选/取消全选
		allSelectedCancel() {
			if (this.isAllSelected === false) {
				this.$store.commit('initPayItem', true)
			} else {
				this.$store.commit('initPayItem', false)
			}
		},
		// 删除当前的item
		delThisItem(index) {
			this.$store.commit('delCarPanelData', index)
			// 把当前已选中的产品的集合也更新
			this.$store.commit('changePayItem', {
				index,
				del: 'true'
			})
		},
		delAllSelectedHandle() {
			let indexes = []
			for (let i = 0; i < this.isItemSelected.length; i++) {
				if (this.isItemSelected[i] == true) {
					indexes.push(i)
				}
			}
			console.log(indexes)
			for (let i = indexes.length - 1; i >= 0; i--) {
				// 此处应该是indexes[i]，不是i
				this.$store.commit('delCarPanelData', indexes[i])
				// 同时删除已选中item中的数据，del属性用来做标志，是改变还是删除
				this.$store.commit('changePayItem', {
					index: indexes[i],
					del: true
				})
			}
		},
		selectedItemHandle() {
			console.log(this.selectedCarPanelData)
			this.$store.commit('selectedItem', this.selectedCarPanelData)
		}
	},
	created() {
		this.$store.commit('initPayItem', true)
	}
}
</script>

<style scoped>
#nowClick {
	display: inline-block;
}
<<<<<<< HEAD

#noItem {
	width: 1218px;
	height: 525px;
	background: #FFFFFF url(../assets/img/cart-box-empty.png) no-repeat 50% 15%;
	position: relative;
}

#noItem p {
	text-align: center;
	color: #949494;
	padding-top: 380px;
}

#noItem a {
=======
#noItem{
  width: 1218px;
  height: 525px;
  background: #FFFFFF url(../../example/src/assets/img/cart-box-empty.png) no-repeat 50% 15%;
  position: relative;
}
#noItem p{
	text-align: center;
	color: #949494;
    padding-top: 380px;
}
#noItem a{
>>>>>>> 8460d1bb68dd2b1319801bcc3e9c2bee21e73234
	width: 140px;
	height: 46px;
	border: 1px solid #e1e1e1;
	border-radius: 5px;
	display: block;
	margin: 10px auto;
	text-align: center;
	line-height: 46px;
<<<<<<< HEAD
	background: linear-gradient(to bottom, #fefefe, #f9f9f9);
}

#noItem a:active {
	background: #EEEEEE;
}

#buyPage {
	padding: 29px 0 0 0;
	margin: 0 auto;
	width: 1220px;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	box-sizing: border-box;
}

.num .unclick {
	cursor: not-allowed;
	box-shadow: 0 0 4px 1px #eaeaea;
}

.num .unclick:hover {
	background: #fff;
}

.info {
	border: 1px solid #dbdbdb;
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	border-radius: 6px;
	overflow: hidden;
	width: auto;
	height: auto;
	margin-bottom: 30px;
}

.info .headerName {
	width: 1218px;
	height: 60px;
	background: linear-gradient(to bottom, #fafafa, #ececec);
	border-bottom: 1px solid #d4d4d4;
	box-shadow: 0 2px 5px 2px #f6f6f6;
	font: 18px/60px "微软雅黑";
	text-indent: 24px;
}

.info .boxName {
	height: 38px;
	font: bold 11px/38px "微软雅黑";
	padding-left: 30px;
	color: #838383;
	background: #eeeeee;
	letter-spacing: 1px;
	border-bottom: 1px solid #dbdbdb;
}

.info .boxName span {
	display: inline-block;
	width: 137px;
	height: 38px;
	float: right;
	vertical-align: middle;
	text-align: center;
}

.goodsList b {
	font-size: 0;
	width: 40px;
	height: 80px;
	display: inline-block;
	position: relative;
	vertical-align: middle;
}

.goodsList b a {
	position: absolute;
	display: block;
	width: 16px;
	height: 16px;
	top: 50%;
	background: url(../assets/img/noSelect.png);
	transform: translateY(-50%);
}

.goodsList b .item-select,
.list-bottom b .item-select {
	background: url(../assets/img/select.png);
}

.goodsList li {
	background: #FFFFFF;
	padding: 15px 0 15px 30px;
	font-size: 0;
	border-bottom: 1px solid #ebebeb;
}

.goodsList img {
	width: 78px;
	height: 78px;
	border: 1px solid #f0f0f0;
	background: #FFFFFF;
	display: inline-block;
	vertical-align: middle;
}

.goodsList li h4 {
	display: inline-block;
	margin-left: 30px;
	font-size: 14px;
}

.goodsList li div {
	display: inline-block;
	font-size: 14px;
	width: 137px;
	height: 78px;
	line-height: 78px;
	float: right;
	text-align: center;
}

.goodsList li .deleteItem {
	position: relative;
}

.goodsList li .deleteItem a {
	display: block;
	width: 24px;
	height: 24px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: url(../assets/img/delete-btn-icon.jpg) no-repeat;
}

.goodsList li .deleteItem a:hover {
	background: url(../assets/img/delete-btn-icon.jpg) no-repeat 0 -36px;
}

.list-bottom {
	position: relative;
	padding: 0 28px;
	padding-top: 11px;
	height: 81px;
	box-sizing: border-box;
	background: linear-gradient(to bottom, #ffffff, #f7f7f7);
	border-top: 1px solid #d9d9d9;
	box-shadow: 0 -1px 2px 2px #f6f6f6;
}

.list-bottom #nowClick>a {
	display: inline-block;
	width: 130px;
	height: 50px;
	border-radius: 8px;
	background: #7295e9;
	color: white;
	font: bold 16px/50px "微软雅黑";
	text-align: center;
	position: absolute;
	top: 20px;
	right: 29px;
}

.list-bottom>p {
	height: 70px;
	line-height: 70px;
}

.list-bottom>p b {
	font-size: 12px;
	color: #bbbbbb;
	margin-left: 22px;
}

.list-bottom>p b:before {
	display: inline-block;
	content: "";
	width: 1px;
	height: 12px;
	position: relative;
	top: 2px;
	left: -10px;
	background: #e1e1e1;
}

.list-bottom .all-buyinfo {
	min-width: 155px;
	float: right;
	position: absolute;
	top: 22px;
}

.list-bottom .all-buyinfo p:nth-of-type(1) span {
	color: #d44d44;
	font-size: 16px;
}

.list-bottom .all-buyinfo p:nth-of-type(2) {
	color: #959598;
}

.list-bottom .all-buyinfo p:nth-of-type(2) span {
	font-size: 16px;
}

.list-bottom .all-buyinfo:nth-of-type(1) {
	right: 362px;
	text-align: right;
}

.list-bottom .all-buyinfo:nth-of-type(2) {
	right: 160px;
}

.list-bottom .all-buyinfo:nth-of-type(2):before {
	content: "";
	width: 1px;
	height: 45px;
	position: absolute;
	left: -20px;
	display: inline-block;
	background: #e1e1e1;
}

.num>span {
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

.list-bottom>b {
	font-size: 0;
	width: 40px;
	height: 70px;
	display: inline-block;
	position: relative;
	vertical-align: middle;
	float: left;
}

.list-bottom>b>a {
	position: absolute;
	display: block;
	width: 16px;
	height: 16px;
	top: 50%;
	background: url(../assets/img/noSelect.png);
	transform: translateY(-50%);
}
=======
	background: linear-gradient(to bottom,#fefefe,#f9f9f9);
}
#noItem a:active{
	background: #EEEEEE;
}
#buyPage {
  padding: 29px 0 0 0;
  margin: 0 auto;
  width: 1220px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
  .num .unclick{
    cursor: not-allowed;
    box-shadow: 0 0 4px 1px #eaeaea;
  }
  .num .unclick:hover{
    background: #fff;
  }
.info {
  border: 1px solid #dbdbdb;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  overflow: hidden;
  width: auto;
  height: auto;
  margin-bottom: 30px;
}
.info .headerName {
  width: 1218px;
  height: 60px;
  background: linear-gradient(to bottom, #fafafa, #ececec);
  border-bottom: 1px solid #d4d4d4;
  box-shadow: 0 2px 5px 2px #f6f6f6;
  font: 18px/60px "微软雅黑";
  text-indent: 24px;
}
.info .boxName {
  height: 38px;
  font: bold 11px/38px "微软雅黑";
  padding-left: 30px;
  color: #838383;
  background: #eeeeee;
  letter-spacing: 1px;
  border-bottom: 1px solid #dbdbdb;
}
.info .boxName span {
  display: inline-block;
  width: 137px;
  height: 38px;
  float: right;
  vertical-align: middle;
  text-align: center;
}
.goodsList b {
  font-size: 0;
  width: 40px;
  height: 80px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.goodsList b a {
  position: absolute;
  display: block;
  width: 16px;
  height: 16px;
  top: 50%;
  background: url(../assets/img/noSelect.png);
  transform: translateY(-50%);
}
.goodsList b .item-select, .list-bottom b .item-select{
  background: url(../assets/img/select.png);
}
.goodsList li {
  background: #FFFFFF;
  padding: 15px 0 15px 30px;
  font-size: 0;
  border-bottom: 1px solid #ebebeb;
}
.goodsList img {
  width: 78px;
  height: 78px;
  border: 1px solid #f0f0f0;
  background: #FFFFFF;
  display: inline-block;
  vertical-align: middle;
}
.goodsList li h4 {
  display: inline-block;
  margin-left: 30px;
  font-size: 14px;
}
.goodsList li div {
  display: inline-block;
  font-size: 14px;
  width: 137px;
  height: 78px;
  line-height: 78px;
  float: right;
  text-align: center;
}
.goodsList li .deleteItem {
  position: relative;
}
.goodsList li .deleteItem a {
  display: block;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(../assets/img/delete-btn-icon.jpg) no-repeat;
}
.goodsList li .deleteItem a:hover {
  background: url(../assets/img/delete-btn-icon.jpg) no-repeat 0 -36px;
}
.list-bottom {
  position: relative;
  padding: 0 28px;
  padding-top: 11px;
  height: 81px;
  box-sizing: border-box;
  background: linear-gradient(to bottom, #ffffff, #f7f7f7);
  border-top: 1px solid #d9d9d9;
  box-shadow: 0 -1px 2px 2px #f6f6f6;
}
.list-bottom #nowClick > a {
  display: inline-block;
  width: 130px;
  height: 50px;
  border-radius: 8px;
  background: #7295e9;
  color: white;
  font: bold 16px/50px "微软雅黑";
  text-align: center;
  position: absolute;
  top: 20px;
  right: 29px;
}
.list-bottom > p {
  height: 70px;
  line-height: 70px;
}
.list-bottom > p b {
  font-size: 12px;
  color: #bbbbbb;
  margin-left: 22px;
}
.list-bottom > p b:before {
  display: inline-block;
  content: "";
  width: 1px;
  height: 12px;
  position: relative;
  top: 2px;
  left: -10px;
  background: #e1e1e1;
}
.list-bottom .all-buyinfo {
  min-width: 155px;
  float: right;
  position: absolute;
  top: 22px;
}
.list-bottom .all-buyinfo p:nth-of-type(1) span {
  color: #d44d44;
  font-size: 16px;
}
.list-bottom .all-buyinfo p:nth-of-type(2) {
  color: #959598;
}
.list-bottom .all-buyinfo p:nth-of-type(2) span {
  font-size: 16px;
}
.list-bottom .all-buyinfo:nth-of-type(1) {
  right: 362px;
  text-align: right;
}
.list-bottom .all-buyinfo:nth-of-type(2) {
  right: 160px;
}
.list-bottom .all-buyinfo:nth-of-type(2):before {
  content: "";
  width: 1px;
  height: 45px;
  position: absolute;
  left: -20px;
  display: inline-block;
  background: #e1e1e1;
}
.num > span {
  float: left;
  font-size: 12px;
  color: #8d8d8d;
  line-height: 3;
  margin-right: 20px;
}
.num {
  margin-bottom: 19px;
}
.num > i {
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
.num > i:hover {
  background: #f2f2f2;
}
.num > input {
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
.list-bottom > b {
  font-size: 0;
  width: 40px;
  height: 70px;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  float: left;
}
.list-bottom > b > a {
  position: absolute;
  display: block;
  width: 16px;
  height: 16px;
  top: 50%;
  background: url(../assets/img/noSelect.png);
  transform: translateY(-50%);
}

>>>>>>> 8460d1bb68dd2b1319801bcc3e9c2bee21e73234
</style>
