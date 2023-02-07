import { ref, computed, reactive, watch, ComputedRef } from 'vue'
import type { Ref } from 'vue'
import { ITransferItem } from '../typings'

interface IuseRightList {
  rightListData: Ref<ITransferItem[]>
  addRightListData: (newData: ITransferItem[]) => void
  removeRightListData: (removeData: ITransferItem[]) => void
}
interface IcheckedData {
  left: ITransferItem[]
  right: ITransferItem[]
}
interface IEmitModel {
  (e: 'update:modelValue', args: ITransferItem[]): void
}

export function useRightList(
  initialData: ITransferItem[],
  checkedData: IcheckedData,
  modelValue: ITransferItem[],
  emits: IEmitModel,
): IuseRightList {
  const rightListData = ref(initialData)
  rightListData.value = [...initialData, ...modelValue]

  function addRightListData(newData: ITransferItem[]): void {
    newData.forEach((newItem) => {
      if (!rightListData.value.find((item) => newItem.id === item.id)) {
        rightListData.value.push(newItem)
      }
    })

    checkedData.left = []
  }

  function removeRightListData(removeData: ITransferItem[]): void {
    rightListData.value = rightListData.value.filter((item) => {
      if (removeData.find((rItem) => rItem.id == item.id)) {
        return false
      } else {
        return true
      }
    })

    checkedData.right = []
  }

  watch(
    rightListData,
    (newVal) => {
      emits('update:modelValue', newVal)
    },
    { deep: true },
  )

  return { rightListData, addRightListData, removeRightListData }
}
interface IuseComputedData {
  leftListData: Ref<ITransferItem[]>
  transferButtonDisabled: Ref<{
    left: boolean
    right: boolean
  }>
  leftNoDisabledLen: ComputedRef<number>
}

export function useComputedData(
  data: ITransferItem[],
  rightListData: Ref<ITransferItem[]>,
  checkedData: IcheckedData,
): IuseComputedData {
  const leftListData = computed(() => {
    return data.filter((item) => {
      if (!rightListData.value.find(({ id }) => item.id === id)) {
        return item
      }
    })
  })
  // 左边可选item的数量
  const leftNoDisabledLen = computed(() => {
    let num = 0
    leftListData.value.forEach((item) => {
      if (!item.disabled) {
        num++
      }
    })
    return num
  })

  const transferButtonDisabled = computed(() => {
    return {
      left: checkedData.right.length === 0,
      right: checkedData.left.length === 0,
    }
  })

  return { leftListData, transferButtonDisabled, leftNoDisabledLen }
}

interface IuseCheckedData {
  checkedData: IcheckedData
  setCheckedData: (
    checked: boolean,
    leftOrRight: string,
    item: ITransferItem,
  ) => void
}

export function useCheckedData(): IuseCheckedData {
  const checkedData: IcheckedData = reactive({
    left: [],
    right: [],
  })

  function addCheckedData(leftOrRight: string, item: ITransferItem) {
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

  function removeCheckedData(leftOrRight: string, id: number) {
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

  const setCheckedData = (
    checked: boolean,
    leftOrRight: string,
    item: ITransferItem,
  ) => {
    checked
      ? addCheckedData(leftOrRight, item)
      : removeCheckedData(leftOrRight, item.id as number)
  }

  return { checkedData, setCheckedData }
}

interface IuseDragedItem {
  dragedItem: Ref<ITransferItem>
  setDragedItem: (item: ITransferItem) => void
}

export function useDragedItem(): IuseDragedItem {
  const dragedItem = ref({})

  function setDragedItem(item: ITransferItem) {
    ;(dragedItem.value as unknown) = item
  }

  return { dragedItem, setDragedItem }
}

interface IuseSelect {
  selectAll(leftOrRight: string, checked: boolean): void
}

export function useSelect(
  leftListData: Ref<ITransferItem[]>,
  rightListData: Ref<ITransferItem[]>,
  checkedData: IcheckedData,
): IuseSelect {
  function selectAll(leftOrRight: string, checked: boolean) {
    switch (leftOrRight) {
      case 'left':
        if (checked) {
          // 先清空checkedData
          checkedData.left.length = 0
          leftListData.value.forEach((item) => {
            if (!item.disabled) {
              checkedData.left.push(item)
            }
          })
        } else {
          leftListData.value.forEach((item) => {
            if (!item.disabled) {
              checkedData.left.length = 0
            }
          })
        }
        break
      case 'right':
        if (checked) {
          // 先清空checkedData
          checkedData.right.length = 0
          rightListData.value.forEach((item) => {
            if (!item.disabled) {
              checkedData.right.push(item)
            }
          })
        } else {
          rightListData.value.forEach((item) => {
            if (!item.disabled) {
              checkedData.right.length = 0
            }
          })
        }
        break
      default:
        break
    }
    // console.log(leftOrRight, checked)
  }

  return { selectAll }
}
