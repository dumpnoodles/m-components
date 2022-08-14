<template>
    <div>
      <choose-icon
        title="选择图标"
        v-model:visible="visible"
      >
        选择图标
      </choose-icon>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

import chooseIcon from '../../components/chooseIcon/src/index.vue'

let visible = ref(false)

</script>

<style lang="scss" scoped>

</style>