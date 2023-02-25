<template>
  <upload
    class="uploader-area"
    accept="images/png images/jpeg"
    :size="1920 * 1080"
    :limit="3"
    :on-success="uploadSuccess"
    :on-error="uploadError"
  >
  <template v-slot:uploader-area>
    <div>
      <div class="fly-uploader--text">将文件拖到此处，或<a>点击上传</a></div>
    </div>
  </template>
  <template v-slot:tip>
    <div class="fly-uploader--tip">只能上传jpg/png文件，且不超过500kb</div>
  </template>
  </upload>
</template>

<script setup>
function uploadSuccess() {
  // TODO
}
function uploadError(msg) {
  alert(msg)
}
</script>