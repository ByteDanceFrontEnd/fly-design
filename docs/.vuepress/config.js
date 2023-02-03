import { defaultTheme } from '@vuepress/theme-default'
<<<<<<< HEAD
=======
import { searchPlugin } from '@vuepress/plugin-search'

>>>>>>> ca16282d97f496300a7e7935e191760b65c199b4
export default {
  title: 'Fly-Design',
  base: '/fly-design/',
  description: '助力开发者「更灵活」地搭建出「更美」的产品',
  head: [['link', { rel: 'icon', href: `/favicon.ico` }]],

  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],

  theme: defaultTheme({
<<<<<<< HEAD
    // 侧边栏数组
    // 所有页面会使用相c同的侧边栏
=======
    // 在这里进行配置
    palette: '/styles/palette.styl',
    logo: '/favicon.ico',
    repo: 'https://github.com/ByteDanceFrontEnd/fly-design',
    navbar: [
      // 头部导航
      { text: '指南', link: 'componentDocs' },
      { text: '组件', link: '/componentDocs/Transfer.md' },
    ],
>>>>>>> ca16282d97f496300a7e7935e191760b65c199b4
    sidebar: [
      // SidebarItem
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
            link: '/componentDocs/Button.md',
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
