<template>
  <div class="box button-group">
    <button :disabled="leftButtonDisabled" @click="leftButtonClick">
      &lt;
    </button>
    <button :disabled="rightButtonDisabled" @click="rightButtonClick">
      &gt;
    </button>
  </div>
</template>

<script setup>
defineProps({
  leftButtonDisabled: {
    type: Boolean,
    default: true,
  },
  rightButtonDisabled: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['leftButtonClick', 'rightButtonClick'])

const leftButtonClick = () => {
  emit('leftButtonClick')
}
const rightButtonClick = () => {
  emit('rightButtonClick')
}
</script>

<style lang="scss" scoped>
.box {
  width: 100px;
  height: 100%;

  &.button-group {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      width: 46px;
      height: 32px;
      background-color: var(--Trasfer-item-bg);
      outline: none;
      border: none;
      color: #fff;
      border-radius: 5px;
      font-size: 14px;

      &:nth-child(2) {
        margin-left: 10px;
      }

      &:disabled {
        opacity: 0.6;
      }
    }
  }
}
</style>
