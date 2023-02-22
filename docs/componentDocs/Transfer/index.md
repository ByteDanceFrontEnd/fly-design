# Transfer 穿梭框

## 基础用法


Transfer 的数据通过 `data` 属性传入。 数据需要是一个对象数组，每个对象有以下属性：`id` 为数据的唯一性标识，`label` 为显示文本，`disabled` 表示该项数据是否禁止被操作。 目标列表中的数据项会同步到绑定至 `v-model` 的变量，值为数据项所组成的数组。 当然，如果希望在初始状态时目标列表不为空，可以像本例一样为`v-model` 绑定的变量赋予一个初始值。

<strong>相比elment,本组件默认添加可拖拽效果。</strong>

<Demo>
  <template #component>
    <Transfer
      :data="[
        {
          id: 1,
          label: 'Option1 ',
          disabled: false,
        },
        {
          id: 2,
          label: 'Option2 ',
          disabled: false,
        },
        {
          id: 3,
          label: 'Option3 ',
          disabled: true,
        },
        {
          id: 4,
          label: 'Option4 ',
          disabled: false,
        },
      ]"
      :modelValue="[{
          id: 5,
          label: 'Option5 ',
          disabled: true,
        },]"
    >
    </Transfer>
  </template>

  <template #code>

```vue
<template>
  <Transfer :data="data" v-model="value"/>
</template>

<script setup>
import { ref } from 'vue'
let list = [
  {
    id: 1,
    label: 'Option1 ',
    disabled: false,
  },
  {
    id: 2,
    label: 'Option2 ',
    disabled: false,
  },
  {
    id: 3,
    label: 'Option3 ',
    disabled: true,
  },
  {
    id: 4,
    label: 'Option4 ',
    disabled: false,
  },
]
const value = ref([{
  id: 5,
  label: 'Option5 ',
  disabled: true,
}])
const data = ref(list)
</script>
```
</template>
</Demo>


## 可搜索过滤

在数据很多的情况下，可以对数据进行搜索和过滤。

设置 `filterable` 为 `true` 即可开启搜索模式。 默认情况下，若数据项的 `label` 属性包含搜索关键字，则会在搜索结果中显示。 你也可以使用 `filter-method` 定义自己的搜索逻辑。 `filter-method` 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。 若方法返回 true，则会在搜索结果中显示对应的数据项。


<Demo>
  <template #component>
    <Transfer
      :data="[
        {
          id: 1,
          label: 'ABCD ',
          disabled: false,
        },
        {
          id: 2,
          label: 'BCDE ',
          disabled: false,
        },
        {
          id: 3,
          label: 'CDEF ',
          disabled: true,
        },
        {
          id: 4,
          label: 'DEFG ',
          disabled: false,
        },
      ]"
      filterable
    >
    </Transfer>
  </template>
  <template #code>

```vue

<template>
  <Transfer :data="data" v-model="value" filterable />
</template>

<script setup>
import { ref } from 'vue'
let list = [
  {
    id: 1,
    label: 'ABCD ',
    disabled: false,
  },
  {
    id: 2,
    label: 'BCDE ',
    disabled: false,
  },
  {
    id: 3,
    label: 'CDEF ',
    disabled: true,
  },
  {
    id: 4,
    label: 'DEFG ',
    disabled: false,
  },
]
const value = ref([{
          id: 5,
          label: 'EFGH ',
          disabled: true,
        }])
const data = ref(list)
</script>

```

  </template>
</Demo>


## 自定义
可以对列表标题文案、按钮文案、列表底部的内容区等进行自定义。

可以使用 `titles`、`button-texts`、`empty-key-words` 属性分别对列表标题文案、按钮文案进行自定义、无数据文案。对于列表底部的内容区，提供了两个具名 slot：`left-footer` 和 `right-footer`。 


<Demo>
  <template #component>
    <Transfer
      :data="[
        {
          id: 1,
          label: 'ABCD ',
          disabled: false,
        },
        {
          id: 2,
          label: 'BCDE ',
          disabled: false,
        },
        {
          id: 3,
          label: 'CDEF ',
          disabled: true,
        },
        {
          id: 4,
          label: 'DEFG ',
          disabled: false,
        },
      ]"
      filterable
      :titles="['左边', '右边']"
      empty-key-words="没有数据"
      :button-texts="['To left', 'To right']"
    >
      <template #left-footer>
        opration1
      </template>
      <template #right-footer>
        opration2
      </template>
    </Transfer>
  </template>
  
  <template #code>

```vue

<template>
  <Transfer 
    :data="data" 
    filterable 
    :titles="['左边', '右边']"
    empty-key-words="没有数据"
    :button-texts="['To left', 'To right']" >

    <template #left-footer>
      opration1
    </template>
    <template #right-footer>
      opration2
    </template>
  </Transfer>
</template>

<script setup>
import { ref } from 'vue'
let list = [
  {
    id: 1,
    label: 'ABCD ',
    disabled: false,
  },{
    id: 2,
    label: 'BCDE ',
    disabled: false,
  },{
    id: 3,
    label: 'CDEF ',
    disabled: true,
  },{
    id: 4,
    label: 'DEFG ',
    disabled: false,
  },
]
const data = ref(list)
</script>

```

  </template>
</Demo>


## 属性

| 属性名 | 说明 | 类型 | 默认值 |
| ------ | :----: | :---: | :------:|
| model-value/v-model | 选中项绑定值 | array | --- |
| data | Transfer 的数据源 | `Array<{ id, label, disabled }>` | [] |
| filterable | 是否可搜索 | boolean | false |
| titles | 自定义列表标题 | array | ['List 1', 'List 2'] |
| button-texts | 自定义按钮文案 | array| [ ] |
| props | 数据源的字段别名 | `{ key, label, disabled }` | --- |
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







