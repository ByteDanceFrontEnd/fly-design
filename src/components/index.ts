import { App } from 'vue'
import './style/reset.css'
import Card from './card/index'
import Transfer from './Transfer'
import Input from './Input'
import Button from './Button'

const components = [Card, Transfer, Input, Button]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
