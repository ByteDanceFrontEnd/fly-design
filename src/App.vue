<template>
  <!-- Card -->
  <div class="app">
    <card imgSrc="logo.png" summary="Vue组件库" />
  </div>

  <!-- Transfer -->
  <!-- <Transfer
    v-model="value"
    :data="data"
    filterable
    :titles="['左边', '右边']"
    empty-key-words="没有数据"
    :button-texts="['To left', 'To right']"
  >
    <template #left-footer> opration1 </template>
    <template #right-footer> opration2 </template>
  </Transfer> -->

  <!-- Rate -->
  <!-- <Rate v-model="rateVal" :font-size="30" allow-clear allow-half>
    <template #character> A </template>
  </Rate> -->

  <!-- Input -->
  <!-- <div class="input">
    <Input placeholder="Hello" size="large" />
    <br /><br />
    <Input placeholder="Hello" />
    <br /><br />
    <Input placeholder="Hello" size="small" />
    <br /><br />
    <Input placeholder="Please Input" rows="10" type="textarea" />
    <br /><br />
    <Input placeholder="input search text" type="search" :fn="fun" />
    <br /><br />
    <Input placeholder="input search text" type="cache-search" />
    <br /><br />
    <Input placeholder="please input password" type="password" />
  </div> -->

  <!-- Button -->
  <div class="button">
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="danger">Danger</Button>
    <Button type="warning">Warning</Button>
    <Button type="info">Info</Button>
    <Button disabled>Disabled</Button>
    <br />
    <Button type="primary" animation>Primary</Button>
    <Button type="success" animation>Success</Button>
    <Button type="danger" animation>Danger</Button>
    <Button type="warning" animation>Warning</Button>
    <Button type="info" animation>Info</Button>
    <br />
    <Button type="primary" size="small">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="danger" size="large">Danger</Button>
    <Button type="warning">Warning</Button>
    <Button type="info">Info</Button>
    <br />
    <Button type="primary" shape="round">Primary</Button>
    <Button type="success" shape="round">Success</Button>
    <Button type="danger" shape="round">Danger</Button>
    <Button type="warning" size="small" shape="round">Warning</Button>
    <Button type="info" size="large" shape="round">Info</Button>
    <br />
    <Button color="#626aef">purple</Button>
    <Button color="#ffc107">orange</Button>
    <Button color="#dc3545">red</Button>
  </div>

  <!-- Layout -->
  <!-- 上中下布局 -->
  <!-- <div class="common-layout">
    <Layout direction="vertical">
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </div>
  <br /> -->
  <!-- 顶部侧边布局 -->
  <!-- <div class="common-layout">
    <Layout direction="vertical">
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  </div>
  <br /> -->
  <!-- 侧边布局 -->
  <!-- <div class="common-layout">
    <Layout>
      <Sider>Sider</Sider>
      <Layout direction="vertical">
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </div> -->

  <!-- upload -->
  <!-- <div class="upload">
    <upload class="uploader-area" accept="images/png images/jpeg" :size="1920 * 1080" :limit="3"
      :on-success="uploadSuccess" :on-error="uploadError">
      <template v-slot:uploader-area>
        <div>
          <div class="fly-uploader--text">
            将文件拖到此处，或<a>点击上传</a>
          </div>
        </div>
      </template>
      <template v-slot:tip>
        <div class="fly-uploader--tip">只能上传jpg/png文件，且不超过500kb</div>
      </template>
    </upload>
  </div> -->

  <!-- Dropdown -->
  <!-- <div class="drowdown">
    <Dropdown
      selectedOption="Dropdown List"
      :options="['Action 1', 'Action 2', 'Action 3']"
    />
  </div> -->
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
  {
    id: 10,
    label: 'Option10 ',
    disabled: false,
  },
  {
    id: 11,
    label: 'Option11 ',
    disabled: false,
  },
]
// list = []
const value = ref([])
const data = ref(list)
// 回调参数
// 当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组
const chenge = (nowArr, leftOrRight, moveArr) => {
  console.log('chenge', nowArr, leftOrRight, moveArr)
}
// 当前被选中的元素的 key 数组、选中状态发生变化的元素的id
const leftCheckChange = (checkedArr, changedItemId) => {
  console.log('leftCheckChange', checkedArr, changedItemId)
}
// 当前被选中的元素的 key 数组、选中状态发生变化的元素的id
const rightCheckChange = (checkedArr, changedItemId) => {
  console.log('rightCheckChange', checkedArr, changedItemId)
}

/* Rate */
const rateVal = ref(2)
const getStarsNum = (num) => {
  console.log('Rate', num)
}

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

.input {
  margin: 20px;
}

.upload {
  margin: 20px;
}

.dropdown {
  margin: 20px;
}

.button {
  width: 1000px;
}
</style>
