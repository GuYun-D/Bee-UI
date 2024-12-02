import * as components from './components'
import type { App } from 'vue'

const FUNCTION_COMPONENTS = [components.BeeMessage.name]

const BeeMessage = components.BeeMessage
export { BeeMessage }

export default {
  install(app: App) {
    Object.entries(components).forEach(([key, value]) => {
      if (!FUNCTION_COMPONENTS.includes(key)) {
        app.component(key, value)
      }
    })
  }
}
