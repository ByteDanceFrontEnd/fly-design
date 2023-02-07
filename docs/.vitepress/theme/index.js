// 引入默认主题
import DefaultTheme from 'vitepress/theme'
// 引入进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: true })
// 引入组件库组件
import globals from '../client'
// 引入elementplus
// import "element-plus/dist/index.css";
// import ElementPlus from "element-plus";
import { useRouter } from 'vitepress'
import { watch, nextTick } from 'vue'
import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app.use(ElementPlus);
    // 注册组件库组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  },
  // 进度条
  setup() {
    const router = useRouter()
    watch(router.route, (newVal, oldVal) => {
      NProgress.start()
      nextTick(() => {
        NProgress.done()
      })
    })
  },
}
