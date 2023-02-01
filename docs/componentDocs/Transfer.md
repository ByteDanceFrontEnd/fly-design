# Transfer

### 示例


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
      left-title="左边"
      right-title="右边"
      empty-key-words="没有数据"
    ></Transfer>


<details>
 
<summary>展开查看</summary>
 
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


