# Upload 文件上传

## 基础用法

<preview path="../../examples/Upload/basic.vue" title="" description=""></preview>

## 参数

| 参数         | 说明       | 类型       | 是否必要  | 可选值/默认值                          |
|------------|----------|----------|-------|----------------------------------|
| accept     | 文件的格式    | String   | true  | images/png images/jpeg 可多选，用空格隔开 |
| size       | 文件的大小    | Number   | false | -                                |
| limit      | 文件数量     | Number   | false | -                                |
| on-success | 文件上传成功反馈 | Function | false | -                                |
| on-error     | 文件上传失败反馈 | Function     | false | -                                |
