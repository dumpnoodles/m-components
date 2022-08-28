<template>
    <div>
      <!-- 示例一 -->
      <!-- <div class="flex">
        <div>
          <m-trend text="营业额"></m-trend>
        </div>
        <div>
          <m-trend text="销售额" type="down"></m-trend>
        </div>
      </div>
      <br>
      <div class="flex">
        <div>
          <m-trend text="营业额" upIconColor="blue"></m-trend>
        </div>
        <div>
          <m-trend text="销售额" type="down" downIconColor="pink"></m-trend>
        </div>
      </div> -->
      <!-- 示例二 - 插槽 -->
      <!-- <m-trend>
        营业额
      </m-trend>
      <m-trend text="销售业绩"></m-trend> -->
      <!-- 示例三 - 非自定义图标颜色反转 -->
      <!-- <m-trend text="销售额" reverseColor></m-trend>
      <m-trend text="营业额" type="down" reverseColor></m-trend> -->
      <!-- 示例四 - 上升/下降文字颜色 -->
      <!-- <m-trend text="营业额" upTextColor="blue"></m-trend>
      <m-trend text="销售额" type="down" downTextColor="yellow"></m-trend> -->
      <!-- 示例五 - 自定义图标 -->
      <m-trend upIcon="CaretTop">营业额</m-trend>
      <m-trend type="down" downIcon="CaretBottom">销售额</m-trend>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue" 

</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin-right: 40px;
  }
}
</style>