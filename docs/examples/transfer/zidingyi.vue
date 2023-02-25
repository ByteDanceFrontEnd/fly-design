<template>
  <Transfer 
    v-model="value"
    :data="data" 
    filterable 
    :titles="['左边', '右边']"
    empty-key-words="没有数据"
    :button-texts="['To left', 'To right']">

    <template #left-footer>
      opration1
    </template>
    <template #right-footer>
      opration2
    </template>
  </Transfer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
interface Iitem {
  id: number
  label: string
  disabled: boolean
}
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
const value = ref<Iitem[]>([{
          id: 5,
          label: 'EFGH ',
          disabled: true,
        }])

const data = ref<Iitem[]>(list)


</script>

