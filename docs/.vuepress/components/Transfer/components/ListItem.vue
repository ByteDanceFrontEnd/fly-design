<template>
  <!-- <slot class="empty-content"> No data </slot> -->
  <span v-show="data.length == 0" class="empty-content">{{
    emptyKeyWords
  }}</span>
  <div
    v-for="item in data"
    :key="item.id"
    :class="['list-item', item.disabled ? 'disabled' : '']"
    :draggable="!item.disabled"
    @dragstart="dragItem(item)"
  >
    <input
      type="checkbox"
      :disabled="item.disabled"
      :id="'__checkbox__' + item.id"
      @click="checkboxClick($event.target.checked, leftOrRight, item)"
    />
    <label :for="'__checkbox__' + item.id">{{ item.label }}</label>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  leftOrRight: {
    type: String,
    validator(value) {
      return ['left', 'right'].includes(value)
    },
  },
  emptyKeyWords: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['checkboxClick', 'dragItem'])

const checkboxClick = (checked, leftOrRight, item) => {
  emit('checkboxClick', checked, leftOrRight, item)
}

const dragItem = (item) => {
  emit('dragItem', item)
}
</script>

<style lang="scss" scoped>
.empty-content {
  color: var(--Transfer-item-color);
  position: absolute;
  top: 20px;
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
    background-color: var(--Trasfer-item-bg);
  }

  label {
    padding-left: 22px;
    display: block;
    height: 100%;
    user-select: none;
  }

  &.disabled {
    opacity: 0.6;

    label {
      cursor: not-allowed;
    }
  }
}
</style>
