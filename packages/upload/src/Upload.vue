<template>
  <div class="fly-uplouder-wrapper" @drop="(event) => handleFileUploader(event, 'drop')" @dragover="prevent"
    @dragenter="prevent">
    <div class="fly-uploader-imagelist">
      <!-- 上传主体区域 -->
      <div class="fly-uploader-container" @click="(event) => handleFileUploader(event, 'click')">
        <!-- 文件上传区域设计成一个插槽，用户可以根据需求自定义上传区域的样式 -->
        <slot name="uploader-area"></slot>
        <!-- 一个隐藏的文件上传input框 -->
        <input id="file-input" type="file" class="fly-file__invisible" ref="file"
          @change="(event) => handleFileUploader(event, 'change')" />
      </div>
    </div>
    <!-- 注意事项 -->
    <div>
      <slot name="tip"></slot>
    </div>
  </div>
  <!-- 图片预览区域 -->
  <ul class="preview-images-list">
    <li v-for="(file, index) in tempImages" :key="index">
      <img :src="file.url" alt="" />
      <span class="preview-delete-icon">
        <img src="../static/删除.svg" @click="deleteImage(index)" />
      </span>
    </li>
  </ul>
</template>

<script setup>
// ts不太熟，我先用js写，之后再修改成ts
import { reactive, ref, watch, toRefs } from 'vue'
import './style.scss'

const props = defineProps({
  accept: {
    type: String,
  },
  size: {
    type: Number,
  },
  limit: {
    type: Number,
  },
  onSuccess: {
    type: Function,
  },
  onError: {
    type: Function,
  },
})

let sourceFiles = ref([])

function handleFileUploader(event, type) {
  let handler = reactive({
    click: () => {
      document.getElementById('file-input').click()
    },
    change: (event) => {
      sourceFiles.value.push(event.target.files)
    },
    drop: (event) => {
      event.preventDefault()
      sourceFiles.value.push(event.dataTransfer.files)
    },
  })

  handler[type](event)
}

function prevent(event) {
  event.preventDefault()
}

//上传图片blob和base64格式
function handleImages(files) {
  if (window.URL && window.URL.createObjectURL) {
    createObjectURL(files)
  } else {
    createBase64Image(files)
  }
}

let tempImages = ref([])
function createObjectURL(files) {
  let filesArray = files.map((file) => ({
    file,
    url: URL.createObjectURL(new Blob(file)),
  }))
  tempImages.value = filesArray
}

function createBase64Image(files) {
  const handleFile = function (file) {
    return new Promise((resolve, reject) => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        resolve(e.target.result)
      }

      reader.onerror = (error) => {
        reject('文件读取失败' + error)
      }
    })
  }

  let files_promises = files.map(handleFile)

  Promise.all(files_promises).then((results) => {
    tempImages.value = results.map((res, index) => {
      return {
        url: res,
        file: files[index],
      }
    })
  })
}

function deleteImage(index) {
  tempImages.value.splice(index, 1)
  sourceFiles.value.splice(index, 1)
}

watch(sourceFiles.value, (value) => {
  let files = Array.from(value)
  const { size, accept, onError, limit } = toRefs(props)

  // 文件校验
  if (files.length <= 0) return
  if (files.some((file) => file[0].size > size.value)) {
    return onError.value(`文件最大上传${size.value}k`)
  }
  if (files.some((file) => !accept.value.split(' ').indexOf(file[0].type))) {
    return onError.value(`只接受${accept.value}类型的文件`)
  }
  if (sourceFiles.value.length > limit.value) {
    sourceFiles.value.pop()
    return onError.value(`最多上传${limit.value}个图片`)
  }

  // 处理图片文件
  handleImages(files)
})
</script>
