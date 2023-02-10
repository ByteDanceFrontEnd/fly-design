<template>
  <div class="box button-group">
    <button :disabled="leftButtonDisabled" @click="leftButtonClick">
      &lt;{{ buttonTexts[0] }}
    </button>
    <button :disabled="rightButtonDisabled" @click="rightButtonClick">
      {{ buttonTexts[1] }}&gt;
    </button>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  leftButtonDisabled: boolean
  rightButtonDisabled: boolean
  buttonTexts: string[]
}
interface IEmits {
  (e: 'leftButtonClick'): void
  (e: 'rightButtonClick'): void
}

withDefaults(defineProps<IProps>(), {
  leftButtonDisabled: true,
  rightButtonDisabled: true,
})

const emit = defineEmits<IEmits>()

const leftButtonClick = (): void => {
  emit('leftButtonClick')
}
const rightButtonClick = (): void => {
  emit('rightButtonClick')
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;

  &.button-group {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      cursor: pointer;
      min-width: 40px;
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
