import { createApp } from 'vue'
import App from './App.vue'
// import flyd from './components/index.ts'
// import Input from '../lib/Input/index.js'
// import '../lib/Input/style.css'
import flyd from '../lib/index.mjs'
import '../lib/style.css'
const app = createApp(App)

app.use(flyd)
// app.use(Input)
app.mount('#app')
