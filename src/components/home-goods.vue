<template lang="html">
	<li class="content-goods">
		<slot name="promotionsTag"></slot>
		<a target="_blank" class="to-item">
			<img class="goods-img" :src="item.spu.sku_info[0].ali_image" />
		</a>
		<a class="content-href" href="#">
			<h3 class="content-name">{{item.spu.name}}</h3>
			<slot name="promotionsDesc">
				<h6 class="content-info">{{promotions.description}}</h6>
			</slot>
		</a>
		<ul class="color-select">
			<li class="select-active">
				<img>
				<!--只有在选中这个颜色的时候才会渲染，是否显示是通过移入移出控制的，在未移入的时候，虽然渲染了，但是设置了display为none，所以也不会显示-->
				<div class="cart-btn clear">
					<button><a target="_blank">查看详情</a></button>
					<button>加入购物车</button>
				</div>
			</li>
		</ul>
		<span class="content-price">￥ {{item.spu.price.toFixed(2)}}</span>
	</li>
</template>

<script>
/* eslint-disable */
export default {
	name: "homeGoods",
	props: ['item'],
	data(){
		return {
			promotions: '',
		}
	}
}
</script>

<style lang="css">

#home-content-container .every-hot-good .content-goods {
  width: 25%;
  height: 428px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  background: #fff;
  float: left;
  transition: all 0.2s;
  position: relative;
  box-sizing: border-box;
  height: 429px;
}
#home-content-container .every-hot-good .content-goods .specific-discount {
  box-sizing: border-box;
  text-align: center;
  position: absolute;
  height: 22px;
  padding: 0 10px;
  border: 1px solid #d4b37f;
  border-radius: 11px;
  background-color: #fefade;
  min-width: 56px;
  font-size: 0.54545455px "微软雅黑";
  color: #a06e37;
  top: 18px;
  right: 20px;
}
#home-content-container .every-hot-good .content-goods .buygive{
	color: #d03b4f;
	border: 1px solid #f3938b;
	background-color: #ffe7e5;
}
#home-content-container .every-hot-good .content-goods .to-item {
  width: 206px;
  height: 206px;
  margin: 50px auto 10px;
  cursor: pointer;
  display: block;
}
#home-content-container .every-hot-good .content-goods .to-item .goods-img {
  width: 206px;
  height: 206px;
}
#home-content-container .every-hot-good .content-goods .content-href {
  display: block;
  width: auto;
}
#home-content-container .every-hot-good .content-goods .content-href h3{
  text-align: center;
}
#home-content-container .every-hot-good .content-goods .content-href h3 {
  font: 16px/26px "微软雅黑";
  color: #424242;
}
#home-content-container .every-hot-good .content-goods .color-select {
  padding-top: 20px;
  text-align: center;
  font-size: 0;
}
#home-content-container .every-hot-good .content-goods .color-select li {
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
#home-content-container .every-hot-good .content-goods .color-select li img {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #fff;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active {
  border-color: #b9b9b9;
  background: #b9b9b9;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn {
  padding: 0 46px;
  margin-bottom: 29px;
  position: absolute;
  left: 0;
  bottom: 0;
  transition: all .3s;
  display: none;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button {
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
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button a {
  display: block;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button:nth-of-type(1) {
  border: 1px solid #d5d5d5;
  color: #a9a6a9;
  background: #fff;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button:nth-of-type(1):hover {
  background: #f1f1f1;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button:nth-of-type(2) {
  border: 1px solid #5c81e3;
  color: #e6ecf4;
  background: linear-gradient(to bottom, #7699e8, #5c81e3);
  margin: 0;
}
#home-content-container .every-hot-good .content-goods .color-select .select-active .cart-btn button:nth-of-type(2):hover {
  background: linear-gradient(to bottom, #6d8dd4, #5374c8);
}
#home-content-container .every-hot-good .content-goods .content-price {
  display: block;
  padding-top: 21px;
  text-align: center;
  color: #d44d44;
  font-weight: bold;
  font-size: 18px;
}
#home-content-container .every-hot-good .content-goods:hover .content-price {
  display: none;
}
#home-content-container .every-hot-good .content-goods:hover .color-select .select-active .cart-btn {
  display: block;
}
#home-content-container .every-hot-good .content-goods:nth-of-type(4n) {
  border-right: none;
}
</style>
