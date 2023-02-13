# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基础用法

<Demo>

<template #component>
<Input placeholder="Please Input" />
</template>
<template #code>

```vue
<Input placeholder="Please Input" />
```

  </template>
</Demo>

## 设置尺寸

使用 `size` 属性改变输入框大小。

<Demo>
  <template #component>
    <Input placeholder="large size" size="large" />
    <br /><br />
    <Input placeholder="default size" />
    <br /><br />
    <Input placeholder="small size" size="small" />
  </template>
  <template #code>

```vue
<Input placeholder="large size" size="large" />
<Input placeholder="default size" />
<Input placeholder="small size" size="small" />
```

  </template>
</Demo>

## 文本域

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。

文本域高度可通过 `rows` 属性控制，宽度可用 `cols` 属性控制。

<Demo>
  <template #component>
    <Input placeholder="Please Input" rows="10" type="textarea" />
  </template>
  <template #code>

```vue
<Input placeholder="Please Input" rows="10" type="textarea" />
```

  </template>
</Demo>

## 密码框

使用`password`属性即可得到一个可切换显示隐藏的密码框

<Demo>
  <template #component>
    <Input placeholder="please input password" type="password" />
  </template>
  <template #code>

```vue
<Input placeholder="please input password" type="password" />
```

  </template>
</Demo>

## 搜索框

通过`type="search"`属性来将`input`元素转换为搜索框。

<Demo>
  <template #component>
    <Input placeholder="input search text" type="search" :fn="fun" />
  </template>
  <template #code>

```vue
<Input placeholder="input search text" type="search" :fn="fun" />
```

  </template>
</Demo>

## 带缓存的搜索框

<Demo>
  <template #component>
    <Input placeholder="input search text" type="cache-search" />
  </template>
  <template #code>

```vue
<Input placeholder="input search text" type="cache-search" />
```

  </template>
</Demo>

## API

### 属性

|    参数     |      说明      |                       类型                       | 默认值 |
| :---------: | :------------: | :----------------------------------------------: | :----: |
|    cols     |   文本框宽度   |                      number                      |   33   |
| placeholder | 输入框占位文本 |                      string                      |   -    |
|    rows     |   文本框高度   |                      number                      |   5    |
|    size     |   输入框尺寸   |                 `large`\|`small`                 |   -    |
|    type     |      类型      | `textarea`\|`password`\|`search`\|`cache-search` |   -    |

### 事件

| 事件名 |         说明         |   类型   |
| :----: | :------------------: | :------: |
|   fn   | 点击搜索框按钮时触发 | Function |
