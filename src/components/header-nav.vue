<template>
  <div>
    <header>
      <div id="header-container">
        <h1>
          <a href="#" title="锤子科技官网">Smartisan</a>
        </h1>
        <ul class="nav-user">
          <li class="user-img"><a href="#"></a></li>
          <li class="cart-img" ref="cartimg" @mouseenter="showCart" @mouseleave="hideCart">
            <a class="cart-cart-img" href="#"></a>
            <!--<transition name="toggle">-->
            <span class="cart" :class="{'active1': isActive}" ref="total">{{total}}</span>
            <!--</transition>-->
            <img class="cart-angle" src="/src/assets/img/cart-angle.png" v-show="cartShow"/>
            <div class="shopping-cart" v-show="cartShow" @mouseleave="hideCart">
              <shopping-cart></shopping-cart>
            </div>
            <transition
              name="ball"
              @before-enter="beforeEnter"
              @enter="enter"
              @after-enter="afterEnter"
              v-bind:css="true"
            >
              <div id="ball" v-show="ball.show">
                <img class="mask-ball" alt="">
              </div>
            </transition>
          </li>
        </ul>
        <ul class="nav">
          <li><a href="">在线商城</a></li>
          <li><a href="">坚果 Pro 2</a></li>
          <li><a href="">坚果 Pro</a></li>
          <li><a href="">Smartisan OS</a></li>
          <li><a href="">欢喜云</a></li>
          <li><a href="">应用下载</a></li>
          <li><a href="">官方论坛</a></li>
        </ul>
      </div>
    </header>
    <ul id="nav-2-container">
      <li><a href="#">首页</a></li>
      <li><a href="#">手机</a></li>
      <li><a href="#">“足迹”手感膜</a></li>
      <li><a href="#">“足迹”保护套</a></li>
      <li><a class="active" href="#">官方配件</a></li>
      <li><a href="#">空气净化类</a></li>
      <li><a href="#">品牌周边</a></li>
      <li><a href="#">第三方商品</a></li>
      <li><a href="#">全部商品</a></li>
      <li><a href="#">服务</a></li>
    </ul>
  </div>
</template>

<script>
  import shoppingCart from '@/components/shopping-cart'

  export default {
    components: {
      shoppingCart
    },
    computed: {
      cartShow: function () {
        return this.$store.state.showCart
      },
      total: function () {
        return this.$store.getters.totalCount
      },
      isActive: function () {
        return this.$store.state.changeCarColor
      },
      ball () {
        return this.$store.state.ball
      }
    },
    methods: {
      // el代表小球的父级
      beforeEnter (el) {
        // 被点击的按钮的位置
        let rectEl = this.ball.el.getBoundingClientRect()
        // 小球父级的位置
        let rect = document.getElementsByClassName('cart-cart-img')[0].getBoundingClientRect()
        let x = rectEl.left + 45 - rect.left - rect.width / 2
        let y = rectEl.top + 10 - rect.top - rect.height / 2
        let ball = document.getElementsByClassName('mask-ball')[0]
//        console.log(el, x, y)
        el.style.transform = 'translate3d(0,' + y + 'px,0)'
        ball.style.transform = 'translate3d(' + x + 'px,0,0)'
        ball.src = this.ball.img
      },
      enter (el) {
        let ball = document.getElementsByClassName('mask-ball')[0]
        // 主动渲染一下小球
        let a = el.offsetWidth
        el.a = a
        el.style.transform = 'translate3d(0,0,0)'
        ball.style.transform = 'translate3d(0,0,0)'
      },
      afterEnter (el) {
        this.ball.show = false
      },
      showCart () {
        this.$refs.cartimg.style.paddingBottom = '20px'
        this.$store.commit('showCartHandle')
      },
      hideCart () {
        this.$refs.cartimg.style.paddingBottom = '0'
        this.$store.commit('hideCartHandle')
      }
    }
//    updated () {
//      console.log(this.$store.getters.totalCount)
//    }
  }
</script>

<style scoped>
  .ball-enter-active {
    transition: 0.8s cubic-bezier(.11, .62, .75, 1.36);
  }

  .mask-ball {
    transition: 0.8s linear;
  }

  #ball {
    position: absolute;
    top: 0px;
    left: 6px;
    z-index: 99999;
  }

  #ball img {
    width: 20px;
    height: 20px;
    background: #fff;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
</style>
