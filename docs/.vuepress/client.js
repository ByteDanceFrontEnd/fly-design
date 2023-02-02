import { defineClientConfig } from '@vuepress/client'
// 引入全局样式
// import './styles/index.css'
import Card from './components/Card/Card.vue'
import Transfer from './components/Transfer/Transfer.vue'
import Input from './components/Input/Input.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Card', Card)
    app.component('Transfer', Transfer)
    app.component('Input', Input)
  },
})
