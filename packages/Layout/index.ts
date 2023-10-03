import { App } from 'vue'
import Layout from './src/Layout.vue'
import Header from './src/Header.vue'
import Sider from './src/Sider.vue'
import Content from './src/Content.vue'
import Footer from './src/Footer.vue'

export default {
    install(app: App) {
        app.component('Layout', Layout)
        app.component('Header', Header)
        app.component('Sider', Sider)
        app.component('Content', Content)
        app.component('Footer', Footer)

    },
}
