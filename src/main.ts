import { createApp } from 'vue'
import ElementsPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {
  toLine 
} from './utils/index'

const app = createApp(App)

// 全局注册图标
for(const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // icon的名字是驼峰格式，将其转换成小写，如 ArrowDownBold 转换为 arrowdownBold，并修改名字为 el-icon-arrowdownBold
  app.component(`el-icon-${toLine(key)}`, component)
}

app.use(router).use(ElementsPlus)
app.mount('#app')
