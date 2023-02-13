import { createApp } from 'vue'
import App from './App.vue'
import flyd from '../lib/fly-design.js'
import '../lib/style.css'
const app = createApp(App)

app.use(flyd)
app.mount('#app')
