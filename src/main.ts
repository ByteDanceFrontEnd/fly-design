import { createApp } from 'vue'
import App from './App.vue'
import flyd from './components'
// 全局使用svg
import '@/assets/icons/index'
import SvgIcon from '@/assets/icons/index.vue'
const app = createApp(App)

app.use(flyd).component('svg-icon', SvgIcon)
app.mount('#app')
