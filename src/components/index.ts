import { App } from 'vue'
// import './style/reset.css'
import './style/root.css'
import Card from './card'
import Transfer from './Transfer'
import Input from './Input'

const components = [Card, Transfer, Input]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
