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
  <div v-if="type == 'search'">
    <input :placeholder="placeholder" class="input-search" />
    <button>Search</button>
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
  border: 1px solid #d9d9d9;
  border-style: solid;
  border-radius: 6px;
  vertical-align: top;
}

input:focus {
  border-color: #4096ff;
  border-inline-end-width: 1px;
}

input::-webkit-input-placeholder {
  color: #d9d9d9;
  font-weight: 100;
}

.input-search {
  border-radius: 6px 0 0 6px;
  height: 42px;
}

div {
  display: inline-block;
}

textarea {
  border: 1px solid #d9d9d9;
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

textarea::-webkit-input-placeholder {
  color: #d9d9d9;
  font-weight: 500;
}

button {
  height: 42px;
  background-color: #1677ff;
  color: white;
  border: none;
  vertical-align: top;
  border-radius: 0 6px 6px 0;
  padding: 1px 6px 1px 6px;
}
</style>
