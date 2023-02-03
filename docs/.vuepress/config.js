import { defaultTheme } from '@vuepress/theme-default'
export default {
  theme: defaultTheme({
    // 侧边栏数组
    // 所有页面会使用相c同的侧边栏
    sidebar: [
      '/',
      '/componentDocs/Card',
      '/componentDocs/Transfer',
      '/componentDocs/Input',
    ],
  }),
}
