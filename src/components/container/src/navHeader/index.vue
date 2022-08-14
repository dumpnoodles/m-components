<template>
<div class="header">
  <span @click="toggle" class="pointer-cursor">
    <el-icon-expand v-if="collapse"></el-icon-expand>
    <el-icon-fold v-else></el-icon-fold>
  </span>
</div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

let props = defineProps<{
  collapse: boolean
}>()

let emits = defineEmits(['update:collapse'])

const toggle = () => {
  console.log('toggle');
  emits('update:collapse', !props.collapse)
}
</script>

<style lang="scss" scoped>

.header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
}

.pointer-cursor {
  cursor: pointer;
}

</style>