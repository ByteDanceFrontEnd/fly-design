# Layout 布局

## 组件概述

用于布局的容器组件，方便快速搭建页面的基本结构：

* `Layout`：布局容器，其下可嵌套 `Header Sider ``Content Footer `或 `Layout `本身，可以放在任何父容器中。
* `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout `中。
* `Sider`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout `中。
* `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout `中。
* `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout `中。


:::tip

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `Layout`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 `Layout`

:::


## 代码演示

### 1.上中下布局
<br>
<div class="common-layout">
    <Layout direction="vertical">
        <Header>Header</Header>
        <Contents>Content</Contents>
        <Footer>Footer</Footer>
    </Layout>
</div>

<details>
<summary>显示代码</summary>

```html
<div class="common-layout">
    <Layout direction="vertical">
        <Header>Header</Header>
        <Contents>Content</Contents>
        <Footer>Footer</Footer>
    </Layout>
</div>
```
</details>

### 2.顶部侧边布局
<br/>
 <div class="common-layout">
    <Layout direction="vertical">
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Contents>Content</Contents>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
</div>

<details>
<summary>显示代码</summary>

```html
 <div class="common-layout">
    <Layout direction="vertical">
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Contents>Content</Contents>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
</div>
```
</details>


### 3.侧边布局
<br>
<div class="common-layout">
    <Layout>
        <Sider>Sider</Sider>
        <Layout direction="vertical">
        <Header>Header</Header>
        <Contents>Content</Contents>
        <Footer>Footer</Footer>
        </Layout>
    </Layout>
</div>

<details>
<summary>显示代码</summary>

```html
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
```
</details>

## API
### Attributes
| 参数      | 说明         | 类型        | 是否必要 | 默认值 |
| --------- | ------------ | ----------- | -------- | ------ |
| direction | 子元素的排列方向 | string    | true    | horizion 水平   |

### Slots
| 插槽名      | 说明         | 子标签       | 
| --------- | ------------ | ----------- |
| default | 自定义默认内容 | Layout / Header / Aside / Main / Footer  | 