import { defineClientConfig } from '@vuepress/client'
// 引入全局样式
import './styles/index.css'
import card from './components/Card/card.vue'
import Transfer from './components/Transfer/Transfer.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('card', card)
    app.component('Transfer', Transfer)
  },
})
