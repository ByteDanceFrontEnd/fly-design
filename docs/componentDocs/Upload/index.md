# Upload 文件上传

### 示例

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
        <span>+</span>
        <div class="fly-uploader--text">将文件拖到此处，或<a>点击上传</a></div>
      </div>
    </template>
    <template v-slot:tip>
      <div class="fly-uploader--tip">只能上传jpg/png文件，且不超过500kb</div>
    </template>
  </upload>
```
