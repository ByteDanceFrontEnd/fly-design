# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基础用法

<preview path="../../examples/Input/basic.vue" title="" description=""></preview>

## 设置尺寸

使用 `size` 属性改变输入框大小。

<preview path="../../examples/Input/size.vue" title="" description=""></preview>

## 文本域

用于输入多行文本信息可缩放的输入框。 添加 `type="textarea"` 属性来将 `input` 元素转换为原生的 `textarea` 元素。

文本域高度可通过 `rows` 属性控制，宽度可用 `cols` 属性控制。

<preview path="../../examples/Input/textarea.vue" title="" description=""></preview>

## 密码框

使用`password`属性即可得到一个可切换显示隐藏的密码框

<preview path="../../examples/Input/password.vue" title="" description=""></preview>

## 搜索框

通过`type="search"`属性来将`input`元素转换为搜索框。

<preview path="../../examples/Input/search.vue" title="" description=""></preview>

## 带缓存的搜索框

<preview path="../../examples/Input/cacheSearch.vue" title="" description=""></preview>

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
