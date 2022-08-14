import {
  createRouter,
  createWebHistory,
  RouteRecordRaw
} from 'vue-router'

import Container from '../components/container/src/index.vue' // 布局组件

import Home from '../views/Home.vue' // Home页面

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: Container,
    children: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/chooseIcon', // 图标选择器页面
        component: () => import('../views/chooseIcon/index.vue')
      },
      {
        path: '/chooseArea', // 省市区选择器
        component: () => import('../views/chooseArea/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router

