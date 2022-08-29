<template>
    <!-- 初始menu菜单 -->
    <!-- <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="collapse"
    > 
      <el-menu-item index="1">
        <el-icon-house class="el-icon-menu"></el-icon-house>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="2">
        <el-icon-grid class="el-icon-menu"></el-icon-grid>
        <span>图标选择器</span>
      </el-menu-item>
      <el-menu-item index="3">
        <el-icon-grid class="el-icon-menu"></el-icon-grid>
        <span>省市区选择器</span>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon-histogram class="el-icon-menu"></el-icon-histogram>
        <span>趋势标记</span>
      </el-menu-item>
      <el-menu-item index="5">
        <el-icon-histogram class="el-icon-menu"></el-icon-histogram>
        <span>通知菜单</span>
      </el-menu-item>
      <el-menu-item index="6">
        <el-icon-histogram class="el-icon-menu"></el-icon-histogram>
        <span>导航菜单</span>
      </el-menu-item>
    </el-menu> -->
    <!-- 封装菜单组件 -->
    <m-menu :collapse="collapse" :data="data" router :defaultActive="$route.path"></m-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue" 

let props = defineProps<{
  collapse: boolean
}>()

let data = [
  {
    icon: 'House',
    name: '首页',
    index: '/'
  },
  {
    icon: 'Histogram',
    name: '图标选择器',
    index: '/chooseIcon'
  },
  {
    icon: 'SwitchFilled',
    name: '省市区选择器',
    index: '/chooseArea'
  },
  {
    icon: 'DataLine',
    name: '趋势标记',
    index: '/trend'
  },
  {
    icon: 'AlarmClock',
    name: '时间选择',
    index: '/chooseTime'
  },
  {
    icon: 'Bell',
    name: '通知菜单',
    index: '/notification'
  },
  {
    icon: 'Ship',
    name: '城市选择',
    index: '/chooseCity'
  },
  {
    icon: 'MagicStick',
    name: '进度条',
    index: '/progress'
  },
  {
    icon: 'Calendar',
    name: '日历',
    index: '/calendar'
  },
  {
    icon: 'CreditCard',
    name: '表单',
    index: '/form'
  },
  {
    icon: 'Grid',
    name: '表格',
    index: '/table'
  },
  {
    icon: 'Menu',
    name: '导航菜单',
    index: '/menu'
  }
]


</script>

<style lang="scss" scoped>

</style>