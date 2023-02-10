<template>
  <div v-if="type === 'textarea'">
    <textarea :placeholder="placeholder" :rows="rows" :cols="cols" />
  </div>
  <div v-if="!type">
    <input
      :placeholder="placeholder"
      :style="size ? { height: (size === 'small' ? 24 : 40) + 'px' } : {}"
    />
  </div>
  <div v-if="type == 'search'">
    <input :placeholder="placeholder" class="input-search" />
    <button @click="fn">Search</button>
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
  let item: any = []
  item = localStorage.getItem('SearchHistory')
    ? localStorage.getItem('SearchHistory')?.split(',')
    : []
  let str: string = inputValue.value
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
  const inputElement = document.getElementById('password-input')
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
input {
  height: 32px;
  padding: 4px 11px;
  border: 1px solid #d9d9d9;
  border-style: solid;
  border-radius: 6px;
  vertical-align: top;
}

input:focus {
  border-color: #4096ff;
  border-inline-end-width: 1px;
}

input::-webkit-input-placeholder {
  color: #d9d9d9;
  font-weight: 100;
}

.input-search {
  border-radius: 6px 0 0 6px;
  height: 32px;
}

div {
  display: inline-block;
}

textarea {
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 5px 11px;
  outline: none;
}

textarea:hover {
  border-color: #4096ff;
  border-inline-end-width: 1px;
}

textarea:focus {
  border-color: #4096ff;
  border-inline-end-width: 1px;
}

textarea::-webkit-input-placeholder {
  color: #d9d9d9;
  font-weight: 500;
}

button {
  height: 42px;
  background-color: #1677ff;
  color: white;
  border: none;
  vertical-align: top;
  border-radius: 0 6px 6px 0;
}

.cache-search {
  &-input-blur {
    height: 26px;
    border-radius: 6px 0 0 6px;
  }

  &-input-focus {
    width: 270px;
    height: 26px;
    border-radius: 6px 0 0 6px;
  }

  &-title {
    height: 35px;
    width: 293px;
    // background-color: aqua;
    margin-top: 2px;
    border: 1px solid #ebebeb;
    border-radius: 3px 3px 0 0;

    &-history {
      margin: 7px 0 0 10px;
      color: #869aab;
      font-size: 13px;
    }

    &-clear {
      border: none;
      background-color: transparent;
      color: #1e80ff;
      font-size: 13px;
      cursor: pointer;
      margin: -3px 0 0 180px;
      padding: 0;
    }
  }

  &-list {
    display: block;
    cursor: pointer;
    color: #5e6369;
    width: 293px;
    border-left: 1px solid #ebebeb;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
  }

  &-list div {
    display: block;
    padding: 5px 10px;
  }
}

.cache-search img {
  height: 28px;
}

.cache-search button {
  height: 36px;
}

.password {
  &-input {
    height: 26px;
    display: inline-block;
    vertical-align: middle;
    border-radius: 6px 0 0 6px;
    border-right: none;
  }
  &-span {
    &-blur {
      padding: 6px 10px 6px 10px;
      border-radius: 0 6px 6px 0;
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #d9d9d9;
      border-left: none;
    }
    &-focus {
      padding: 6px 10px 6px 10px;
      border-radius: 0 6px 6px 0;
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #4096ff;
      border-left: none;
    }
  }
  img {
    height: 18px;
  }
}
</style>
