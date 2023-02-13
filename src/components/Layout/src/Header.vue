<template>
  <div class="f-header"><slot></slot></div>
</template>

<script lang="ts">
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.f-header {
  height: 50px;
  background-color: #7dbcea;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
