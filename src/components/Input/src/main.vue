<template>
  <input :placeholder="placeholder" />
</template>

<script setup lang="ts">
type InputProps = {
  placeholder?: string
}

withDefaults(defineProps<InputProps>(), {
  placeholder: '',
})
</script>

<style lang="scss"></style>
