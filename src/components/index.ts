import { App } from 'vue'

import chooseIcon from './chooseIcon'
import chooseArea from './chooseArea'
import trend from './trend'

const components  = [
  chooseIcon,
  chooseArea,
  trend
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}



