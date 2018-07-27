import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodlist from '@/views/goodlist'
import cart from '@/views/cart'
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
  }
  ]
})
