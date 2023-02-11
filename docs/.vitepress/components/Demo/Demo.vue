<template>
  <div class="wrap">
    <div class="showArea">
      <slot name="component"></slot>
    </div>
    <Transition>
      <div class="codeArea" v-show="!open">
        <slot name="code"></slot>
        <!-- <pre><code></code></pre> -->
      </div>
    </Transition>
    <div class="btn" @click="open = !open">{{ keyWord }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const open = ref(true)

const keyWord = computed(() => {
  return open.value ? '显示代码' : '隐藏代码'
})
</script>

<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.55s ease;
}

.wrap {
  width: 100%;
  height: auto;
  border: 1px solid #ebebeb;

  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.16);
  }
  .showArea {
    width: 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  .btn {
    border-top: 1px solid #eaeefb;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #cfebf9;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      background-color: #edfbff;
      color: #14cfff;
    }
  }

  .codeArea {
    padding: 0 20px;
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
  }
}
</style>
