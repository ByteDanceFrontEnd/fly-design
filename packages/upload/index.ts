import { App } from 'vue'
import Upload from './src/Upload.vue'

export default {
  install(app: App) {
    app.component('Upload', Upload)
  },
}
