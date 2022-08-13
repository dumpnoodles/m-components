<template>
    <el-menu
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
        <el-icon-histogram class="el-icon-menu"></el-icon-histogram>
        <span>趋势标记</span>
      </el-menu-item>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue" 

let props = defineProps<{
  collapse: boolean
}>()


</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>