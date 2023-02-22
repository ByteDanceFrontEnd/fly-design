import { App } from 'vue'
import Input from './src/Input.vue'

export default {
  install(app: App) {
    app.component('Input', Input)
  },
}
