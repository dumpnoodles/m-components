<template>
    <!-- {{ $attrs}} -->
    <el-menu
      v-bind="$attrs"
      :default-active="defaultActive" 
      :router="router"
    >
      <template v-for="(item, i) in data" :key="i">
        <el-menu-item v-if="!item[children] || !item[children].length" :index="item[index]">
          <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
          <span>{{ item[name] }}</span>
        </el-menu-item>
        <el-sub-menu 
          v-if="item[children] && item[children].length"
          :index="item[index]"
        >
          <template #title>
            <component v-if="item[icon]" :is="`el-icon-${toLine(item[icon])}`"></component>
            <span>{{ item[name] }}</span>
          </template>
          <el-menu-item v-for="(item1, index1) in item[children]"  :index="item1[index]" :key="index1">
            <component v-if="item1[icon]" :is="`el-icon-${toLine(item1[icon])}`"></component>
            <span>{{ item1[name] }}</span>
          </el-menu-item>
        </el-sub-menu>
      </template>
    </el-menu>
</template>

<script lang="ts" setup>
import { ref, PropType } from "vue" 
import { MenuItem } from './types'

import { toLine } from '../../../utils'

let props = defineProps({
  // 导航菜单的数据
  data: {
    // type: Array as PropType<MenuItem[]>, // 因为 item.children 改为 item[children]
    type: Array as PropType<any[]>,
    required: true
  },
  // 默认选择的菜单
  defaultActive: {
    type: String,
    default: ''
  },
  // 是否是路由模式
  router: {
    type: Boolean,
    default: false
  },
  // 自定义键名
  // 菜单标题的键名
  name: {
    type: String,
    default: 'name'
  },
  // 菜单标识的键名
  index: {
    type: String,
    default: 'index'
  },
  // 菜单图标的键名
  icon: {
    type: String,
    default: 'icon'
  },
  // 菜单-子菜单的键名
  children: {
    type: String,
    default: 'children'
  }
})

console.log(props.data);


</script>

<style lang="scss" scoped>
svg {
  margin-right: 4px;
  width: 1em;
  height: 1em;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>