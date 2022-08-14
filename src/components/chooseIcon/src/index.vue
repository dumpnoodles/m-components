<template>
    <el-button @click="handleClick" type="primary">
      <slot></slot>
    </el-button>
    <div class="m-choose-icon-dialog-body-height">
      <el-dialog 
        :title="title"
        v-model="dialogVisible"
      >
        <el-scrollbar>
          <div class="container">
            <div 
              class="item"
              v-for="(item, index) in Object.keys(ElIcons)"
              :key="index"
              @click="clickItem(item)"
            >
              <div class="text">
                <component
                  :is="`el-icon-${toLine(item)}`"
                >
                </component>
              </div>
              <div class="icon">{{ item }}</div>
            </div>
          </div>
        </el-scrollbar>
      </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import * as ElIcons from '@element-plus/icons-vue'
import { ref, watch } from "vue" 

import { toLine } from '../../../utils'
import { useCopy } from '../../../hooks/useCopy'


let props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹出框的显示与隐藏
  visible: boolean
}>()

let emits = defineEmits(['update:visible'])

// 拷贝一份父组件传递过来的 visible
let dialogVisible = ref<boolean>(props.visible)

// 点击按钮显示弹出框
const handleClick = () => {
  // 需要修改父组件的数据
  emits('update:visible', !props.visible)
}

// 监听 visible 的变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})

// 监听组件内部 dialogVisible 的变化
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})

const clickItem =  (item: string) => {
  let text = `<el-icon-${toLine(item)} />`
  console.log('text', text);
  useCopy(text)
  dialogVisible.value = false
}

</script>


<style lang="scss" scoped>

.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  /* padding: 20px; */
  .item {
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    height: 70px;
    cursor: pointer;
    .text {
      font-size: 14px;
    }
    .icon {
      flex: 1;
    }
  }
}

svg {
  width: 2rem;
  height: 2rem;
}

</style>