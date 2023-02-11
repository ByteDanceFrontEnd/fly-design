<template>
  <div>
    <ul class="wrap">
      <li v-for="num in 5" :key="num">
        <div class="first">
          <span
            :class="['iconfont', 'icon-star', num <= starNum ? 'active' : '']"
            :style="{ fontSize: fontSize + 'px' }"
            @click="setStarNum(num)"
          ></span>
        </div>
        <div class="second"></div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useStars } from './hooks'
interface Iprops {
  modelValue: number
  fontSize?: number
}
interface Iemits {
  (e: 'update:modelValue', val: number): void
}
const props = withDefaults(defineProps<Iprops>(), {
  modelValue: 0,
  fontSize: 20,
})
const emit = defineEmits<Iemits>()
const { starNum, setStarNum } = useStars(props.modelValue, () => {
  emit('update:modelValue', starNum.value)
})
// const starNum = ref(5)
</script>

<style scoped lang="scss">
.wrap {
  display: flex;
  justify-content: start;
}

@font-face {
  font-family: 'iconfont'; /* Project id 3891273 */
  src: url('//at.alicdn.com/t/c/font_3891273_nfoe0s3ap7.woff2?t=1676126191268')
      format('woff2'),
    url('//at.alicdn.com/t/c/font_3891273_nfoe0s3ap7.woff?t=1676126191268')
      format('woff'),
    url('//at.alicdn.com/t/c/font_3891273_nfoe0s3ap7.ttf?t=1676126191268')
      format('truetype');
}

.iconfont {
  font-family: 'iconfont' !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  // 默认颜色
  color: #999;
  &.icon-star:before {
    content: '\e9a1';
  }
  &.icon-star {
    transition: color 0.3s;
  }

  &.active {
    color: #fbab06;
  }
}
</style>
