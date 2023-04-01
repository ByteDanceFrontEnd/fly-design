<template>
  <div class="dropdown">
    <div class="dropdown-toggle" @click="handleClick">
      {{ selectedOption }}
    </div>
    <div class="dropdown-menu" v-if="flag">
      <ul>
        <li v-for="option in options" :key="option">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface DropdownProps {
  options: string[]
  selectedOption: string
}

const props = defineProps({
  options: {
    type: Array as () => string[],
    required: true,
  },
  selectedOption: {
    type: String,
    required: true,
  },
})

let flag = ref(false)

function handleClick() {
  if (flag.value) flag.value = false
  else flag.value = true
}
</script>

<style scoped lang="scss">
.dropdown-toggle {
  color: #409eff;
  cursor: pointer;
  margin-bottom: 5px;
}

.dropdown-menu {
  width: 100px;
  border: 1px solid #666;
  padding: 5px;
}

li:hover {
  color: #409eff;
  background-color: #ecf5ff;
  cursor: pointer;
}
</style>
