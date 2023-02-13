import { App } from 'vue'
import './style/reset.css'
import Card from './card/index'
import Transfer from './Transfer'
import Input from './Input'
import Button from './Button'
import Layout from './Layout'
import Upload from './upload'
import Rate from './Rate'

const components = [Card, Transfer, Input, Button, Layout, Upload, Rate]

export default {
  install(app: App) {
    components.map((item) => {
      app.use(item)
    })
  },
}
