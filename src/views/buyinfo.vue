<template>
  <div id="buyPage">
    <div class="info">
      <div class="headerName">收货信息</div>
      <div class="innerBox">
        <ul class="clear">
    	  <li v-for="addr,index in addrs" :addr='addr' :index='index' is="address-list" v-if="moreAddr(index)"></li>
          <div @click="addNewAdd" class="addNewAdd">
            <i class="">+</i>
            <p>使用新地址</p>
          </div>
        </ul>
        <p @click="isShowMoreAddr" v-if="showMoreAddrHandle" class="moreAddress"><a href="javascript:">更多地址<i :class="{'rotateAngle':showMoreAddr}" class="fa fa-caret-down"></i></a></p>
      </div>
    </div>
    <div class="info">
      <div class="headerName">发票信息</div>
      <div class="innerBox">
      	<p>发票类型：电子发票<a class="attention" href="https://www.smartisan.com/support/#/help-service/instruction?title=%E5%8F%91%E7%A5%A8%E8%AF%B4%E6%98%8E">i</a></p>
      	<p>发票抬头：
      			<input @click="companyFP" type="radio" name="fapiao" checked="checked" />个人
      			<input @click="companyFP" type="radio" name="fapiao">单位
      			<div class="fapiao-info" v-if="companyFPShow">
	      			<div><input type="text" placeholder="请填写公司发票抬头" /><span>必填</span></div>
	      			<div><input v-model="fapiaohao" @blur="showTips" type="text" placeholder="请填写纳税人识别码" /><span v-show="showHaveTo">必填</span><b v-show="tips">*企业发票纳税人识别码为 15 位、17 位、18 位、20 位数字或字母</b></div>
      			</div>
      			
      	</p>
      	<p>发票内容：购买商品明细</p>
      	<p>电子发票是税务局认可的有效收付款凭证，可作为售后服务凭据。电子发票打印后可以用于企业报销。</p>
      </div>
    </div>
    <div class="info">
      <div class="headerName">购物清单</div>
      <p class="boxName">商品信息<span>小计</span><span>数量</span><span>单价</span></p>
      <ul class="goodsList">
        <li v-for="item,index in items">
        	<img :src="item.ali_image" />
        	<h4>{{item.title}}</h4>
        	<span>￥{{item.price}}</span>
        	<span>{{item.count}}</span>
        	<span>￥{{item.price}}</span>
        </li>
      </ul>
      <div class="all-info">
      	<p>商品总计:<i>￥{{totalPrice}}</i></p>
      	<p>运费:<i>+￥0.00</i></p>
      </div>
      <div class="list-bottom">
      	<span>应付金额</span>
      	<i>￥{{totalPrice}}</i>
      	<router-link :to="{name: 'PayView'}">提交订单</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import addressList from '@/components/address'
export default {
  name: 'Buyinfo',
  data () {
  	return {
  		showMoreAddr: false,
  		// 是否开具企业发票
  		companyFPShow: false,
  		// 控制发票说明的显示
  		tips: false,
  		fapiaohao: '',
  		// 显示必填
  		showHaveTo: false
  	}
  },
  components: {
    addressList
  },
  computed: {
  	addrs () {
  		return this.$store.state.addresses
  	},
  	showAddr () {
  		return true
  	},
  	showMoreAddrHandle (index) {
  		return this.addrs.length > 3
  	},
  	items () {
  		return this.$store.state.selectedItemData
  	},
  	totalPrice () {
  		return this.$store.getters.selectedPrice
  	}
  },
  methods: {
  	addNewAdd () {
  		this.$store.commit('showNewAddHandle')
  		this.$store.commit('isAddAddrHandle', true)
  		this.$store.commit('changeNowAddrInfo')
  	},
  	moreAddr (index) {
  		if (!this.showMoreAddr) {
  			if (index<3) {
  				return true
  			} else {
  				return false
  			}
  		} else{
  			return true
  		}
  	},
  	isShowMoreAddr () {
  		this.showMoreAddr = !this.showMoreAddr
  	},
  	companyFP () {
  		this.companyFPShow = !this.companyFPShow
  	},
  	showTips () {
  		let num = Number(this.fapiaohao.length)
  		if (num!==15&&num!==17&&num!==18&&num!==20) {
  			this.tips = true
  		} else {
  			this.tips = false
  		}
  		if (this.fapiaohao=='') {
  			this.showHaveTo = true
  		} else {
  			this.showHaveTo = false
  		}
  	}
  }
}
</script>

