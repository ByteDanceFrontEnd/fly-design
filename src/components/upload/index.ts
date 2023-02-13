import { App } from 'vue'
import Upload from './src/main.vue'

export default {
  install(app: App) {
    app.component('Upload', Upload)
  },
}
