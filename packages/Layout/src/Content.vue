<template>
  <div class="f-content"><slot></slot></div>
</template>

<script lang="ts">
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.f-content {
  min-height: 150px;
  background-color: #108ee9;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
