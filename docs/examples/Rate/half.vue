<template>
  <Rate v-model="value" :font-size="30" allow-clear allow-half/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref(2)
</script>

