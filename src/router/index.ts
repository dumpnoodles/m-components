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
        path: '/', // 首页
        component: Home
      },
      {
        path: '/chooseIcon', // 图标选择器页面
        component: () => import('../views/chooseIcon/index.vue')
      },
      {
        path: '/chooseArea', // 省市区选择器
        component: () => import('../views/chooseArea/index.vue')
      },
      {
        path: '/trend', // 趋势标记
        component: () => import('../views/trend/index.vue')
      },
      {
        path: '/notification', // 通知菜单
        component: () => import('../views/notification/index.vue')
      },
      {
        path: '/progress', // 进度条
        component: () => import('../views/progress/index.vue')
      },
      {
        path: '/menu', // 导航菜单
        component: () => import('../views/menu/index.vue')
      },
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router

