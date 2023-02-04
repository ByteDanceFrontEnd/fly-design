import { defineClientConfig } from '@vuepress/client'
// 引入全局样式
import './styles/index.css'
import Card from './components/Card/Card.vue'
import Transfer from './components/Transfer/Transfer.vue'
import Input from './components/Input/Input.vue'
import Layout from './components/Layout/Layout.vue'
import Header from './components/Layout/Header.vue'
import Sider from './components/Layout/Sider.vue'
import Content from './components/Layout/Content.vue'
import Footer from './components/Layout/Footer.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('Card', Card)
    app.component('Transfer', Transfer)
    app.component('Input', Input)
    app.component('Layout', Layout)
    app.component('Header', Header)
    app.component('Sider', Sider)
    app.component('Contents', Content)
    app.component('Footer', Footer)
  },
})
