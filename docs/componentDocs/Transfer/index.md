# Transfer 穿梭框

## 基础用法



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
    >
    </Transfer>
  </template>

  <template #code>
  
```vue
<template>
  <Transfer
    :data="data"
    left-title="左边"
    right-title="右边"
    empty-key-words="没有数据"
    v-model="value"
  ></Transfer>
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
const value = ref([])
const data = ref(list)
</script>
```
</template>
</Demo>


<details>
 
<summary><span style="color:#409eff; cursor: pointer;  user-select: none;">点击查看代码</span></summary>
 
```vue
<template>
  <Transfer
    :data="data"
    left-title="左边"
    right-title="右边"
    empty-key-words="没有数据"
    v-model="value"
  ></Transfer>
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
const value = ref([])
const data = ref(list)
</script>

```
</details>

## 可搜索过滤

## 自定义
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
  {
    id: 5,
    label: 'Option5 ',
    disabled: false,
  },
  {
    id: 6,
    label: 'Option6 ',
    disabled: true,
  },
  {
    id: 7,
    label: 'Option7 ',
    disabled: true,
  },
  {
    id: 8,
    label: 'Option8 ',
    disabled: false,
  },
  {
    id: 9,
    label: 'Option9 ',
    disabled: false,
  },
  {
    id: 10,
    label: 'Option10 ',
    disabled: false,
  },
  {
    id: 11,
    label: 'Option11 ',
    disabled: false,
  },
]"
    :titles="['左边', '右边']"
    empty-key-words="没有数据"
    :button-texts="['Toleft', 'To right']"
    :filterable="true"
  >
    <template #left-footer>
      <button>opration1</button>
    </template>
    <template #right-footer>
      <button>opration2</button>
    </template>
  </Transfer>


## 属性

## 插槽

## 事件

## 源代码








