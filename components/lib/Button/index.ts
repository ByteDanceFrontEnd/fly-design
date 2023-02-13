import { App } from 'vue'
import Button from './Button.vue'

export default {
  install(app: App) {
    app.component('Button', Button)
  },
}
