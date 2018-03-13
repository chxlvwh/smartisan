import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/reset.css'
import '@/assets/css/shop1.css'
import Shop from '@/views/shop'
import Item from '@/views/item'
import Buyinfo from '@/views/buyinfo'
import ShoppingList from '@/views/shoppingList'
import PayView from '@/views/pay'

Vue.use(Router)

/* eslint-disable */
let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/item',
      name: 'Item',
      component: Item
    },
    {
      path: '/buyinfo',
      name: 'Buyinfo',
      component: Buyinfo
    },
    {
    	path: '/shoppingList',
    	name: 'ShoppingList',
    	component: ShoppingList
    },
    {
    	path: '/payView',
    	name: 'PayView',
    	component: PayView
    }
  ]
})

export default router
