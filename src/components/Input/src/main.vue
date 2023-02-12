<template>
  <div v-if="!type">
    <input
      :placeholder="placeholder"
      :style="size ? { height: (size === 'small' ? 24 : 40) + 'px' } : {}"
    />
  </div>
  <div v-if="type === 'textarea'">
    <textarea :placeholder="placeholder" :rows="rows" :cols="cols" />
  </div>
  <div v-if="type == 'search'">
    <input :placeholder="placeholder" class="input-search" />
    <button @click="fn">Search</button>
  </div>
  <div v-if="type === 'password'" class="password">
    <input
      class="password-input"
      :placeholder="placeholder"
      @blur="inputBlur"
      @focus="inputFocus"
      id="password-input"
    />
    <span id="password-span" class="password-span-blur">
      <img @click="changeImg" :src="require(imgSrc + '')" />
    </span>
  </div>
  <div v-if="type === 'cache-search'" class="cache-search">
    <input
      :placeholder="placeholder"
      @blur="blurChange"
      @focus="focusChange"
      @keyup.enter="addItem"
      class="cache-search-input-blur"
      id="cache-search-input"
      v-model="inputValue"
    />
    <button @click="addItem"><img src="./image/search.png" /></button>
    <br />
    <div class="cache-search-title" v-if="flag && searchHistory.length > 0">
      <div class="cache-search-title-history">搜索历史</div>
      <button class="cache-search-title-clear" @click="clearHistory">
        清空
      </button>
    </div>
    <div class="cache-search-list" v-if="flag && searchHistory.length > 0">
      <div
        v-for="(item, index) in searchHistory"
        :key="index"
        @click="changeItem(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

type InputProps = {
  placeholder?: string
  size?: string
  showPassword?: boolean
  prefixIcon?: string
  suffixIcon?: string
  type?: string
  rows?: number
  cols?: number
  fn?: () => void
}

withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  size: '',
  showPassword: false,
  prefixIcon: '',
  suffixIcon: '',
  type: '',
  rows: 5,
  cols: 33,
})

const flag = ref<boolean>(true)
const inputValue = ref<string>('')
let searchHistory = ref<string[]>([])
const imgSrc = ref<string>('./image/eye.png')

function blurChange() {
  setTimeout(() => {
    const inputElement = document.getElementById('cache-search-input')
    flag.value = false
    if (inputElement) {
      // console.log(inputElement.className)
      setTimeout(() => {
        inputElement.className = 'cache-search-input-blur'
      }, 10)
    }
  }, 200)
  // console.log('blur')
}

function focusChange() {
  const inputElement = document.getElementById('cache-search-input')
  flag.value = true
  if (inputElement) {
    // console.log(inputElement.className)
    inputElement.className = 'cache-search-input-focus'
  }
  // console.log('focus')
}

function clearHistory() {
  localStorage.removeItem('SearchHistory')
  // nextTick()
  searchHistory.value = []
}

function addItem() {
  // console.log(inputValue.value)
  let item: string[]
  const temp: string | null = localStorage.getItem('SearchHistory')
    ? localStorage.getItem('SearchHistory')
    : null
  if (temp) {
    item = temp.split(',')
  } else {
    item = []
  }
  const str: string = inputValue.value
  if (str.length > 0 && !item.includes(str)) {
    item.push(str)
  }
  if (item.length > 0) {
    localStorage.setItem('SearchHistory', item.join(','))
  }
  // nextTick()
  searchHistory.value = item
  // console.log(localStorage.getItem('SearchHistory'))
}

function changeItem(value: string) {
  inputValue.value = value
}

function inputBlur() {
  const spanElement = document.getElementById('password-span')
  if (spanElement) {
    spanElement.className = 'password-span-blur'
  }
  // console.log(blur)
}

function inputFocus() {
  const spanElement = document.getElementById('password-span')
  if (spanElement) {
    spanElement.className = 'password-span-focus'
  }
  // console.log(focus)
}

function changeImg() {
  const inputElement = document.getElementById(
    'password-input',
  ) as HTMLInputElement
  if (imgSrc.value === './image/eye.png') {
    imgSrc.value = './image/eye-close.png'
    if (inputElement) {
      inputElement.type = 'password'
    }
  } else {
    imgSrc.value = './image/eye.png'
    if (inputElement) {
      inputElement.type = 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style/style.scss';
</style>
