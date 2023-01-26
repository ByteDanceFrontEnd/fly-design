import { App } from 'vue'
import Card from './card/index'

const components = [Card]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
