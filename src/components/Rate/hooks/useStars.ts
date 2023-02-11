import { ref } from 'vue'

export function useStars(num: number, callback: () => void) {
  const starNum = ref(num)

  function setStarNum(setNum: number) {
    starNum.value = setNum
    callback()
  }

  return { starNum, setStarNum }
}
