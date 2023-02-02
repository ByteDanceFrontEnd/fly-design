<template>
  <div>
    <div class="transfer">
      <div
        class="box left-list"
        @drop="removeRightListData([dragedItem])"
        @dragover.prevent
      >
        <ListTitle :title="leftTitle"></ListTitle>
        <div class="itemsWraper">
          <ListItem
            :data="leftListData"
            :empty-key-words="emptyKeyWords"
            left-or-right="left"
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
        <ListTitle :title="rightTitle"></ListTitle>
        <!-- <h1>{{ emptyKeyWords }}</h1> -->
        <div class="itemsWraper">
          <ListItem
            :empty-key-words="emptyKeyWords"
            :data="rightListData"
            left-or-right="right"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          ></ListItem>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withDefaults } from 'vue'
import { ITransferItem } from './typings'
import ListTitle from './components/ListTitle.vue'
import ButtonGroup from './components/ButtonGroup.vue'
import ListItem from './components/ListItem.vue'
import {
  useComputedData,
  useRightList,
  useCheckedData,
  useDragedItem,
} from './extends/hooks'

const props = withDefaults(
  defineProps<{
    data?: ITransferItem[]
    rightTitle?: string
    leftTitle?: string
    emptyKeyWords?: string
    modelValue?: ITransferItem[]
  }>(),
  {
    data: () => [],
    rightTitle: 'List2',
    leftTitle: 'List1',
    emptyKeyWords: 'No data',
    modelValue: () => [],
  },
)
const emits = defineEmits<{
  (e: 'update:modelValue'): void
}>()

const { checkedData, setCheckedData } = useCheckedData()
const { rightListData, addRightListData, removeRightListData } = useRightList([],checkedData,props.modelValue,emits,)
const { leftListData, transferButtonDisabled } = useComputedData(props.data,rightListData,checkedData,)
const { dragedItem, setDragedItem } = useDragedItem()
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

      &:empty {
        &::after {
          // content 无法使用v-bind传值
          content: 'No data';
        }
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
