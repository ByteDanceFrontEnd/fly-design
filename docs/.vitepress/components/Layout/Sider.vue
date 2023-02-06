<template>
  <div class="f-sider">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.f-sider {
  // float: left;
  width: 160px;
  background-color: #3ba0e9;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
