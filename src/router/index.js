import Vue from 'vue'
import Router from 'vue-router'
// import orgTree from '@/views/orgTree'
// import toPage from '@/views/toPage'
// import apple from '@/views/apple'
import cartoon from '@/views/cartoon'
// import scrollSnap from '@/views/scrollSnap'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    /*{
      path: '/shop/search/airpurifier/pro/filter',
      name: 'toPage',
      component: toPage
    },{
      path: '/apple',
      name: 'apple',
      component: apple
    },{
      path: '/cartoon',
      name: 'cartoon',
      component: cartoon
    },*/{
      path: '/',
      name: 'cartoon',
      component: cartoon
    }/*, {
      path: '/scrollSnap',
      name: 'scrollSnap',
      component: scrollSnap
    }*/
  ]
})
