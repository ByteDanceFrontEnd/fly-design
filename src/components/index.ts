import { App } from 'vue'
import './style/reset.css'
import './style/root.css'
import Card from './card/index'
import Transfer from './Transfer'

const components = [Card, Transfer]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
