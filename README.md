# bee-form
[![npm version](https://img.shields.io/npm/v/bee-form.svg)](https://www.npmjs.com/package/bee-form)
[![Build Status](https://img.shields.io/travis/tinper-bee/generator-tinper-bee/master.svg)](https://travis-ci.org/tinper-bee/bee-form)
[![Coverage Status](https://coveralls.io/repos/github/tinper-bee/bee-form/badge.svg?branch=master)](https://coveralls.io/github/tinper-bee/bee-form?branch=master)


组织所有form元素的集合地


## 使用
使用单独的bee-form包
#### 组件引入
先进行下载bee-form包

```
npm install --save bee-form
```
组件调用
```js
import Form from 'bee-form';
import FormGroup from 'bee-form-group';
import ControlLabel from 'bee-control-label';
import Button from 'bee-button';
import FormControl from 'bee-form-control';

React.render(
	<Form inline>
	    <FormGroup controlId="formInlineName">
	      <ControlLabel>姓名</ControlLabel>
	      <FormControl htmlType="text" placeholder="Jane Doe" />
	    </FormGroup>
	    <FormGroup controlId="formInlineEmail">
	      <ControlLabel>邮件</ControlLabel>
	      <FormControl htmlType="email" placeholder="jane.doe@example.com" />
	    </FormGroup>
	    <Button htmlType="submit">
	      Send invitation
	    </Button>
	</Form>	
, document.getElementById('target'));

```
#### 样式引入
- 可以使用link引入dist目录下bee-form.css
```
<link rel="stylesheet" href="./node_modules/build/bee-form.css">
```
- 可以在js中import样式
```js
import "./node_modules/src/Form.scss"
//或是
import "./node_modules/build/bee-form.css"
```



## API

|参数|说明|类型|默认值|
|:--|:---:|:--:|---:|
|inline|表单横排|bool|false|
|horizontal|表单竖排|bool|false|


#### 开发调试

```sh
$ git clone https://github.com/tinper-bee/bee-form
$ cd bee-form
$ npm install
$ npm run dev
```
