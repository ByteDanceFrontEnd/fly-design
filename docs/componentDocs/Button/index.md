# Button

## 基础用法

使用`type`、`disabled`来定义按钮的样式。

<Demo>

  <template #component>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="danger">Danger</Button>
    <Button type="warning">Warning</Button>
    <Button type="info">Info</Button>
    <Button disabled>Disabled</Button>
  </template>

  <template #code>

```vue
<Button>Default</Button>
<Button type="primary">Primary</Button>
<Button type="success">Success</Button>
<Button type="danger">Danger</Button>
<Button type="warning">Warning</Button>
<Button type="info">Info</Button>
<Button disabled>Disabled</Button>
```
</template>
</Demo>

## API

### 属性

|   参数   |       说明       |                            类型                            | 默认值 |
| :------: | :--------------: | :--------------------------------------------------------: | :----: |
|   type   |   设置按钮类型   | `default` \| `primary` \| `success` \| `danger` \| `warning` \| `info` |   -    |
| disabled | 设置按钮失效状态 |                          boolean                           |   -    |

