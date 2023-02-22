<template>
  <div :class="fClass">
    <button><slot></slot></button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Itype {
  type?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Itype>(), {
  type: 'default',
  disabled: false,
})

const fClass = computed(() => {
  return [
    'f-button',
    `f-button-${props.type}`,
    `f-button-${props.disabled ? 'disabled' : ''}`,
  ]
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
      border: 1px solid #409EFF;
      color: #409EFF;
    }
  }

  &-primary {
    button {
      background: #1677FF;
    }
  }

  &-success {
    button {
      background: #67C23A;
    }
  }

  &-danger {
    button {
      background: #DC3545;
    }
  }

  &-warning {
    button {
      background: #FFC107;
    }
  }

  &-info {
    button {
      background: #0DCAF0;
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
}
</style>
