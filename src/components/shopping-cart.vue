<template>
  <div>
    <div class="cart-empty" v-if="totalCount<=0">
      <p>购物车为空</p>
      <p>您还没有选购任何商品，现在前往商城选购吧!</p>
    </div>
    <div class="goods" v-else>
      <ul class="cart-goods">
        <li v-for="item,index in cartData">
          <img :src="item.ali_image" alt="123" />
          <div>
            <h4>{{item.title}}</h4>
            <p>{{item.spec_json.show_name}}</p>
            <p><span>￥{{item.price}} </span>x <i>{{item.count}}</i></p>
            <span class="close-btn" @click="delCarPanelHandle(index)"></span>
          </div>
        </li>
      </ul>
      <div class="cart-sum">
        <p class="all-num">共<span>{{totalCount}}</span>件商品</p>
        <p class="all-price">合计：<span><i>￥</i> {{totalPrice}}</span></p>
        <router-link :to="{name: 'ShoppingList'}"><button>去购物车</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      computed: {
        cartData () {
          return this.$store.state.carPanelData
        },
        totalCount () {
          return this.$store.getters.totalCount
        },
        totalPrice () {
          return this.$store.getters.totalPrice
        }
      },
      methods: {
        delCarPanelHandle (index) {
          this.$store.commit('delCarPanelData', index)
        }
      }
    }
</script>

<style scoped>
  #header-container .nav-user .cart-img .shopping-cart .cart-empty {
    cursor: default;
    width: 360px;
    height: 324px;
    background: url(/src/assets/img/cart-empty.png) no-repeat 142px 96px;
  }
  #header-container .nav-user .cart-img .shopping-cart .cart-empty p:nth-of-type(1) {
    padding-top: 184px;
    text-align: center;
    font-size: 17px;
    color: #333333;
  }
  #header-container .nav-user .cart-img .shopping-cart .cart-empty p:nth-of-type(2) {
    padding-top: 12px;
    text-align: center;
    font-size: 12px;
    color: #bcbcbc;
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods li {
    border-bottom: 1px solid #f0f0f0;
    width: 360px;
    height: 120px;
    box-sizing: border-box;
    padding: 20px;
    background: #fff;
    cursor: default;
    position: relative;
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods li img:nth-child(1) {
    background: white;
    border: 1px solid #f0f0f0;
    width: 62px;
    height: 62px;
    padding: 8px;
    float: left;
    margin-right: 18px;
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods li div h4 {
    font: 14px/28px "微软雅黑";
    color: #000000;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods li div p:nth-of-type(1) {
    color: #999999;
    font: 14px/28px "微软雅黑";
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods li div p:nth-of-type(2) {
    color: #cbcbcb;
    font: 12px/28px "微软雅黑";
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods li div p:nth-of-type(2) span {
    color: #d44d44;
    font-weight: bold;
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods li div .close-btn {
    display: none;
    width: 20px;
    height: 20px;
    position: absolute;
    top: 48px;
    right: 20px;
    cursor: pointer;
    border-radius: 50%;
    background: url(/src/assets/img/delete-btn-icon.jpg) no-repeat 0 0;
    background-size: 100%;
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods li:hover {
    background: #fcfcfc;
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods li:hover .close-btn {
    display: block;
  }
  #header-container .nav-user .cart-img .shopping-cart .goods .cart-goods .close-btn:hover {
    background: url(/src/assets/img/delete-btn-icon.jpg) no-repeat 100% 100%;
    background-size: 100%;
  }

</style>
