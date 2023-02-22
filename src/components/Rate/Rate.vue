<template>
  <div>
    <ul class="wrap">
      <li v-for="num in 5" :key="num" class="item">
        <span
          class="first"
          :class="[
            'iconfont',
            'icon-star',
            num <= starNum ? 'active' : '',
            num <= overStarNum ? 'overActive' : 'noActive',
            disabled ? 'disabled' : '',
          ]"
          :style="{ fontSize: fontSize + 'px' }"
          @mouseenter="setOverStarNum(num)"
          @mouseleave="setOverStarNum(starNum)"
          @click="CsetstarNum(num)"
        ></span>
        <span
          class="second"
          :class="[
            'iconfont',
            'icon-star',
            num <= starNum ? 'active' : '',
            num <= overStarNum ? 'overActive' : 'noActive',
            disabled ? 'disabled' : '',
          ]"
          :style="{ fontSize: fontSize + 'px' }"
          @mouseenter="setOverStarNum(num)"
          @mouseleave="setOverStarNum(starNum)"
          @click="CsetstarNum(num)"
        ></span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useStars, useComputed } from './hooks'
interface Iprops {
  modelValue: number
  fontSize?: number
  disabled?: boolean
  allowClear?: boolean
}
interface Iemits {
  (e: 'update:modelValue', val: number): void
}
const props = withDefaults(defineProps<Iprops>(), {
  modelValue: 0,
  fontSize: 20,
  disabled: false,
  allowClear: false,
})
const emit = defineEmits<Iemits>()
const { starNum, setStarNum, overStarNum, setOverStarNum } = useStars(
  props.modelValue,
  props.allowClear,
  () => {
    emit('update:modelValue', starNum.value)
  },
)
const { CsetstarNum } = useComputed(props.disabled, setStarNum)
</script>

<style scoped lang="scss">
.wrap {
  padding: 20px;
  display: flex;
  justify-content: start;
  .item {
    // margin-left: 15px;
    position: relative;
    // span {
    //   font-size: v-bind(fontSize) + 'px';
    // }
    span.first {
      position: absolute;
      width: 50%;
      top: 0;
      left: 0;
      overflow: hidden;
    }
    // span.second {
    //   position: absolute;
    //   width: 100%;
    // }
  }
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
    cursor: pointer;
  }

  &.overActive {
    color: #fbab06;
  }
  &.active {
    color: #fbab06;
  }
  &.noActive {
    color: #999;
  }
  &.disabled {
    cursor: default;
  }
}
</style>
