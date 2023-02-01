import { App } from 'vue'
import Transfer from './Transfer.vue'

export default {
  install(app: App) {
    app.component('Transfer', Transfer)
  },
}
