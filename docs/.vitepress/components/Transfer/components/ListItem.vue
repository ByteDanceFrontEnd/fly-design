<template>
  <!-- <slot class="empty-content"> No data </slot> -->
  <span v-show="listData.length == 0" class="empty-content">{{
    emptyKeyWords
  }}</span>
  <!-- 搜索框 -->
  <!-- <div class="search" v-if="filterable">
    <svg-icon name="search" color="#c7c7c7" />
    <input
      type="text"
      placeholder="filter-key-words"
      size="small"
      @input="inputChange($event.target.value)"
    />
  </div> -->
  <!-- 列表项 -->
  <!-- 没有找到好办法，只能根据条件控制显隐 -->
  <template v-if="leftOrRight == 'left'">
    <div
      v-for="item in filtedData"
      :key="item.id"
      :class="['list-item', item.disabled ? 'disabled' : '']"
      :draggable="!item.disabled"
      @dragstart="dragItem(item)"
    >
      <input
        :checked="isChecked(item.id)"
        type="checkbox"
        :disabled="item.disabled"
        :id="'__checkbox__' + item.id"
        @click="
          checkboxClick($event.target.checked, leftOrRight as string, item)
        "
      />
      <label
        :for="'__checkbox__' + item.id"
        :class="{checkedItem: isChecked(item.id as number)}"
        >{{ item.label }}</label
      >
    </div>
  </template>
  <template v-else>
    <div
      v-for="item in filtedData"
      :key="item.id"
      :class="['list-item', item.disabled ? 'disabled' : '']"
      :draggable="!item.disabled"
      @dragstart="dragItem(item)"
    >
      <input
        :checked="isChecked(item.id)"
        type="checkbox"
        :disabled="item.disabled"
        :id="'__checkbox__' + item.id"
        @click="
          checkboxClick($event.target.checked, leftOrRight as string, item)
        "
      />
      <label
        :for="'__checkbox__' + item.id"
        :class="{checkedItem: isChecked(item.id as number)}"
        >{{ item.label }}</label
      >
    </div>
  </template>
</template>

<script setup lang="ts">
import {
  nextTick,
  PropType,
  reactive,
  computed,
  onUpdated,
  watchEffect,
  watch,
} from 'vue'
import { ITransferItem } from '../typings'

const props = defineProps({
  leftListData: {
    type: Array as PropType<ITransferItem[]>,
    default: () => [],
  },
  rightListData: {
    type: Array as PropType<ITransferItem[]>,
    default: () => [],
  },
  leftOrRight: {
    type: String,
    validator(value) {
      return ['left', 'right'].includes(value as string)
    },
  },
  emptyKeyWords: {
    type: String,
    default: '',
  },
  checkedData: {
    type: Array as PropType<ITransferItem[]>,
    default: () => [],
  },
  filterable: {
    type: Boolean,
    default: false,
  },
  filtedData:{
    type: Array as PropType<ITransferItem[]>,
  }
})
let listData = computed(() => {
  if (props.leftOrRight == 'left') {
    return props.leftListData
  } else {
    return props.rightListData
  }
})
// 踩坑：父组件绑定多个v-model的值，再通过计算属性得到其中某一个v-model（引用类型）的复制值。如果此时修改自己定义的复制值，计算属性会更新，但watch监听不到，视图也不会进行更新
// let staticLeftList = reactive([...props.leftListData])
// 避免直接修改props的值
let cloneLeftList = reactive([...props.leftListData])
let cloneRightList = reactive([...props.rightListData])
// 每次移动item更新值
onUpdated((): void => {
  cloneLeftList = reactive([...props.leftListData])
  cloneRightList = reactive([...props.rightListData])
})

// let propsData = reactive([...props.data])
// watchEffect(() => {
//   console.log(listData)
// })
// 更新cloneLeftList、cloneRightList后需要监听变化
// watch(
//   cloneLeftList,
//   (newVal) => {
//     console.log(listData, 222)
//   },
//   { deep: true },
// )
const emit = defineEmits([
  'checkboxClick',
  'dragItem',
  'update:leftListData',
  'update:rightListData',
])

const isChecked = (id: number) => {
  return props.checkedData.find((item) => item.id == id)
}
const inputChange = (value: string) => {
  console.log(value)
  let list = null

  // if (props.leftOrRight == 'left') {
  //   list = cloneLeftList.filter((item) => {
  //     return item.label?.includes(value)
  //   })
  //   emit('update:leftListData', list)
  // } else {
  //   list = cloneRightList.filter((item) => {
  //     return item.label?.includes(value)
  //   })
  //   emit('update:rightListData', list)
  // }
  // listData.value = listData.value.filter((item) => {
  //   return item.label?.includes(value)
  // })
}

const checkboxClick = (
  checked: boolean,
  leftOrRight: string,
  item: ITransferItem,
) => {
  emit('checkboxClick', checked, leftOrRight, item)
}

const dragItem = (item: ITransferItem) => {
  emit('dragItem', item)
}
</script>

<style lang="scss" scoped>
.empty-content {
  color: var(--Transfer-item-color);
  position: absolute;
  top: 70px;
  left: 50%;
  transform: translateX(-50%);
}
.list-item {
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  position: relative;
  padding-left: 15px;

  &:not(.disabled):hover {
    color: var(--Trasfer-item-bg);
  }

  input[type='checkbox'] {
    position: absolute;
    top: 8px;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  label {
    padding-left: 22px;
    display: block;
    height: 100%;
    user-select: none;
    cursor: pointer;

    &.checkedItem {
      color: var(--Trasfer-item-bg);
      // color: red;
    }
  }

  &.disabled {
    opacity: 0.6;

    label {
      cursor: not-allowed;
    }
  }
}

.search {
  width: 90%;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  input {
    width: 70%;
    height: 40%;
    border: none;
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
    }
  }
}
</style>
