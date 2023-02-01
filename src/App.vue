<template>
  <div class="app">
    <card imgSrc="logo.png" summary="Vue组件库" />
    <Transfer
      :data="data"
      left-title="左边"
      right-title="右边"
      empty-key-words="没有数据"
      v-model="value"
    ></Transfer>
  </div>
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
    disabled: true,
  },
  {
    id: 11,
    label: 'Option11 ',
    disabled: true,
  },
]
// list = []
const value = ref([])
const data = ref(list)
</script>
