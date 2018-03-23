import Vue from 'vue'
import Router from 'vue-router'
// import header from '@components/header/header.vue'
import goods from '@/components/goods/goods.vue'
import ratings from '@/components/ratings/ratings.vue'
import seller from '@/components/seller/seller.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active', //将激活的路由添加一个mui-active类名称
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '*',
      redirect: '/goods'
  }
  ]
})
