<template>
  <header>
    <h1 class="list-title">
      <input
        type="checkbox"
        @change="selectAllItem($event.target.checked)"
        :checked="canSelectListLen != 0 && canSelectListLen == checkedCount"
      />
      {{ title
      }}<span v-if="showCount" class="show-number"
        >{{ checkedCount }}/{{ allCount }}</span
      >
    </h1>
  </header>
</template>

<script setup lang="ts">
interface IProps {
  title: string
  showCount: boolean
  checkedCount: number
  allCount: number
  leftOrRight: string
  canSelectListLen: number
}
const props = defineProps<IProps>()

const emits = defineEmits<{
  (e: 'selectAll', leftOrRight: string, checked: boolean): void
}>()

const selectAllItem = (checked: boolean) => {
  emits('selectAll', props.leftOrRight, checked)
}
</script>

<style lang="scss" scoped>
.list-title {
  position: relative;
  font-size: 16px;
  line-height: 32px;
  height: 32px;
  font-weight: bold;
  background-color: #f5f7fa;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;

  span {
    position: absolute;
    right: 20px;
    font-size: 14px;
    color: var(--Transfer-item-color);
    font-weight: 100;
  }

  input[type='checkbox'] {
    position: absolute;
    left: 15px;
    width: 14px;
    height: 14px;
    // 使用checbox没办法高度定制样式,凑合者用
  }
}
</style>
