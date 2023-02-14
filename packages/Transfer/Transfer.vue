<template>
  <div>
    <div class="transfer">
      <div
        class="box left-list"
        @drop="removeRightListData([dragedItem])"
        @dragover.prevent
      >
        <ListTitle
          :title="titles[0]"
          :showCount="showCount"
          :checkedCount="checkedData.left.length"
          :all-count="leftListData.length"
          left-or-right="left"
          :can-select-list-len="leftNoDisabledLen"
          @select-all="selectAll"
        ></ListTitle>

        <Search
          :filterable="filterable"
          leftOrRight="left"
          @input-change="filterData"
        ></Search>

        <!-- 左边 -->
        <div class="itemsWraper">
          <ListItem
            v-model:left-list-data="leftListData"
            v-model:right-list-data="rightListData"
            :empty-key-words="emptyKeyWords"
            leftOrRight="left"
            :checkedData="checkedData.left"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></ListItem>
        </div>
        <div v-if="slots['left-footer']" class="slot left-footer">
          <slot name="left-footer"></slot>
        </div>
      </div>

      <div class="box button-group">
        <ButtonGroup
          :left-button-disabled="transferButtonDisabled.left"
          :right-button-disabled="transferButtonDisabled.right"
          :button-texts="buttonTexts"
          @left-button-click="removeRightListData(checkedData.right)"
          @right-button-click="addRightListData(checkedData.left)"
        ></ButtonGroup>
      </div>

      <div
        class="box right-list"
        @drop="addRightListData([dragedItem])"
        @dragover.prevent
      >
        <ListTitle
          :title="titles[1]"
          :showCount="showCount"
          :checkedCount="checkedData.right.length"
          :all-count="rightListData.length"
          left-or-right="right"
          :can-select-list-len="rightListData.length"
          @select-all="selectAll"
        ></ListTitle>

        <Search
          :filterable="filterable"
          leftOrRight="right"
          @input-change="filterData"
        ></Search>

        <!-- 右边 -->
        <div class="itemsWraper">
          <ListItem
            :empty-key-words="emptyKeyWords"
            v-model:left-list-data="leftListData"
            v-model:right-list-data="rightListData"
            left-or-right="right"
            :checkedData="checkedData.right"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></ListItem>
        </div>
        <div v-if="slots['right-footer']" class="slot right-footer">
          <slot name="right-footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, reactive, useSlots, computed } from 'vue'
import { ITransferItem } from './typings'
import ListTitle from './components/ListTitle.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import ListItem from './components/ListItem.vue'
import Search from './components/Search.vue'
import {
  useComputedData,
  useRightList,
  useCheckedData,
  useDragedItem,
  useSelect,
  useDataFilter,
} from './extends/hooks'
const slots = useSlots()
console.log(slots)

const props = withDefaults(
  defineProps<{
    data?: ITransferItem[]
    titles?: string[]
    emptyKeyWords?: string
    modelValue?: ITransferItem[]
    showCount?: boolean
    filterable?: boolean
    buttonTexts?: string[]
  }>(),
  {
    data: () => [],
    titles: () => ['List1', 'List2'],
    emptyKeyWords: 'No data',
    modelValue: () => [],
    showCount: true,
    filterable: false,
    buttonTexts: () => ['', ''],
  },
)
const emits = defineEmits<{
  (e: 'update:modelValue'): void
  (
    e: 'change',
    nowArr: ITransferItem[],
    leftOrRight: string,
    moveArr: ITransferItem[],
  ): void
  (e: 'left-check-change'): void
  (e: 'right-check-change'): void
}>()
const { checkedData, setCheckedData } = useCheckedData(emits)
const { rightListData, addRightListData, removeRightListData } = useRightList(
  [],
  checkedData,
  props.modelValue,
  emits,
)
const { leftListData, transferButtonDisabled, leftNoDisabledLen } =
  useComputedData(props.data, rightListData, checkedData)
const { dragedItem, setDragedItem } = useDragedItem()

const { selectAll } = useSelect(leftListData, rightListData, checkedData)
const { leftFiltedData, rightFiltedData, filterData } = useDataFilter(
  leftListData,
  rightListData,
)
</script>

<style>
:root {
  --Trasfer-item-bg: #409eff;
  --Transfer-item-color: #909399;
  --Transfer-height: 318px;
  --Transfer-head-height: 32px;
}
</style>

<style lang="scss" scoped>
.transfer {
  display: flex;
  height: var(--Transfer-height);
  width: 600px;
  // box-sizing: border-box;
  // border: 20px solid;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .box {
    height: 100%;
    position: relative;
    .itemsWraper {
      overflow: auto;
      height: calc(var(--Transfer-height) - 32px);
      // height: ;
      position: relative;

      &::-webkit-scrollbar {
        /*滚动条整体样式*/
        width: 12px; /*高宽分别对应横竖滚动条的尺寸*/
        height: 5px;
      }

      &::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 5px;
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
        background: rgba(191, 191, 191, 0.2);
      }

      &::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.3);
        border-radius: 0;
        background: rgba(0, 0, 0, 0);
      }
    }
    .slot {
      position: absolute;
      width: 100%;
      height: 35px;
      bottom: 0;
      line-height: 35px;
      padding-left: 15px;
      background-color: #ffffff;
      border-top: 1px solid #ddd;
      // color: red;
    }
  }
  .left-list,
  .right-list {
    width: 200px;
    border: 1px solid #ddd;
    overflow: hidden;
    border-radius: 7px;
  }
}
</style>
