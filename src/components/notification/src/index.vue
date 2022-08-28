<template>
  <el-popover
    placement="bottom"
    popper-class="notification-popper-class"
    :width="300"
    trigger="click"
  >
    <template #default>
      <slot></slot>  
    </template>
    <template #reference>
      <el-badge
        style="cursor: pointer;"
        :value='value'
        :max="max"
        :is-dot="isDot"
      >
        <component :is='`el-icon-${toLine(icon)}`'></component>
      </el-badge>
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
import { toLine } from '../../../utils'

let props = defineProps({
  // 通知菜单图标
  icon: {
    type: String,
    default: 'Bell'
  },
  // 通知数量
  value: {
    type: [String, Number],
    default: ''
  },
  // 最大值
  max: {
    type: Number,
    default: 99
  },
  // 是否显示小圆点
  isDot: {
    type: Boolean,
    default: false
  }
})

</script>

<style lang="scss" scoped>
svg {
  width: 1.5em;
  height: 1.5em;
}
</style>