<style scoped>
  @import url("../assets/css/font-awesome.min.css");
  .rotateAngle {
  	transform: rotateZ(180deg);
  }
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
  }
  .info .innerBox .addNewAdd{
    width: 276px;
    height: 158px;
    background: #fafafa;
    border: 1px solid #e5e5e5;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
    margin: 15px 0;
    float: left;
    padding: 0 18px 0 18px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .info .innerBox .active-selAddress{
    background: #fff;
    border: 1px solid #6a8fe5;
  }
  .info .innerBox .addNewAdd:hover{
    background: #f2f2f2;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
  }
  .info .innerBox .addNewAdd i{
    display: block;
    font: bold 24px "微软雅黑";
    text-align: center;
    color: #626262;
    padding-top: 48px;
  }
  .info .innerBox .addNewAdd>p{
    padding-top: 18px;
    font: normal 14px "微软雅黑";
    color: #999999;
    text-align: center;
  }
  .info .innerBox .addNewAdd .addContent>p{
    text-align: left;
    line-height: 27px;
    color: #999;
  }
  .info .innerBox .addNewAdd .addContent>p:nth-of-type(1){
    padding-top: 9px;
    font: 16px/35px "微软雅黑";
    color: #666666;
  }
  .info .innerBox .addNewAdd>img{
    display: none;
    position: absolute;
    right: 20px;
    top: 20px;
    color: #5079db;
  }
  .delAddress{
    position: absolute;
    bottom: -29px;
    left: 0;
    width: 274px;
    background: #fff;
    border-top: 1px solid #e1e1e1;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    -webkit-transition: bottom 0.2s;
    -moz-transition: bottom 0.2s;
    -ms-transition: bottom 0.2s;
    -o-transition: bottom 0.2s;
    transition: bottom 0.2s;
  }
  .delAddress>span{
    float: left;
    display: inline-block;
    text-align: center;
    width: 137px;
    line-height: 28px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .delAddress>span:nth-of-type(2){
    display: inline-block;
    border-left: 1px solid #e1e1e1;
  }
  .moreAddress a{
    color: #999;
  }
  .moreAddress a i{
    margin-left: 5px;
  }
  .info .innerBox:nth-of-type(2) p{
  	line-height: 36px;
  	position: relative;
  }
  .info .innerBox:nth-of-type(2) p .attention{
  	display: block;
  	height: 16px;
  	width: 16px;
  	border-radius: 50%;
  	background: #cccccc;
  	text-align: center;
  	line-height: 16px;
  	font-style: italic;
  	position: absolute;
  	top: 10px;
  	left: 134px;
  	color: #fff;
  	font-family: Monotype Corsiva;
  }
  .info .innerBox:nth-of-type(2) p:nth-of-type(4){
  	font-size: 12px;
  	color: #99999c;
  	height: 50px;
  	line-height: 62px;
  	border-top: 1px solid #e5e5e5;
  }
  .info .innerBox:nth-of-type(2) p:nth-of-type(4):before{
  	content: '*';
  }
  .fapiao-info input{
  	width: 336px;
  	height: 34px;
  	border: 1px solid #6b93f2;
  	border-radius: 5px;
  	margin-bottom: 10px;
  	text-indent: 15px;
  	font: 14px/34px "微软雅黑";
  	margin-left: 70px;
  }
  .fapiao-info div{
  	position: relative;
  }
  .fapiao-info div span{
  	position: absolute;
  	left: 350px;
  	top: 5px;
  	display: block;
  	width: 42px;
  	height: 26px;
  	border-radius: 4px;
  	font-size: 11px;
  	line-height: 26px;
  	text-align: center;
  	background: #e66157;
  	color: #FFFFFF;
  }
  .fapiao-info div b{
  	color: #e66157;
  	margin-left: 10px;
  }
  .info .boxName{
  	height: 38px;
  	font: bold 11px/38px "微软雅黑";
  	padding-left: 30px;
  	color: #838383;
  	letter-spacing: 1px;
  	border-bottom: 1px solid #dbdbdb;
  }
  .info .boxName span{
  	display: inline-block;
  	width: 137px;
  	height: 38px;
  	float: right;
  	vertical-align: middle;
  	text-align: center;
  }
  .goodsList li{
  	background: #FFFFFF;
  	padding: 15px 0 15px 30px;
  	font-size: 0;
  	border-bottom: 1px solid #ebebeb;
  }
  .goodsList img{
  	width: 78px;
  	height: 78px;
  	border: 1px solid #f0f0f0;
  	background: #FFFFFF;
  	display: inline-block;
  	vertical-align: middle;
  }
  .goodsList li h4{
  	display: inline-block;
  	margin-left: 30px;
  	font-size: 14px;
  }
  .goodsList li span{
  	display: inline-block;
  	font-size: 14px;
  	width: 137px;
  	height: 78px;
  	line-height: 78px;
  	float: right;
  	text-align: center;
  }
  .all-info{
  	background: #FFFFFF;
  	border-bottom: 1px solid #dadada;
  	padding: 21px 30px 21px 0;
  }
  .all-info p{
  	line-height: 30px;
  	text-align: right;
  }
  .all-info p i{
  	width: 167px;
  	float: right;
  	text-align: right;
  }
  .list-bottom{
  	padding: 22px 0;
  	text-align: right;
  }
  .list-bottom a{
  	display: inline-block;
  	width: 130px;
  	height: 50px;
  	border-radius: 8px;
  	background: #7295e9;
  	margin-right: 29px;
  	/*float: right;*/
  	color: white;
  	font: bold 16px/50px "微软雅黑";
  	text-align: center;
  }
  .list-bottom i{
  	font: bold 18px "微软雅黑";
  	color: #d44d44;
  	margin-right: 42px;
  }
  .list-bottom span{
  	margin-right: 14px;
  	color: #816f66;
  }
</style>