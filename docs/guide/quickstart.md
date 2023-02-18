# 快速开始

本节将介绍如何在项目中使用 Fly-Design

## 用法

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
