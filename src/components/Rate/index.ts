import { App } from 'vue'
// import './style/index.css'
import Rate from './Rate.vue'

export default {
  install(app: App) {
    app.component('Rate', Rate)
  },
}
