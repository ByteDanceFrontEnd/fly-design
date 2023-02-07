# Card 卡片

卡片组件

### 示例

<Card imgSrc='/logo.png' summary='Vue组件库' />

### 代码

```html
<card imgSrc="/logo.png" summary="Vue组件库" />
```

### Attributes

| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
| --------- | ------------ | ----------- | -------- | ------ |
| width     | 卡片的宽度   | Number      | false    | -      |
| imgSrc    | 图片资源地址 | String      | true     | -      |
| imgHeight | 图片高度     | Number      | false    | -      |
| summary   | 卡片概要     | String/slot | false    | -      |
| footer    | 卡片底部     | slot        | false    | -      |
