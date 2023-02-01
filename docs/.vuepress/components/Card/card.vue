<template>
  <div class="card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="card-summary">{{ summary }}</div>
    <div v-else class="card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script setup lang="ts">
type Props = {
  width?: number
  imgSrc?: string
  imgHeight?: number
  summary?: string
}
withDefaults(defineProps<Props>(), {
  width: 0,
  imgSrc: '',
  imgHeight: 0,
  summary: '',
})
</script>

<style scoped lang="scss">
.card {
  width: 270px;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.15);
  padding-bottom: 8px;

  &-img {
    height: 152px;
    img {
      width: 100%;
      height: 100%;
    }
  }

  &-summary {
    padding: 8px;
    text-align: left;
    font-size: 14px;
  }
}
</style>
