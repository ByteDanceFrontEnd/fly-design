# Fly Design 组件库

<p align="center">
  <img height="160px" src="https://img1.imgtp.com/2023/02/12/dlyJ6rh9.ico">
  <h2 align="center" style="font-weight: 600">Fly Design</h2>
</p>

`flyd` 为 Web 应用提供了丰富的基础 UI 组件，我们还将持续探索企业级应用的最佳 UI 实践。

## 快速开始

### 安装组件库

```bash
npm install fly-design
```

### 引用组件库

```javascript
// 全部引入
import flyd from 'fly-design/index.mjs'
import 'fly-design/style.css'
const app = createApp(App)
app.use(flyd)
app.mount('#app')

// 按需引入
import Input from 'fly-design/Input/index.mjs'
import 'fly-design/Input/style.css'
const app = createApp(App)
app.use(Input)
app.mount('#app')
```

## 📃 文档地址

[https://pcjmy.gitee.io](https://pcjmy.gitee.io)

## ✨ 亮点

- 多个常用组件
- 使用 Vue3+Vite+TS
- 单元测试
