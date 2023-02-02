import { App } from 'vue'
import Input from './src/main.vue'

export default {
  install(app: App) {
    app.component('Input', Input)
  },
}
