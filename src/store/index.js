import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* eslint-disable */
let store = new Vuex.Store({
  state: {
    // 数组放置购物车中的sku_info,数组的每一项都是一个对象
    // {
    //   "sku_id": 100027102,
    //   "title": "坚果 Pro 软胶保护套",
    //   "sub_title": "TPU 环保材质、耐磨、耐油、耐久性强",
    //   "ali_image": "http://image.smartisanos.cn/resource/554da94d8e4f84f03e0015fd1c997f46.jpg",
    //   "price": 49.00,
    //   "limit_num": 5,
    //   "spec_json": {
    //     "image": "attr/v2/1000271/649AD35E36A9703BACBE1555AEB6D266/",
    //     "show_name": "黑色"
    //   },
    //   "count": 0
    // }
    carPanelData: [],
    ddd: [ {a:1} ],
    showPrompt: false,
    changeCarColor: true,
    showCart: false,
    ball: {
      show: false,
      el: '',
      img: ''
    },
    // j加入购物车前，被选中的商品的颜色
    colorSelect: 0,
    // 存储地址的数据信息
    addresses: [],
    // 控制是否显示新增地址页面
    showNewAddress: false,
    // 存储当前弹出的地址框内的数据，初始值为0
    nowAddrInfo: {
			name:'1',
			tele:'1',
			quhao:'1',
			phone:'1',
			province:'请选择省份',
			city:'请选择城市',
			country:'请选择县',
			exactAdd:'1',
			defaultAdd: false
    },
    // 判断是新增地址还是修改地址
    isAddAddr: true,
    // 存储被修改地址的索引
    changeAddrIndex: 0,
    // 要付款的项目，true和false的集合
    selectPay: [],
    // 购物车中已选中的项目
    selectedItemData: []
  },
  getters: {
    totalCount (state) {
      let count = 0
      state.carPanelData.forEach((goods) => {
        count += goods.count
      })
      if (count) {
        state.changeCarColor = true
      } else {
        state.changeCarColor = false
      }
      return count
    },
    totalPrice (state) {
      let price = 0
      state.carPanelData.forEach((goods) => {
        price += goods.price * goods.count
      })
      return price
    },
    selectedNum (state) {
    	let num = 0
    	state.selectedItemData.forEach((item)=>{
    		num += item.count
    	})
    	return num
    },
    selectedPrice (state) {
    	let price = 0
    	state.selectedItemData.forEach((item)=>{
    		price += item.price*item.count
    	})
    	return price
    }
  },
  mutations: {
    addCarPanelData: function (state, payload) {
      let eOff = true
      let timer = null
      state.carPanelData.forEach((goods) => {
        // 判断购物车中是否已经有添加过这个商品
        // 如果添加过
        if (goods.sku_id === payload.data.sku_id) {
          // 当小球不运动的时候，才执行加入购物车的动作
          if (!state.ball.show) {
            // 下面三行是控制小球的状态：显示，图像，被点击的元素
            state.ball.show = true
            state.ball.img = payload.data.ali_image
            state.ball.el = event.path[0]
            // 判断加购数量有没有超出规定的值
            if (goods.count + payload.num > goods.limit_num) {
              state.ball.show = false
              state.showPrompt = true
            } else {
              // 设置延迟时间的目的是：等小球动画完成后再增加购物车中的数量，客户体验更好，这个800ms就是小球的transition的持续时间
              clearTimeout(timer)
              timer = setTimeout(function () {
                goods.count += payload.num
                Vue.set(goods, 'count', goods.count)
                state.showCart = true
              }, 800)
            }
            eOff = false
          }
        }
      })
      // 如果购物车中没有这个商品
      if (eOff) {
        // 下面是执行同样的小球的动画
        if (!state.ball.show) {
          state.ball.show = true
          state.ball.img = payload.data.ali_image
          state.ball.el = event.path[0]
          setTimeout(function () {
            // 添加商品的时候让购物车显示出来
            state.showCart = true
            let goodsData = payload.data
            // 给这个对象添加设置key，value值，用Vue.set 确保添加的属性是响应式的，同时触发视图更新
            // 不能用goodsData.count = 1，这样添加的属性是非响应式的
            Vue.set(goodsData, 'count', payload.num)
            state.carPanelData.push(goodsData)
          }, 800)
        }
      }
    },
    delCarPanelData: function (state, index) {
      state.carPanelData.splice(index, 1)
    },
    delCarPanelNumData: function (state, index) {
    	let count = state.carPanelData[index].count
    	if (count>1) {
    		count--
    		Vue.set(state.carPanelData[index],'count',count)
    	}
    },
    addCarPanelNumData: function (state, index) {
    	let count = state.carPanelData[index].count
    	if (count<state.carPanelData[index].limit_num) {
    		count++
    	}
		  Vue.set(state.carPanelData[index],'count',count)
    },
    promptClose (state) {
      state.showPrompt = false
    },
    showCartHandle (state) {
      state.showCart = true
    },
    hideCartHandle (state) {
      state.showCart = false
    },
    selectColor (state, payload) {
      state.colorSelect = payload.index
    },
    showNewAddHandle (state) {
    	state.showNewAddress = true
    },
    closeNewAddressHandle (state) {
    	state.showNewAddress =false
    },
    // 添加新的地址
    submitAddHandle (state, payload) {
    	if (payload.defaultAdd) {
    		state.addresses.forEach((addr)=>{
    			addr.defaultAdd = false
    		})
    	}
    	state.addresses.push(payload)
    },
    // 选择地址
    updateSelectHandle (state, index) {
    	state.addresses.forEach((addr)=>{
    		addr.defaultAdd = false
    	})
    	state.addresses[index].defaultAdd = true
    },
    // 删除地址
    deleteThisAddrHandle (state, index) {
    	state.addresses.splice(index, 1)
    },
    // 修改地址
    changeNowAddrHandle (state, index) {
    	state.nowAddrInfo = JSON.parse(JSON.stringify(state.addresses[index]))
    	state.changeAddrIndex = index
    },
    // 是否要增加地址
    isAddAddrHandle (state, payload) {
    	state.isAddAddr = payload
    },
    changeThisAddrHandle (state, payload) {
    	state.addresses.splice(payload.aIndex,1,payload.aInfo)
    },
    changeNowAddrInfo (state) {
    	state.nowAddrInfo = {
														name:'',
														tele:'',
														quhao:'',
														phone:'',
														province:'请选择省份',
														city:'请选择城市',
														country:'请选择区县',
														exactAdd:'',
														defaultAdd: false
											    }
    },
    initPayItem (state,payload) {
    	for (let i=0;i<state.carPanelData.length;i++) {
    		state.selectPay.splice(i,1,payload)
    	}
    },
    changePayItem (state,payload) {
    	if (!payload.del) {
	    	let onOff = !state.selectPay[payload.index]
	    	state.selectPay.splice(payload.index,1,onOff)
    	} else{
    		state.selectPay.splice(payload.index,1)
    	}
    },
    delAllSelected (state, payload) {
    	console.log(payload)
    },
    selectedItem (state, payload) {
    	state.selectedItemData = payload
    	console.log(state.selectedItemData)
    }
  }
})

export default store
