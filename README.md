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
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src/Form';
const FormItem = Form.FormItem;
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import FormGroup from 'bee-form-group';
class Demo1 extends Component {
    FormError = (obj) => {
        console.log('error');
        console.log(obj);
    }
    FormSuccess = (obj) => {
        console.log('success');
        console.log(obj);
    }
    checkSuccess = (obj) => {
        console.log('item success');
        console.log(obj);
    }
    checkError = (obj) => {
        console.log('item error');
        console.log(obj);
    }
    render() {
        return (
            <Form  submitError={this.FormError} submitSuccess={this.FormSuccess} checkError={this.checkError}>
                <FormItem isRequire={true} labelName="姓名" htmlType="name" errorMessage="姓名格式错误" method="blur" checkSuccess={this.checkSuccess}>
                    <FormControl name="name"/>
                </FormItem>
                <FormItem isRequire={true} labelName="年龄" method="blur" reg={/^[0-9]+$/} errorMessage="年龄格式错误" >
                    <FormControl name="age" ref="input" />
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
|submitError|表单验证失败回调，参数为表单内元素数组`[{name: "", verify: false, value: ""}]`|function|-|
|submitSuccess|表单验证成功回调，参数为表单内元素数组`[{name: "", verify: false, value: ""}]`|function|-|
|submitAreaClassName|表单提交区域class|string|-|
|submitBtnClassName|表单提交按钮class|string|-|
|beforeSubmitBtn|表单提交按钮之前的dom|element|-|
|afterSubmitBtn|表单提交按钮之后的dom|element|-|

### FormItem 参数说明
|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|isRequire|是否必填|bool|false|
|errorMessage|错误提示信息|string|校验失败|
|htmlType|数值类型，目前支持 email/tel/IDCard/name/password'类型|string|-|
|reg|校验正则，注：设置 htmlType 后 reg 无效|regExp|-|
|method|何时校验 change/blur|string|-|
|blur|失去焦点的回调函数|function|-|
|change|改变值的回调函数|function|-|
|checkSuccess|验证成功的回调函数|function|-|
|checkError|验证失败的回调函数|function|-|
|inline|是否行内显示|bool|false|
|labelName|输入框label标签内容|string|-|


#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-form
$ cd bee-form
$ npm install
$ npm run dev
```
