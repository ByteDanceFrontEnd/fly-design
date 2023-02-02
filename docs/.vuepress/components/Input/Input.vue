<template>
  <input
    :placeholder="placeholder"
    :style="size ? { height: (size === 'small' ? 24 : 40) + 'px' } : {}"
  />
</template>

<script setup lang="ts">
type InputDProps = {
  placeholder?: string
  size?: string
}

withDefaults(defineProps<InputDProps>(), {
  placeholder: '',
  size: '',
})
</script>

<style lang="scss">
input {
  height: 32px;
  padding: 4px 11px;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
}
</style>
