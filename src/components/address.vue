<template>
  <div @mouseenter="delIn" @mouseleave="delOut" @click="changeSelect" :class="[updateSelect?'active-selAddress':'', addressInfo]">
    <img v-show='addr.defaultAdd' src="../assets/img/right.png" />
    <div class="addContent">
      <p class="name">{{addr.name}}</p>
      <p class="tel">{{addr.tele}}</p>
      <p class="city">{{addr.province+' '+addr.city+ ' '+addr.country}}</p>
      <p class="address">{{addr.exactAdd}}</p>
    </div>
    <transition>
	    <div v-show='showDelete' class="delAddress">
	      <span @click.stop="changeThisAddr">修改</span>
	      <span @click.stop="deleteThisAddr">删除</span>
	    </div>
    </transition>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Address',
  props: ['addr','index'],
  data () {
  	return {
  		showDelete: false,
  		isSelect: false,
  		addressInfo: 'addressInfo'
  	}
  },
  computed: {
  	updateSelect () {
  		return this.$store.state.addresses[this.index].defaultAdd
  	}
  },
  methods: {
  	delIn () {
  	  this.showDelete = true
  	},
  	delOut () {
  	  this.showDelete = false
  	},
  	// 选中当前的地址
  	changeSelect () {
  		this.$store.commit('updateSelectHandle', this.index)
  	},
	changeThisAddr () {
		this.$store.commit('showNewAddHandle')
		this.$store.commit('isAddAddrHandle', false)
		this.$store.commit('changeNowAddrHandle', this.index)
	},
  	deleteThisAddr () {
  		let isDelete = confirm('是否删除本条地址？')
  		if (isDelete) {
  			this.$store.commit('deleteThisAddrHandle', this.index)
  		}
  		
  	}
  }
}
</script>

<style scoped>
  .v-enter, .v-leave-to{
  	transform: translateY(29px);
  }
  .v-enter-active, .v-leave-active{
  	transition: transform .3s;
  }
  .innerBox .addressInfo{
    width: 276px;
    height: 158px;
    background: #fafafa;
    border: 1px solid #e5e5e5;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    cursor: pointer;
    margin: 15px 18px 15px 0;
    float: left;
    padding: 0 18px 0 18px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  }
  .innerBox .active-selAddress{
    background: #fff;
    border: 1px solid #6a8fe5;
  }
  .innerBox .active-selAddress>img{
    display: block!important;
  }
  .innerBox .active-selAddress:hover{
    background: #fff!important;
  }
  .innerBox .addressInfo:nth-of-type(4n){
    margin: 0;
    margin: 15px 0;
  }
  .innerBox .addressInfo:hover{
    background: #f2f2f2;
    -webkit-transition: all .2s;
    -moz-transition: all .2s;
    -ms-transition: all .2s;
    -o-transition: all .2s;
    transition: all .2s;
  }
  .innerBox .addressInfo i{
    display: block;
    font: bold 24px "微软雅黑";
    text-align: center;
    color: #626262;
    padding-top: 48px;
  }
  .innerBox .addressInfo>p{
    padding-top: 18px;
    font: normal 14px "微软雅黑";
    color: #999999;
    text-align: center;
  }
  .innerBox .addressInfo .addContent>p{
    text-align: left;
    line-height: 27px;
    color: #999;
  }
  .innerBox .addressInfo .addContent>p:nth-of-type(1){
    padding-top: 9px;
    font: 16px/35px "微软雅黑";
    color: #666666;
  }
  .innerBox .addressInfo>img{
    position: absolute;
    right: 20px;
    top: 20px;
    color: #5079db;
  }
  .delAddress{
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 274px;
    background: #fff;
    border-top: 1px solid #e1e1e1;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
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
  .delAddress>span:hover {
  	background: #f2f2f2;
  }
  .delAddress>span:nth-of-type(2){
    display: inline-block;
    border-left: 1px solid #e1e1e1;
  }
</style>