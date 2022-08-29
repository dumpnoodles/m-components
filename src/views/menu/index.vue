<template>
    <div class="menu-container">
      <div style="width: 200px;margin-right: 100px;">
        <m-menu :data="data1" defaultActive='1' active-text-color="red"></m-menu> 
        <!-- 自定义键名 -->
        <!-- <m-menu :data="data1" defaultActive='1' active-text-color="red" name="a" index="b" icon="c" children="d"></m-menu>  -->
      </div>
      <div style="width: 200px;">
        <!-- 父级菜单无法高亮 -->
        <m-infinite-menu :data="data2" defaultActive="2" background-color="white"></m-infinite-menu> 
      </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue" 

let data1 = [
  {
    name: '导航1',
    index: '1',
    icon: 'document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'document'
      }
    ]
  },
]
// let data1 = [
//   {
//     a: '导航1',
//     b: '1',
//     c: 'document'
//   },
//   {
//     a: '导航2',
//     b: '2',
//     c: 'document'
//   },
//   {
//     a: '导航3',
//     b: '3',
//     c: 'document',
//     d: [
//       {
//         a: '导航3-1',
//         b: '3-1',
//         c: 'document'
//       }
//     ]
//   },
// ]

let data2 = [
  {
    name: '导航1',
    index: '1',
    icon: 'Document'
  },
  {
    name: '导航2',
    index: '2',
    icon: 'Document'
  },
  {
    name: '导航3',
    index: '3',
    icon: 'Document',
    children: [
      {
        name: '导航3-1',
        index: '3-1',
        icon: 'Document',
        children: [
          {
            name: '导航3-1-1',
            index: '3-1-1',
            icon: 'Document',
            children: [
              {
                name: '导航3-1-1-1',
                index: '3-1-1-1',
                icon: 'Document',
                children: [
                  {
                    name: '导航3-1-1-1-1',
                    index: '3-1-1-1-1',
                    icon: 'Document'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
]

</script>

<style lang="scss" scoped>
.menu-container {
  display: flex;
  
}
</style>