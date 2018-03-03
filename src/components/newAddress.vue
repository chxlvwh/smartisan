<template>
<div class="newAddress">
	<div class="innerNewAdd">
		<header>管理收货地址<img @click="closeNewAddress" src="../assets/img/xx.png" /></header>
		<div class="innerBox">
			<input type="text" placeholder="收货人姓名" v-model="info.name" />
			<input type="text" placeholder="手机号" v-model="info.tele" />
			<input type="text" placeholder="区号（可选）" v-model="info.quhao" />
			<input type="text" placeholder="固定电话（可选）" v-model="info.phone" />
			<select v-model="info.province">
					<option selected>请选择省份</option>
					<option>江苏省</option>
					<option>浙江省</option>
					<option>上海</option>
				</select>
			<select v-model="info.city">
					<option selected>请选择城市</option>
					<option>苏州市</option>
					<option>徐州市</option>
				</select>
			<select v-model="info.country">
					<option selected>请选择区县</option>
					<option>吴中区</option>
				</select>
			<input type="text" placeholder="详细地址，如街道，楼层，门牌号码等" v-model="info.exactAdd" />
			<input type="radio" v-model="info.defaultAdd" />
			<img @click="switchMoren" class="moren" :src="'/src/assets/img/'+switchImg+'.png'" />
			<span>设为默认地址</span>
			<a @click="submitAdd">保存</a>
		</div>
	</div>
</div>
</template>

<script>
/* eslint-disable */

import {
	mapState,
	mapMutations
} from 'vuex'

export default {
	name: 'NewAddress',
	computed: {
		// 当前地址对话框中的值
		info() {
			return this.$store.state.nowAddrInfo
		},
		switchImg() {
			return this.info.defaultAdd ? 'moren2' : 'moren1'
		},
		isNewAddNull() {
			if (!this.info.name || !this.info.tele || !this.info.quhao || !this.info.phone || !this.info.province || !this.info.city || !this.info.country || !this.info.exactAdd) {
				return false
			} else {
				return true
			}
		},
		addressProps() {
			return this.$store.state.addresses
		},
		// 是否新增地址
		addOrChange() {
			return this.$store.state.isAddAddr
		},
		addrIndex() {
			return this.$store.state.changeAddrIndex
		}
	},
	methods: {
		closeNewAddress() {
			this.$store.commit('closeNewAddressHandle')
		},
		submitAdd() {
			if (!this.isNewAddNull) {
				alert('值不得为空！')
					// 新增地址的时候
			} else if (this.addOrChange) {
				let addr = JSON.stringify(this.info)
				this.$store.commit('submitAddHandle', JSON.parse(addr))
				this.$store.commit('closeNewAddressHandle')
				// 修改地址的时候
			} else {
				this.$store.commit('changeThisAddrHandle', {
					aIndex: this.addrIndex,
					aInfo: this.info
				})
				this.$store.commit('closeNewAddressHandle')
			}
		},
		switchMoren() {
			this.info.defaultAdd = !this.info.defaultAdd
		}
	}
}
</script>

<style scoped>
.newAddress {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.8);
	z-index: 99999;
}

.innerNewAdd {
	z-index: 99999;
	width: 450px;
	border: 1px solid #c7c7c7;
	border-radius: 15px;
	margin: 0 auto;
	overflow: hidden;
	position: absolute;
	top: 50%;
	/*父级容器的50%*/
	left: 50%;
	transform: translate(-50%, -50%);
	/*自身宽高的50%*/
}

header {
	height: 72px;
	text-align: center;
	font: 26px/72px "微软雅黑";
	color: #646464;
	position: relative;
	background: linear-gradient(to bottom, #fafafa, #e8e8e8);
}

header img {
	width: 18px;
	height: 17px;
	position: absolute;
	top: 28px;
	right: 21px;
	cursor: pointer;
}

.innerBox {
	padding: 30px 40px;
	background: #FFF;
	font-size: 0;
}

input {
	margin-bottom: 15px;
	font-size: 15px;
}

.innerBox input[type='text'] {
	width: 368px;
	height: 46px;
	border: 1px solid #d0d0d0;
	border-radius: 5px;
	outline: none;
	text-indent: 16px;
}

.innerBox input[type='text']:nth-of-type(3) {
	width: 118px;
	margin-right: 10px;
}

.innerBox input[type='text']:nth-of-type(4) {
	width: 238px;
}

select,
span {
	font-size: 16px;
}

select {
	width: 368px;
	border: 1px solid #d0d0d0;
	height: 46px;
	margin-bottom: 15px;
	border-radius: 5px;
	text-indent: 11px;
	background: linear-gradient(to bottom, #f9f9f9, #f6f6f6);
}

select:nth-of-type(2) {
	width: 178px;
	margin-right: 10px;
}

select:nth-of-type(3) {
	width: 178px;
}

a {
	cursor: pointer;
	display: block;
	width: 368px;
	border: 1px solid #6e8ac7;
	height: 46px;
	color: white;
	text-align: center;
	outline: none;
	font: bold 18px/46px "微软雅黑";
	border-radius: 5px;
	background: linear-gradient(to bottom, #7da1f4, #5b82f0);
}

a:active {
	background: linear-gradient(to bottom, #5378d1, #5d81d3);
}

input[type='radio'] {
	display: none;
}

.moren {
	width: 19px;
	height: 19px;
	display: inline-block;
	margin-bottom: 15px;
	cursor: pointer;
}

span {
	vertical-align: top;
	margin-left: 4px;
}
</style>
