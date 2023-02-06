<template>
  <div class="f-layout" :class="isVertical == true ? 'is-vertical' : ''">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Itype {
  direction?: string
}
const props = withDefaults(defineProps<Itype>(), {
  direction: 'horizontal',
})
console.log(props.direction)

const isVertical = computed(() => {
  if (props.direction == 'vertical') {
    return true
  }
  return false
})
</script>

<style lang="scss" scoped>
.f-layout {
  display: flex;
  flex-direction: row;
  flex: 1;
}
.is-vertical {
  flex-direction: column;
}
</style>
