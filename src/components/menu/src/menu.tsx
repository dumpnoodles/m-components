import { defineComponent, PropType, useAttrs } from 'vue'
import { MenuItem } from './types'
import * as Icons from '@element-plus/icons-vue'
import './styles/index.scss'

import { toLine } from '../../../utils'

export default defineComponent({
  props: {
    // 导航菜单的数据
    data: {
      type: Array as PropType<MenuItem[]>,
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
  },
  setup(props, ctx) {
    console.log(props.data);
    // 封装一个渲染无限层级菜单的方法
    // 函数会返回一段jsx的代码
    // let renderMenu = (data: MenuItem[]) => {
    //   return data.map((item: MenuItem) => {
    let renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        // 每个菜单的图标
        item.i = (Icons as any)[item[props.icon]!]
        // 处理 sub-menu 插槽
        let slots = {
          title: () => {
            return <>
              <item.i />
              <span>{item[props.name]}</span>
            </>
          }
        }
        // 递归渲染 children
        if(item[props.children] && item[props.children].length) {
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          )
        }
        // 正常渲染普通的菜单
        return (
          <el-menu-item index={item[props.index]}>
            <item.i />
            <span>{item[props.name]}</span>
          </el-menu-item>
        )
      })
    }

    let attrs = useAttrs()

    console.log(attrs);
    

    return () => {
      return (
        <el-menu 
          default-active={props.defaultActive}
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})
