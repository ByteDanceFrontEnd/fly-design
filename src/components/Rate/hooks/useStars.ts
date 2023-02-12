import { computed, ref } from 'vue'
import * as _ from 'lodash'
export function useStars(
  num: number,
  allowClear: boolean,
  callback: () => void,
) {
  const starNum = ref(num)
  const overStarNum = ref(num)

  // 此处使用节流函数，限制快速点击
  const setStarNum = _.throttle(function (setNum: number) {
    // console.log(222)
    // 只有当设置用户设置allowClear，并且带点击的num与原本相同，设置为0
    if (allowClear && starNum.value == setNum) {
      starNum.value = 0
    } else {
      starNum.value = setNum
    }
    callback()
  }, 400)

  const setOverStarNum = (num: number) => {
    overStarNum.value = num
  }

  return { starNum, setStarNum, overStarNum, setOverStarNum }
}
export function useComputed(
  disabled: boolean,
  setStarNum: (setNum: number) => void,
) {
  const CsetstarNum = computed(() => {
    return disabled ? () => 0 : setStarNum
  })
  return { CsetstarNum }
}
