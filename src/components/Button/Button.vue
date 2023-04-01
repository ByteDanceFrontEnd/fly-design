<script lang="ts">
export default { name: 'Button' }
</script>

<template>
  <div :class="fClass">
    <button ref="buttonRef"><slot></slot></button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface Itype {
  type?: string
  disabled?: boolean
  size?: string
  shape?: string
  color?: string
}

const props = withDefaults(defineProps<Itype>(), {
  type: 'default',
  disabled: false,
  size: '',
  shape: '',
  color: '',
})

const fClass = computed(() => {
  return [
    'f-button',
    `f-button-${props.type}`,
    `f-button-${props.disabled ? 'disabled' : ''}`,
    `f-button-${props.size}`,
    `f-button-${props.shape}`,
  ]
})

let buttonRef = ref()

onMounted(() => {
  if (props.color) {
    buttonRef.value.style.color = 'white'
    buttonRef.value.style.background = props.color
  }
})
</script>

<style lang="scss" scoped>
div {
  display: inline-block;
}

button {
  outline: none;
  border: 0;
  background: none;
  cursor: pointer;
  &:hover,
  &:focus {
    opacity: 0.8;
  }
}
.f-button {
  padding: 10px 10px;
  button {
    padding: 12px 24px;
    border-radius: 4px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    color: white;
  }

  &-default {
    button {
      color: #606266;
      border: 1px solid #dcdfe6;
    }

    button:hover {
      border: 1px solid #409eff;
      color: #409eff;
    }
  }

  &-primary {
    button {
      background: #1677ff;
    }
  }

  &-success {
    button {
      background: #67c23a;
    }
  }

  &-danger {
    button {
      background: #dc3545;
    }
  }

  &-warning {
    button {
      background: #ffc107;
    }
  }

  &-info {
    button {
      background: #0dcaf0;
    }
  }

  &-disabled {
    button {
      opacity: 0.4;
      cursor: no-drop;
      &:hover,
      &:focus {
        opacity: 0.4;
      }
    }
  }

  &-small {
    button {
      height: 35px;
      width: 72px;
      padding: 0;
    }
  }

  &-large {
    button {
      height: 48px;
      width: 108px;
    }
  }

  &-round {
    button {
      border-radius: 30px;
    }
  }
}
</style>
