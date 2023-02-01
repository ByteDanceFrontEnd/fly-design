import { ref, computed, reactive, watch } from 'vue'
export function useTargetIndex(initialIndex) {
  const targetIndex = ref(initialIndex)

  function setTargetIndex(newVal) {
    targetIndex.value = Number(newVal)
    // console.log(targetIndex.value)
  }

  return [targetIndex, setTargetIndex]
}

export function useRightList(initialData, checkedData, modelValue, emits) {
  const rightListData = ref(initialData)
  rightListData.value = [...initialData, ...modelValue]

  function addRightListData(newData) {
    newData.forEach((newItem) => {
      if (!rightListData.value.find((item) => newItem.id === item.id)) {
        rightListData.value.push(newItem)
      }
    })

    checkedData.left = []
  }

  function removeRightListData(removeData) {
    rightListData.value = rightListData.value.filter((item) => {
      if (removeData.find((rItem) => rItem.id == item.id)) {
        return false
      } else {
        return true
      }
    })

    // removeData.forEach((removeItem) => {
    //   rightListData.value.find((rItem) => rItem.id == removeItem.id)

    //   rightListData.value = rightListData.value.filter((item) => {
    //     removeItem.id !== item.id
    //   })
    // })

    checkedData.right = []
  }

  watch(
    rightListData,
    (newVal) => {
      emits('update:modelValue', newVal)
    },
    { deep: true },
  )

  return [rightListData, addRightListData, removeRightListData]
}

export function useComputedData(data, rightListData, checkedData) {
  // console.log(data)
  const leftListData = computed(() => {
    // const { data: currentData } = data.value

    // return currentData
    return data.filter((item) => {
      // console.log(rightListData.value);
      if (!rightListData.value.find(({ id }) => item.id === id)) {
        return item
      }
    })
  })

  const transferButtonDisabled = computed(() => {
    return {
      left: checkedData.right.length === 0,
      right: checkedData.left.length === 0,
    }
  })

  return [leftListData, transferButtonDisabled]
}

export function useCheckedData() {
  const checkedData = reactive({
    left: [],
    right: [],
  })

  function addCheckedData(leftOrRight, item) {
    switch (leftOrRight) {
      case 'left':
        checkedData.left.push(item)
        break
      case 'right':
        checkedData.right.push(item)
        break
      default:
        break
    }
  }

  function removeCheckedData(leftOrRight, id) {
    switch (leftOrRight) {
      case 'left':
        checkedData.left = checkedData.left.filter((item) => item.id !== id)
        break
      case 'right':
        checkedData.right = checkedData.right.filter((item) => item.id !== id)
        break
      default:
        break
    }
  }

  return [checkedData, addCheckedData, removeCheckedData]
}

export function useDragedItem() {
  const dragedItem = ref(null)

  function setDragedItem(item) {
    dragedItem.value = item
  }

  return [dragedItem, setDragedItem]
}
