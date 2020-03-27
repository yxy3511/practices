import Vue from 'vue'
import Router from 'vue-router'
import orgTree from '@/views/orgTree'
import toPage from '@/views/toPage'
import apple from '@/views/apple'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'orgTree',
      component: orgTree
    },{
      path: '/shop/search/airpurifier/pro/filter',
      name: 'toPage',
      component: toPage
    },{
      path: '/apple',
      name: 'apple',
      component: apple
    }
  ]
})
