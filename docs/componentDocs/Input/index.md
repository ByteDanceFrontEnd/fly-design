# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基础用法

<br/>
<Input placeholder="Please Input" />

```html
<input placeholder="Please Input" />
```

## 禁用状态

通过 `disabled` 属性指定是否禁用 Input 组件

<Input placeholder="Please Input" disabled />

```html
<input placeholder="Please Input" disabled />
```

## 设置尺寸

使用 size 属性改变输入框大小。

large
<Input placeholder="Hello" size="large" />
default<br/>
<Input placeholder="Hello" />
small<br/>
<Input placeholder="Hello" size="small" />

```html
<input placeholder="Hello" size="large" />
<input placeholder="Hello" />
<input placeholder="Hello" size="small" />
```

## 文本域

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。

文本域高度可通过 `rows` 属性控制，宽度可用 `cols` 属性控制。

<Input placeholder="Please Input" rows="10" type="textarea" />

```html
<input placeholder="Please Input" rows="10" type="textarea" />
```

## 搜索框

通过`type="search"`属性来将`input`元素转换为搜索框。

<Input placeholder="input search text" type="search" :fn="fun" />

```
<Input placeholder="input search text" type="search" :fn="fun" />
```
