<script lang="ts">
export default { name: 'Input' }
</script>

<template>
  <!-- 设置尺寸的input框 -->
  <div v-if="!type">
    <input :placeholder="placeholder" :class="fClass" />
  </div>

  <!-- 文本域 -->
  <div v-if="type === 'textarea'">
    <textarea :placeholder="placeholder" :rows="rows" :cols="cols" />
  </div>

  <!-- 搜索框 -->
  <div v-if="type == 'search'" class="search">
    <input :placeholder="placeholder" class="search-input" />
    <button @click="fn">Search</button>
  </div>

  <!-- 密码框 -->
  <div v-if="type === 'password'" class="password">
    <input
      class="password-input"
      :placeholder="placeholder"
      @blur="inputBlur"
      @focus="inputFocus"
      id="password-input"
    />
    <span id="password-span" class="password-span-blur">
      <img @click="changeImg" :src="imgSrc" />
    </span>
  </div>

  <!-- 带缓存的搜索框 -->
  <div v-if="type === 'cache-search'" class="cache-search">
    <input
      :placeholder="placeholder"
      @blur="blurChange"
      @focus="focusChange"
      @keyup.enter="addItem"
      class="cache-search-input-blur"
      id="cache-search-input"
      v-model="inputValue"
      ref="searchInput"
    />
    <button @click="addItem">
      <img src="https://img1.imgtp.com/2023/02/12/mKWB4ns6.png" />
    </button>
    <br />
    <div class="cache-search-title" v-if="flag && searchHistory.length > 0">
      <div class="cache-search-title-history">搜索历史</div>
      <button class="cache-search-title-clear" @click="clearHistory">
        清空
      </button>
    </div>
    <div
      class="cache-search-list"
      v-if="flag && searchHistory.length > 0 && !inputValue"
    >
      <div
        v-for="(item, index) in searchHistory"
        :key="index"
        @click="changeItem(item)"
      >
        {{ item }}
      </div>
    </div>
    <div
      class="cache-search-list"
      v-if="flag && searchHistory1.length > 0 && inputValue"
    >
      <div
        v-for="(item, index) in searchHistory1"
        :key="index"
        @click="changeItem(item[0] + item[1])"
      >
        <p>{{ item[0] }}</p>{{ item[1] }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { inputBlur, inputFocus, debounce } from './utils'

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

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  size: 'default',
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
let searchHistory1 = ref<Array<[string,string]>>([])
let url1: string = 'https://img1.imgtp.com/2023/02/12/86q3pyMC.png'
let url2: string = 'https://img1.imgtp.com/2023/02/12/5lVT5sTv.png'
const imgSrc = ref<string>(url1)
const searchInput = ref(null);

onMounted(() => {
  const input = searchInput.value
  if (input) {
    (input as HTMLInputElement).addEventListener('input', debounce(search, 500))
  }
})

const fClass = computed(() => {
  return [`f-input-${props.size}`]
})

function search() {
  searchHistory1.value = []
  const temp = inputValue.value
  const len = temp.length
  if (len === 0) {
    return
  }
  for (const item of searchHistory.value) {
    if (item.length >= len && item.substring(0,len) === temp) {
      searchHistory1.value.push([temp, item.substring(len)])
    }
  }
}

function blurChange() {
  setTimeout(() => {
    const inputElement = document.getElementById('cache-search-input')
    flag.value = false
    if (inputElement) {
      setTimeout(() => {
        inputElement.className = 'cache-search-input-blur'
      }, 10)
    }
  }, 200)
}

function focusChange() {
  const inputElement = document.getElementById('cache-search-input')
  flag.value = true
  if (inputElement) {
    inputElement.className = 'cache-search-input-focus'
  }
}

function clearHistory() {
  localStorage.removeItem('SearchHistory')
  searchHistory.value = []
}

function addItem() {
  let item: string[]
  const temp: string | null = localStorage.getItem('SearchHistory')
    ? localStorage.getItem('SearchHistory')
    : null
  item = temp ? temp.split(',') : []
  const str: string = inputValue.value
  if (str.length > 0 && !item.includes(str)) {
    item.push(str)
  }
  if (item.length > 0) {
    localStorage.setItem('SearchHistory', item.join(','))
  }
  searchHistory.value = item
}

function changeItem(value: string) {
  inputValue.value = value
}

function changeImg() {
  const inputElement = document.getElementById(
    'password-input',
  ) as HTMLInputElement
  if (imgSrc.value === url1) {
    imgSrc.value = url2
    if (inputElement) {
      inputElement.type = 'password'
    }
  } else {
    imgSrc.value = url1
    if (inputElement) {
      inputElement.type = 'text'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style/style.scss';
</style>
