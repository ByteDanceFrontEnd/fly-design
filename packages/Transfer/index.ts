import { App } from 'vue'
// import './style/index.css'
import Transfer from './Transfer.vue'
import "../style/reset.css"

export default {
  install(app: App) {
    app.component('Transfer', Transfer)
  },
}
