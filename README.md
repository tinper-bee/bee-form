# bee-form

[![npm version](https://img.shields.io/npm/v/bee-form.svg)](https://www.npmjs.com/package/bee-form)
[![Build Status](https://img.shields.io/travis/tinper-bee/bee-form/master.svg)](https://travis-ci.org/tinper-bee/bee-form)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-form/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-form?branch=master)
[![devDependency Status](https://img.shields.io/david/dev/tinper-bee/bee-form.svg)](https://david-dm.org/tinper-bee/bee-form#info=devDependencies)
[![NPM downloads](http://img.shields.io/npm/dm/bee-form.svg?style=flat)](https://npmjs.org/package/bee-form)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/tinper-bee/bee-form.svg)](http://isitmaintained.com/project/tinper-bee/bee-form "Average time to resolve an issue")
[![Percentage of issues still open](http://isitmaintained.com/badge/open/tinper-bee/bee-form.svg)](http://isitmaintained.com/project/tinper-bee/bee-form "Percentage of issues still open")


react bee-form component for tinper-bee



## 依赖

- react >= 15.3.0
- react-dom >= 15.3.0
- prop-types >= 15.6.0

## 使用方法

```
/**
 *
 * @title 基本form校验
 * @description 块级布局
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src/Form';
const FormItem = Form.FormItem;
import FormControl from 'bee-form-control';
class Demo1 extends Component {
    checkForm = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }
    render() {
        return (
            <Form  submitCallBack={this.checkForm}  >
                <FormItem  isRequire={true} labelName="姓名" htmlType="chinese" errorMessage="姓名格式错误" method="blur" >
                    <FormControl name="name" placeholder="只能输入中文"/>
                </FormItem>
                <FormItem isRequire={true} labelName="年龄" method="blur" reg={/^[0-9]+$/} errorMessage="年龄格式错误" >
                    <FormControl name="age"  />
                </FormItem>
            </Form>
        )
    }
}
export default Demo1;
```



## API

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
|errorMessage|错误提示信息|dom/string|"校验失败"|
|htmlType|数值类型，目前支持 email/tel/IDCard/chinese/password'类型|string|-|
|reg|校验正则，注：设置 htmlType 后 reg 无效|regExp|-|
|method|何时校验 change/blur|string|-|
|blur|失去焦点的回调函数|function|-|
|change|改变值的回调函数|function|-|
|check|验证的回调函数，参数两个，第一个为校验是否成功`true/false` 第二个为验证结果对象`{name: "", verify: false, value: ""}`|function|-|
|inline|是否行内显示，须有`Form`才有效，单个`FormItem`无效|bool|false|
|labelName|输入框label标签内容,须有`Form`才有效，单个`FormItem`无效|string|-|
|mesClassName|校验错误信息的class|string|-|
|inputBefore|input前缀|dom/string|-|
|inputBefore|input后缀|dom/string|-|

### 注意
- `Form`整体校验时，会触发`FormItem`的校验
- `FormItem`的子元素，`name`必须存在
- 组件初期，`FormItem`子元素只能存在一个,可以使用 `FormControl` 或者 `Select`
- 尽量不要再`FormItem`的子元素增加`onBlur`或`onChange`方法。如必须写，这两个方法的参数为子元素的值

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-form
$ cd bee-form
$ npm install
$ npm run dev
```
