<template>
	<div id="buyPage">
		<div class="info">
	      <div class="headerName">支付订单</div>
	      <div class="innerBox">
	      	<p>提交订单成功</p>
	      	<p>请在 <span>24 小时内</span>完成支付，超时订单将自动取消。</p>
	      	<p>我们将在您完成支付后的 72 小时内发货</p>
	      </div>
	    </div>
    </div>
</template>

<script>
	/* eslint-disable */
	export default {
		name: 'PayView'
	}
</script>

<style scoped>
  #buyPage{
    padding: 29px 0 0 0;
    margin: 0 auto;
    width: 1220px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  #buyPage .info{
    border: 1px solid #dbdbdb;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    overflow: hidden;
    width: auto;
    height: auto;
    margin-bottom: 30px;
  }
  #buyPage .info .headerName{
    width: 1218px;
    height: 60px;
    background: linear-gradient(to bottom,#fafafa,#ececec);
    border-bottom: 1px solid #d4d4d4;
    box-shadow: 0 2px 5px 2px #f6f6f6;
    font: 18px/60px "微软雅黑";
    text-indent: 24px;
  }
  #buyPage .info .innerBox{
    padding: 15px 30px;
    background: #fff;
    height: 200px;
  }
  #buyPage .info .innerBox p{
  	text-align: center;
  	color: #999999;
  	line-height: 24px;
  }
  #buyPage .info .innerBox p span{
  	color: #d64d44;
  }
  #buyPage .info .innerBox p:nth-of-type(1){
  	padding-top: 30px;
  	font-size: 36px;
  	color: #212121;
  	line-height: 64px;
  }
</style>