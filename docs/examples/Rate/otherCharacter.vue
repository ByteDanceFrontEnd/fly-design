<template>
  <Rate v-model="value" :font-size="30" allow-half />
  <Rate v-model="value" :font-size="30" allow-half >
    <template #character> A </template>
  </Rate>
  <Rate v-model="value" :font-size="30" allow-half >
    <template #character> 牛 </template>
  </Rate>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const value = ref(2.5)
</script>
