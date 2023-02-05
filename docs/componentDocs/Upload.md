# Upload 文件上传

## 示例

<upload
    class="uploader-area"
    accept="images/png images/jpeg"
    :size="150 * 1024"
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
    :size="150 * 1024"
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
```

## 参数

| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
| --------- | ------------ | ----------- | -------- | ------ |
| accept     | 限制所上传文件的类型   | String      | false    | -      |
| size    | 限制文件的大小 | Number      | false     | -      |
| on-seccess | 上传成功的反馈     | Function      | false    | -      |
| on-error   | 上传失败的反馈     | Function | false    | -      |
| uploader-area    | 上传区域     | slot        | false    | -      |
| tip    | 上传文件时的一些注意事项     | slot        | false    | -      |
