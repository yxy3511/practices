import Vue from 'vue'
import Router from 'vue-router'
import orgTree from '@/views/orgTree'
import apple from '@/views/apple'
import cartoon from '@/views/cartoon'
import scrollSnap from '@/views/scrollSnap'
import scrollStack from '@/views/scrollStack'
import canvasTest from '@/views/canvasTest'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: cartoon
    },{
      path: '/apple',
      name: 'apple',
      component: apple
    },{
      path: '/cartoon',
      name: 'cartoon',
      component: cartoon
    },{
      path: '/scrollSnap',
      name: 'scrollSnap',
      component: scrollSnap
    },{
      path: '/scrollStack',
      name: 'scrollStack',
      component: scrollStack
    },{
      path: '/orgTree',
      name: 'orgTree',
      component: orgTree
    },{
      path: '/canvasTest',
      name: 'canvasTest',
      component: canvasTest
    }
  ]
})
