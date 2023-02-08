<template>
  <div class="fly-uplouder-wrapper">
    <div class="fly-uploader-imagelist">
      <div
        class="fly-uploader-container"
        @click="(event) => handleFileUploader(event, 'click')"
      >
        <!-- 文件上传区域设计成一个插槽，用户可以根据需求自定义上传区域的样式 -->
        <slot name="uploader-area"></slot>
        <!-- 一个隐藏的文件上传input框 -->
        <input
          id="file-input"
          type="file"
          class="fly-file__invisible"
          ref="file"
          @change="(event) => handleFileUploader(event, 'change')"
        />
      </div>
    </div>
    <!-- 注意事项 -->
    <div>
      <slot name="tip"></slot>
    </div>
  </div>
</template>
<script setup>
// ts不太熟，我先用js写，之后再修改成ts
import { reactive, ref, watch } from 'vue'
import './style.scss'

const props = defineProps({
  accept: {
    type: String,
  },
  size: {
    type: Number,
  },
  onSuccess: Function,
  onError: Function,
})

let sourceFiles = ref([])

function handleFileUploader(event, type) {
  let handler = reactive({
    click: () => {
      document.getElementById('file-input').click()
    },
    change: (event) => {
      // console.log(event.target.files)
      sourceFiles.value.push(event.target.files)
    },
  })

  handler[type](event)
}

watch(sourceFiles.value, (value) => {
  let files = Array.from(value)
  console.log(files)
  const { size, accept, onError } = props

  if (files.length <= 0) return
  if (files.some((file) => file[0].size > size)) {
    return onError(`文件最大上传${size}k`)
  }

  files.forEach((file) => {
    console.log(file)
  })
  if (files.some((file) => !~accept.indexOf(file[0].type))) {
    return onError(`只接受${accept}类型的文件`)
  }
})
</script>