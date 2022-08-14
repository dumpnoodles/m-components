<template>
    <m-choose-area @change="change"></m-choose-area>
</template>

<script lang="ts" setup>
import { ref } from "vue" 

let change = (val: any) => {
    console.log(val)
}

</script>

<style lang="scss" scoped>

</style>