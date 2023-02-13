<template>
  <!-- 搜索框 -->
  <div class="search" v-if="filterable">
    <!-- <svg-icon name="search" color="#c7c7c7" /> -->
    <input
      type="text"
      placeholder="filter-key-words"
      size="small"
      @input="inputChange($event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
interface IProps {
  filterable: boolean
  leftOrRight: string
}
interface IEmits {
  (e: 'inputChange', leftOrRight: string, value: string): void
}

const emits = defineEmits<IEmits>()
const props = withDefaults(defineProps<IProps>(), {
  filterable: false,
})
function inputChange(value: string) {
  emits('inputChange', props.leftOrRight, value)
  console.log(value)
}
</script>

<style scoped lang="scss">
.search {
  width: 90%;
  height: 30px;
  margin: 10px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 5px;
  input {
    width: 70%;
    height: 60%;
    border: none;
    font-size: 14px;
    &::placeholder {
      font-size: 14px;
      color: #bcbaba;
    }
  }
}
</style>
