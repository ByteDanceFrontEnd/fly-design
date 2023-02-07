export default {
  title: 'Fly-Design',
  themeConfig: {
    // siteTitle: false,
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/installation' },
      { text: '组件', link: '/componentDocs/Layout/' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/ByteDanceFrontEnd/fly-design',
      },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            {
              text: '安装',
              link: '/guide/installation',
            },
            {
              text: '快速开始',
              link: '/guide/quickstart',
            },
          ],
        },
        {
          text: '进阶',
          items: [
            {
              text: '主题',
              link: '/guide/title',
            },
            {
              text: '更新日志',
              link: '/guide/updatelog',
            },
          ],
        },
        {
          text: '开发',
          items: [
            {
              text: '开发指南',
              link: '/guide/developguide',
            },
            {
              text: '开发常见问题',
              link: '/guide/developquestion',
            },
            {
              text: '提交示例',
              link: '/guide/commitexample',
            },
          ],
        },
      ],
      '/componentDocs/': [
        {
          text: '基础',
          items: [
            // SidebarItem
            {
              text: 'Button 按钮',
              link: '/componentDocs/Button/',
            },
            {
              text: 'Icon 图标',
              link: '/componentDocs/Icon/',
            },
          ],
        },
        {
          text: '布局',
          items: [
            {
              text: 'Grid 栅格',
              link: '/componentDocs/Grid/',
            },
            {
              text: 'Layout 布局',
              link: '/componentDocs/Layout/',
            },
            {
              text: 'Space 间距',
              link: '/componentDocs/Space/',
            },
          ],
        },
        {
          text: '导航',
          items: [
            {
              text: 'DropDown 下拉菜单',
              link: '/componentDocs/DropDown/',
            },
            {
              text: 'Menu 导航菜单',
              link: '/componentDocs/Menu/',
            },
          ],
        },
        {
          text: '数据录入',
          items: [
            {
              text: 'Form 表单',
              link: '/componentDocs/Form/',
            },
            {
              text: 'Input 输入框',
              link: '/componentDocs/Input/',
            },

            {
              text: 'Transfer 穿梭框',
              link: '/componentDocs/Transfer/',
            },
            {
              text: 'Upload 上传',
              link: '/componentDocs/Upload/',
            },
          ],
        },
        {
          text: '数据展示',
          items: [
            {
              text: 'Table 表格',
              link: '/componentDocs/Table/',
            },
            {
              text: 'Tags 标签',
              link: '/componentDocs/Tags/',
            },
            {
              text: 'Card 卡片',
              link: '/componentDocs/Card',
            },
          ],
        },
        {
          text: '反馈',
          items: [
            {
              text: 'Alert 警告提示',
              link: '/componentDocs/Alert/',
            },
            {
              text: 'Message 全局提示',
              link: '/componentDocs/Message/',
            },
            {
              text: 'Modal 对话框',
              link: '/componentDocs/Modal/',
            },
            {
              text: 'Notification 通知提醒框',
              link: '/componentDocs/Notification/',
            },
            {
              text: 'Popconfirm 气泡确认框',
              link: '/componentDocs/Popconfirm/',
            },
          ],
        },
        {
          text: '其他',
          items: [
            {
              text: 'Affix 固钉',
              link: '/componentDocs/Button/',
            },
          ],
        },
      ],
    },
  },
}
