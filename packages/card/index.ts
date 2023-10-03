import { App } from 'vue'
import Card from './src/main.vue'

export default {
  install(app: App) {
    app.component('Card', Card)
  },
}
