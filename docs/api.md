# Form
## 代码演示
## API

### Form 参数说明
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|submitCallBack|表单验证回调函数，参数两个，第一个为校验是否成功`true/false` 第二个为表单内元素数组`[{name: "", verify: false, value: ""}]`|function|-|
|submitAreaClassName|表单提交区域class|string|-|
|submitBtnClassName|表单提交按钮class|string|-|
|beforeSubmitBtn|表单提交按钮之前的dom|element|-|
|afterSubmitBtn|表单提交按钮之后的dom|element|-|

### FormItem 参数说明
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|isRequire|是否必填|bool|false|
|errorMessage|错误提示信息|string|校验失败|
|htmlType|数值类型，目前支持 email/tel/IDCard/chinese/password'类型|string|-|
|reg|校验正则，注：设置 htmlType 后 reg 无效|regExp|-|
|method|何时校验 change/blur|string|-|
|blur|失去焦点的回调函数|function|-|
|change|改变值的回调函数|function|-|
|check|验证的回调函数，参数两个，第一个为校验是否成功`true/false` 第二个为验证结果对象`{name: "", verify: false, value: ""}`|function|-|
|inline|是否行内显示|bool|false|
|labelName|输入框label标签内容|string|-|
|mesClassName|校验错误信息的class|string|-|
|inputBefore|input前缀|dom/string|-|
|inputBefore|input后缀|dom/string|-|

### 注意
- `FormItem`的子元素，`name`必须存在
- 组件初期，`FormItem`子元素只能存在一个,可以使用 `FormControl` 或者 `Select`
