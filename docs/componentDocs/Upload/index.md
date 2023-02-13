# Upload 文件上传

### 示例

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

```vue
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
<script setup>
function uploadSuccess() {
  // TODO
}
function uploadError(msg) {
  alert(msg)
}
</script>
```
### 参数

| 参数         | 说明       | 类型       | 是否必要  | 可选值/默认值                          |
|------------|----------|----------|-------|----------------------------------|
| accept     | 文件的格式    | String   | true  | images/png images/jpeg 可多选，用空格隔开 |
| size       | 文件的大小    | Number   | false | -                                |
| limit      | 文件数量     | Number   | false | -                                |
| on-success | 文件上传成功反馈 | Function | false | -                                |
| on-error     | 文件上传失败反馈 | Function     | false | -                                |
