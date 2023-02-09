<template>
  <!-- Card -->
  <div class="app">
    <card imgSrc="logo.png" summary="Vue组件库" />
  </div>

  <!-- Transfer -->
  <Transfer
    :data="data"
    left-title="左边"
    right-title="右边"
    empty-key-words="没有数据"
    filterable
    v-model="value"
  ></Transfer>

  <!-- Input -->
  <div class="myInput">
    <Input placeholder="Hello" size="large" />
    <br /><br />
    <Input placeholder="Hello" />
    <br /><br />
    <Input placeholder="Hello" size="small" />
    <br /><br />
    <Input placeholder="Please Input" rows="10" type="textarea" />
    <br /><br />
    <Input placeholder="input search text" type="search" :fn="fun" />
  </div>

  <!-- Button -->
  <div>
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button disabled>Disabled</Button>
  </div>

  <!-- Layout -->
  <!-- 上中下布局 -->
  <div class="common-layout">
    <Layout direction="vertical">
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
  <br />
  <!-- 顶部侧边布局 -->
  <div class="common-layout">
    <Layout direction="vertical">
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
  <br />
  <!-- 侧边布局 -->
  <div class="common-layout">
    <Layout>
      <Sider>Sider</Sider>
      <Layout direction="vertical">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div>

  <!-- upload -->
  <upload
    class="uploader-area"
    accept="images/png images/jpeg"
    :size="1920 * 1080"
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
import { ref } from 'vue'

let list = [
  {
    id: 1,
    label: 'Option1 ',
    disabled: false,
  },
  {
    id: 2,
    label: 'Option2 ',
    disabled: false,
  },
  {
    id: 3,
    label: 'Option3 ',
    disabled: true,
  },
  {
    id: 4,
    label: 'Option4 ',
    disabled: false,
  },
  {
    id: 5,
    label: 'Option5 ',
    disabled: false,
  },
  {
    id: 6,
    label: 'Option6 ',
    disabled: true,
  },
  {
    id: 7,
    label: 'Option7 ',
    disabled: true,
  },
  {
    id: 8,
    label: 'Option8 ',
    disabled: false,
  },
  {
    id: 9,
    label: 'Option9 ',
    disabled: false,
  },
]
// list = []
const value = ref([
  {
    id: 10,
    label: 'Option10 ',
    disabled: false,
  },
  {
    id: 11,
    label: 'Option11 ',
    disabled: true,
  },
])
const data = ref(list)

// upload
function uploadSuccess() {
  // TODO
}
function uploadError(msg) {
  alert(msg)
}

function fun() {
  console.log('123')
}
</script>

<style lang="scss">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
  margin-left: 20px;
}
.common-layout {
  width: 1000px;
  color: white;
  text-align: center;
}
.myInput {
  margin-left: 20px;
}
</style>
