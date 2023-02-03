<template>
  <div :class="fClass">
    <button><slot></slot></button>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'

interface Itype {
  type?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Itype>(), {
  type: 'default',
  disabled: false,
})
const fClass = computed(() => {
  return [
    'f-button',
    `f-button-${props.type}`,
    `f-button-${props.disabled ? 'disabled' : ''}`,
  ]
})
</script>
<style lang="scss" scoped>
button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.f-button {
  padding: 10px 20px;
  button {
    padding: 12px 24px;
    border-radius: 4px;
    border: 1px solid #299ee2;
  }
}
.f-button-default {
  button {
    background: #f7f4f4;
  }
}
.f-button-primary {
  button {
    background: #299ee2;
  }
}
.f-button-disabled {
  button {
    opacity: 0.4;
    cursor: no-drop;
    &:hover,
    &:focus {
      opacity: 0.4;
    }
  }
}
</style>
