<template>
  <div class="f-footer"><slot></slot></div>
</template>

<script lang="ts">
export default {
  setup() {
    return {}
  },
}
</script>

<style lang="scss" scoped>
.f-footer {
  height: 50px;
  background-color: #7dbcea;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
