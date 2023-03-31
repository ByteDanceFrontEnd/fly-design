import { App } from 'vue'
import Dropdown from './src/Dropdown.vue'

export default {
  install(app: App) {
    app.component('Dropdown', Dropdown)
  },
}
