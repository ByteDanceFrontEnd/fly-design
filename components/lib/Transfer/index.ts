import { App } from 'vue'
// import './style/index.css'
import Transfer from './Transfer.vue'

export default {
  install(app: App) {
    app.component('Transfer', Transfer)
  },
}
