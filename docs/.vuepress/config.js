import { defaultTheme } from '@vuepress/theme-default'
import { tocPlugin } from '@vuepress/plugin-toc'

export default {
  title: 'Fly Design 1.0',
  base: '/fly-design/',
  description: '助力开发者「更灵活」地搭建出「更美」的产品',
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],
  plugins: [
    tocPlugin({
      componentName: 'Toc',
      defaultPropsOptions: '{}',
    }),
  ],
  theme: defaultTheme({
    // 在这里进行配置
    palette: '/styles/palette.styl',
    logo: '/favicon.ico',
    repo: 'https://github.com/ByteDanceFrontEnd/fly-design',
    navbar: [
      // 头部导航
      { text: '指南', link: 'componentDocs' },
      { text: '组件', link: '/componentDocs/Transfer.md' },
    ],
    sidebar: [
      // SidebarItem
      {
        text: '组件总览',
        link: '/componentDocs/Transfer.md',
      },
      {
        text: '通用',
        children: [
          // SidebarItem
          {
            text: 'Button 按钮',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Icon 图标',
            link: '/componentDocs/Button.md',
          },
        ],
      },
      {
        text: '布局',
        children: [
          {
            text: 'Grid 栅格',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Layout 布局',
            link: '/componentDocs/Layout.md',
          },
          {
            text: 'Space 间距',
            link: '/componentDocs/Button.md',
          },
        ],
      },
      {
        text: '导航',
        children: [
          {
            text: 'DropDown 下拉菜单',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Menu 导航菜单',
            link: '/componentDocs/Button.md',
          },
        ],
      },
      {
        text: '数据录入',
        children: [
          {
            text: 'Form 表单',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Input 输入框',
            link: '/componentDocs/Input.md',
          },

          {
            text: 'Transfer 穿梭框',
            link: '/componentDocs/Transfer.md',
          },
          {
            text: 'Upload 上传',
            link: '/componentDocs/Upload.md',
          },
        ],
      },
      {
        text: '数据展示',
        children: [
          {
            text: 'Table 表格',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Tags 标签',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Card 卡片',
            link: '/componentDocs/card',
          },
        ],
      },
      {
        text: '反馈',
        children: [
          {
            text: 'Alert 警告提示',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Message 全局提示',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Modal 对话框',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Notification 通知提醒框',
            link: '/componentDocs/Button.md',
          },
          {
            text: 'Popconfirm 气泡确认框',
            link: '/componentDocs/Button.md',
          },
        ],
      },
      {
        text: '其他',
        children: [
          {
            text: 'Affix 固钉',
            link: '/componentDocs/Button.md',
          },
        ],
      },
      // 字符串 - 页面文件路径
    ],
  }),
}
