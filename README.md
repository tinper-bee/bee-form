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
 * @description 登录示例
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src';
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import Button from 'bee-button';
const FormItem = Form.FormItem;

class Demo2 extends Component {

    submit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values)
            }
        });
    }
    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="demo2">
                <Form >
                    <FormItem>
                        <Label>用户名：</Label>
                        <FormControl placeholder="请输入用户名"
                            {...getFieldProps('username', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: '请输入用户名',
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('username')}
                        </span>
                    </FormItem>
                    <FormItem>
                        <Label>密码：</Label>
                        <FormControl placeholder="请输入密码" type='password'
                            {...getFieldProps('password', {
                                validateTrigger: 'onBlur',
                                rules: [{
                                    required: true, message: '请输入密码',
                                }],
                            }) }
                        />
                        <span className='error'>
                            {getFieldError('password')}
                        </span>
                    </FormItem>
                    <div className='submit'>
                        <Button colors="primary" className="login" onClick={this.submit}>登陆</Button>
                        <Button shape="border" className="reset">取消</Button>
                    </div>
                </Form>
            </div>
        )
    }
}
export default Form.createForm()(Demo2);
```



## API

# Form

## 代码演示

## API

> 基于 [rc-form](http://react-component.github.io/form/)。

### Form 

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|form|经过`Form.createForm`包装后的组件，都带有`this.props.form`属性|Object|-|
|prefixCls|类名前缀|String|u-form|
|className|类名|String|-|
|onSubmit|提交事件|Function|-|
|style|样式|Object|-|


### FormItem 

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|prefixCls|类名前缀|String|u-form|
|className|类名|String|-|
|style|样式|Object|-|

### this.props.form 常用 api

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|getFieldProps|配置受控表单元素，经过此方法包装的表单元素才可以使用`this.props.form`中的其它方法，此表单元素需要有`onChange`方法，并且`onChange`回调的第一个值为此表单元素当前值|-|-|
|getFieldDecorator|类似`getFieldProps`|-|-|
|getFieldsValue([fieldNames: String[]])|根据`name`获取多个表单元素的值|-|-|
|getFieldValue(fieldName: String)|根据`name`获取单个表单元素的值|-|-|
|getFieldInstance(fieldName: String)|根据`name`获取表单元素|-|-|
|setFieldsValue(obj: Object)|根据`name`设置多个表单元素的值|-|-|
|setFieldsInitialValue(obj: Object)|根据`name`设置多个表单元素的默认值|-|-|
|setFields(obj: Object)|根据`name`设置多个表单元素的属性|-|-|
|validateFields([fieldNames: String[]], [options: Object], callback: (errors, values) => void)|校验表单|-|-|
|getFieldsError(names)|获取多个表单元素的错误信息|-|-|
|getFieldError(name)|获取单个表单元素的错误信息|-|-|
|isFieldValidating(name: String)|单个表单元素是否正在校验|-|-|
|isFieldsValidating(names: String[])|多个表单元素是否正在校验|-|-|
|resetFields([names: String[]])|重置表单|-|-|

#### getFieldProps(name, option): Object { [valuePropName], [trigger], [validateTrigger] }

|参数|说明|类型|默认值|
|:---|:-----|:----|:------|
|name|设置表单元素name，不可以重复|String|-|
|option.valuePropName|设置表单元素取值的属性|String|value|
|option.initialValue|设置默认值|any|-|
|option.validateTrigger|设置校验时机|String|onChange|
|option.rules|设置校验规则|Object|-|
|option.validateFirst|当第一个校验失败时候是否继续校验下一个校验规则|boolean|false|


#### rules 常用

> 参考 [async-validator](https://github.com/yiminghe/async-validator)

| 参数 | 说明 | 类型 | 默认值 |
|:---|:-----|:----|:------|
| enum | 枚举类型 | string | - |
| len | 字段长度 | number | - |
| max | 最大长度 | number | - |
| message | 校验文案 | string | - |
| min | 最小长度 | number | - |
| pattern | 正则表达式校验 | RegExp | - |
| required | 是否必选 | boolean | `false` |
| transform | 校验前转换字段值 | function(value) => transformedValue:any | - |
| type | 内建校验类型，[可选项](https://github.com/yiminghe/async-validator#type) | string | 'string' |
| validator | 自定义校验（注意，callback 必须被调用） | function(rule, value, callback) | - |
| whitespace | 必选时，空格是否会被视为错误 | boolean | `false` |

#### 开发调试

```sh
$ npm install -g bee-tools
$ git clone https://github.com/tinper-bee/bee-form
$ cd bee-form
$ npm install
$ npm run dev
```
