<template>
    <Transfer :data="data" v-model="value" filterable />
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
const data = ref<Iitem[]>(list)
</script>