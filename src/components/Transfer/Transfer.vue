<template>
  <div>
    <div class="transfer">
      <div
        class="box left-list"
        @drop="removeRightListData([dragedItem])"
        @dragover.prevent
      >
        <ListTitle
          :title="leftTitle"
          :showCount="showCount"
          :checkedCount="checkedData.left.length"
          :all-count="leftListData.length"
          left-or-right="left"
          :can-select-list-len="leftNoDisabledLen"
          @select-all="selectAll"
        ></ListTitle>

        <!-- <Search
          :filterable="filterable"
          leftOrRight="left"
          @input-change="filterData"
        ></Search> -->

        <!-- 左边 -->
        <div class="itemsWraper">
          <ListItem
            v-model:left-list-data="leftListData"
            v-model:right-list-data="rightListData"
            :empty-key-words="emptyKeyWords"
            leftOrRight="left"
            :checkedData="checkedData.left"
            :filterable="filterable"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></ListItem>
        </div>
      </div>

      <div class="box button-group">
        <ButtonGroup
          :left-button-disabled="transferButtonDisabled.left"
          :right-button-disabled="transferButtonDisabled.right"
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
          :title="rightTitle"
          :showCount="showCount"
          :checkedCount="checkedData.right.length"
          :all-count="rightListData.length"
          left-or-right="right"
          :can-select-list-len="rightListData.length"
          @select-all="selectAll"
        ></ListTitle>

        <!-- <Search
          :filterable="filterable"
          leftOrRight="right"
          @input-change="filterData"
        ></Search> -->

        <!-- 右边 -->
        <div class="itemsWraper">
          <ListItem
            :empty-key-words="emptyKeyWords"
            v-model:left-list-data="leftListData"
            v-model:right-list-data="rightListData"
            :filterable="filterable"
            left-or-right="right"
            :checkedData="checkedData.right"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></ListItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, reactive } from 'vue'
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

const props = withDefaults(
  defineProps<{
    data?: ITransferItem[]
    rightTitle?: string
    leftTitle?: string
    emptyKeyWords?: string
    modelValue?: ITransferItem[]
    showCount?: boolean
    filterable?: boolean
  }>(),
  {
    data: () => [],
    rightTitle: 'List2',
    leftTitle: 'List1',
    emptyKeyWords: 'No data',
    modelValue: () => [],
    showCount: true,
    filterable: false,
  },
)
const emits = defineEmits<{
  (e: 'update:modelValue'): void
}>()
const { checkedData, setCheckedData } = useCheckedData()
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
  width: 560px;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  .box {
    height: 100%;

    .itemsWraper {
      overflow: auto;
      height: calc(var(--Transfer-height) - 32px);
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
