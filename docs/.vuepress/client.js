import { defineClientConfig } from '@vuepress/client'
import card from './components/card.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('card', card)
  },
})
