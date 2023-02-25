<template>
  <Transfer :data="data" v-model="value" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Iitem {
  id: number
  label: string
  disabled: boolean
}
const data = ref<Iitem[]>([
  {
    id: 1,
    label: 'Option1 ',
    disabled: false,
  },{
    id: 2,
    label: 'Option2 ',
    disabled: false,
  },{
    id: 3,
    label: 'Option3 ',
    disabled: true,
  },{
    id: 4,
    label: 'Option4 ',
    disabled: false,
  },
])
const value = ref([{
  id: 5,
  label: 'Option5 ',
  disabled: true,
}])
</script>
