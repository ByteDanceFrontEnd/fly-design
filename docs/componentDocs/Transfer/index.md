# Transfer 穿梭框

## 基础用法


Transfer 的数据通过 `data` 属性传入。 数据需要是一个对象数组，每个对象有以下属性：`id` 为数据的唯一性标识，`label` 为显示文本，`disabled` 表示该项数据是否禁止被操作。 目标列表中的数据项会同步到绑定至 `v-model` 的变量，值为数据项所组成的数组。 当然，如果希望在初始状态时目标列表不为空，可以像本例一样为`v-model` 绑定的变量赋予一个初始值。

<strong>相比elment-plus,本组件默认添加拖拽效果。</strong>

<preview path="../../examples/transfer/basic.vue" title="" description=""></preview>


## 可搜索过滤

在数据很多的情况下，可以对数据进行搜索和过滤。

设置 `filterable` 为 `true` 即可开启搜索模式。 默认情况下，若数据项的 `label` 属性包含搜索关键字，则会在搜索结果中显示。 你也可以使用 `filter-method` 定义自己的搜索逻辑。 `filter-method` 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。 若方法返回 true，则会在搜索结果中显示对应的数据项。

<preview path="../../examples/transfer/filter.vue" title="" description=""></preview>


## 自定义
可以对列表标题文案、按钮文案、列表底部的内容区等进行自定义。

可以使用 `titles`、`button-texts`、`empty-key-words` 属性分别对列表标题文案、按钮文案进行自定义、无数据文案。对于列表底部的内容区，提供了两个具名 slot：`left-footer` 和 `right-footer`。 

<preview path="../../examples/transfer/zidingyi.vue" title="" description=""></preview>



## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | :----: | :---: | :------:|
| model-value/v-model | 选中项绑定值 | array | --- |
| data | Transfer 的数据源 | `Array<{ id, label, disabled }>` | [] |
| filterable | 是否可搜索 | boolean | false |
| titles | 自定义列表标题 | array | ['List 1', 'List 2'] |
| button-texts | 自定义按钮文案 | array| [ ] |
| props | 数据源的字段别名 | `{ id, label, disabled }` | --- |
| empty-key-words | 无数据文案 | string | 'No data'|

## 插槽
| 插槽名 | 说明 |
| ------ | ---- |
| left-footer | 左侧列表底部的内容 | 
| right-footer | 右侧列表底部的内容 |   

## 事件
| 事件名 | 说明 | 回调参数 |
| ------ | ---- | --- |
| change| 右侧列表元素变化时触发 | 当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 option 数组 |
| left-check-change| 右侧列表元素变化时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 id 数组 |
| right-check-change	| 右侧列表元素变化时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 id 数组 |

## 源代码
[Transfer组件](https://github.com/ByteDanceFrontEnd/fly-design/tree/master/src/components/Transfer)







