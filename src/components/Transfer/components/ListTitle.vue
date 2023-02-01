<template>
  <h1 class="list-title">{{ title }}</h1>
</template>

<script setup lang="ts">
interface Props {
  title: string
}
withDefaults(defineProps<Props>(), {
  title: '列表',
})
// defineProps({
//   title: {
//     type: String,
//     default: '列表',
//   },
// })
</script>

<style lang="scss" scoped>
.list-title {
  font-size: 16px;
  line-height: 32px;
  height: 32px;
  font-weight: bold;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, \5fae\8f6f\96c5\9ed1, Arial, sans-serif;
}
</style>
