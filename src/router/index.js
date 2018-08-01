import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodlist from '@/views/goodlist'
import cart from '@/views/cart'
import address from '@/views/address'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'goodlist',
    component: goodlist
  },
  {
    path:"/cart",
    name:"购物车",
    component:cart
  },
  {
    path:"/address",
    name:"收货地址",
    component:address
  }
  ]
})
