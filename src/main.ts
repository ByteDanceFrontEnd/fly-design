import { createApp } from 'vue'
import App from './App.vue'
// import flyd from '../lib/fly-design.js'
// import '../lib/style.css'
import Input from '../lib/Input/index.js'
import '../lib/Input/style.css'
const app = createApp(App)

// app.use(flyd)
app.use(Input)
app.mount('#app')
