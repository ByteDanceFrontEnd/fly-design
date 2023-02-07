<template>
  <div v-if="type === 'textarea'">
    <textarea :placeholder="placeholder" :rows="rows" :cols="cols" />
  </div>
  <div v-if="!type">
    <input
      :placeholder="placeholder"
      :style="size ? { height: (size === 'small' ? 24 : 40) + 'px' } : {}"
    />
  </div>
</template>

<script setup lang="ts">
type InputDProps = {
  placeholder?: string
  size?: string
  showPassword?: boolean
  prefixIcon?: string
  suffixIcon?: string
  type?: string
  rows?: number
  cols?: number
}

withDefaults(defineProps<InputDProps>(), {
  placeholder: '',
  size: '',
  showPassword: false,
  prefixIcon: '',
  suffixIcon: '',
  type: '',
  rows: 5,
  cols: 33,
})
</script>

<style lang="scss" scoped>
input {
  height: 32px;
  padding: 4px 11px;
  border-width: 1px;
  border-style: solid;
  border-radius: 6px;
}

input:focus {
  border-color: #4096ff;
  border-inline-end-width: 1px;
}

div {
  display: inline-block;
}

textarea {
  border: 1px solid rgb(133, 133, 133);
  border-radius: 5px;
  padding: 5px 11px;
  outline: none;
}

textarea:hover {
  border-color: #4096ff;
  border-inline-end-width: 1px;
}

textarea:focus {
  border-color: #4096ff;
  border-inline-end-width: 1px;
}
</style>
