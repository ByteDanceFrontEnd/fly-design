import { defineClientConfig } from '@vuepress/client'
import demo from './components/demo.vue'
import card from './components/card.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('demo', demo), app.component('card', card)
  },
})
