<template>
<div id="shop">
	<ul id="nav-3-container">
		<li><a class="active" href="#">综合排序</a></li>
		<li><a href="#">销量排序</a></li>
		<li><a href="#">价格低到高</a></li>
		<li><a href="#">价格高到低</a></li>
	</ul>
	<ul id="content-container">
		<li v-for="item,index in goodsData" is="goodsList" :item="item">
		</li>
	</ul>
</div>
</template>

<script>
/* eslint-disable */
//  import goodsData from '@/lib/newGoodsData'
import goodsList from '@/components/goods'
export default {
	data() {
		return {
			goodsData: []
		}
	},
	components: {
		goodsList
	},
	created() {
		this.$http.get('api/spus?page_size=20&category_id=60&page=1&sort=sort').then(
			function(res) {
				this.goodsData = res.body.data.list
				console.log(res.body.data.list)
			}
		)
	}
}
</script>

<style scoped>
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
	height: 310px;
	/*background: url(../img/phone2.jpg) no-repeat center center;*/
}

#content-container .content-goods .content-href h3,
#content-container .content-goods .content-href h6 {
	text-align: center;
}

#content-container .content-goods .content-href h3 {
	padding-top: 262px;
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

#content-container .content-goods .color-select li span {
	display: block;
	width: 8px;
	height: 8px;
	background: #d60c32;
	border-radius: 50%;
	border: 1px solid #fff;
}

#content-container .content-goods .color-select .select-active {
	border-color: #b9b9b9;
	background: #b9b9b9;
}

#content-container .content-goods .color-select li:nth-of-type(2) span {
	background: #d6b894;
}

#content-container .content-goods .color-select li:nth-of-type(3) span {
	background: #646634;
}

#content-container .content-goods .content-price {
	display: block;
	padding-top: 21px;
	text-align: center;
	color: #d44d44;
	font-weight: bold;
	font-size: 18px;
}

#content-container .content-goods .cart-btn {
	padding: 0 46px;
	margin-bottom: 29px;
	position: absolute;
	bottom: 0;
	transition: all .3s;
	display: none;
}

#content-container .content-goods .cart-btn button {
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

#content-container .content-goods .cart-btn button:nth-of-type(1) {
	border: 1px solid #d5d5d5;
	color: #a9a6a9;
	background: #fff;
}

#content-container .content-goods .cart-btn button:nth-of-type(1):hover {
	background: #f1f1f1;
}

#content-container .content-goods .cart-btn button:nth-of-type(2) {
	border: 1px solid #5c81e3;
	color: #e6ecf4;
	background: linear-gradient(to bottom, #7699e8, #5c81e3);
	margin: 0;
}

#content-container .content-goods .cart-btn button:nth-of-type(2):hover {
	background: linear-gradient(to bottom, #6d8dd4, #5374c8);
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
