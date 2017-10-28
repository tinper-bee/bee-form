
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var DemoArray = [{"example":<Demo1 />,"title":" 单个input校验","code":"/**\n *\n * @title 单个input校验\n * @description 使用FormItem\n *\n */\nimport React ,{Component } from 'react';\nimport Form from '../../src/Form';\nconst FormItem=Form.FormItem;\nimport FormControl from 'bee-form-control';\nclass Demo1 extends Component {\n    checkSuccess=(obj)=>{\n        console.log('item success');\n        console.log(obj);\n    }\n    checkError=(obj)=>{\n        console.log('item error');\n        console.log(obj);\n    }\n\n    render() {\n        return (\n            <FormItem isRequire={true} method=\"change\" reg={/^[0-9]+$/} checkSuccess={this.checkSuccess} checkError={this.checkError}>\n                <FormControl name=\"age\" placeholder=\"请输入数字\"/>\n            </FormItem>\n        )\n    }\n}\n","desc":" 使用FormItem"},{"example":<Demo2 />,"title":" 基本form校验","code":"/**\n *\n * @title 基本form校验\n * @description 块级布局\n *\n */\nimport React, {Component} from 'react';\nimport ReactDOM from 'react-dom';\nimport Form from '../../src/Form';\nconst FormItem = Form.FormItem;\nimport FormControl from 'bee-form-control';\nimport Label from 'bee-label';\nimport FormGroup from 'bee-form-group';\nclass Demo1 extends Component {\n\n    FormError = (obj) => {\n        console.log('error');\n        console.log(obj);\n    }\n    FormSuccess = (obj) => {\n        console.log('success');\n        console.log(obj);\n    }\n    checkSuccess = (obj) => {\n        console.log('item success');\n        console.log(obj);\n    }\n    checkError = (obj) => {\n        console.log('item error');\n        console.log(obj);\n    }\n    render() {\n        return (\n            <Form  submitError={this.FormError} submitSuccess={this.FormSuccess} checkError={this.checkError}>\n                <FormItem isRequire={true} labelName=\"姓名\" htmlType=\"name\" errorMessage=\"姓名格式错误\" method=\"blur\" checkSuccess={this.checkSuccess}>\n                    <FormControl name=\"name\"/>\n                </FormItem>\n                <FormItem isRequire={true} labelName=\"年龄\" method=\"blur\" reg={/^[0-9]+$/} errorMessage=\"年龄格式错误\" >\n                    <FormControl name=\"age\" ref=\"input\" />\n                </FormItem>\n\n            </Form>\n        )\n    }\n}\n","desc":" 块级布局"},{"example":<Demo3 />,"title":" 基本form校验","code":"/**\n *\n * @title 基本form校验\n * @description 行内布局\n *\n */\nimport React, {Component} from 'react';\nimport ReactDOM from 'react-dom';\nimport Form from '../../src/Form';\nconst FormItem = Form.FormItem;\nimport FormControl from 'bee-form-control';\nimport Label from 'bee-label';\nimport FormGroup from 'bee-form-group';\nclass Demo3 extends Component {\n\n    FormError = (obj) => {\n        console.log('error');\n        console.log(obj);\n    }\n    FormSuccess = (obj) => {\n        console.log('success');\n        console.log(obj);\n    }\n    checkSuccess = (obj) => {\n        console.log('item success');\n        console.log(obj);\n    }\n    checkError = (obj) => {\n        console.log('item error');\n        console.log(obj);\n    }\n\n    render() {\n        return (\n            <Form submitError={this.FormError} submitSuccess={this.FormSuccess} checkError={this.checkError}>\n                    <FormItem labelName=\"姓名\" isRequire={true} htmlType=\"name\" errorMessage=\"姓名格式错误\" method=\"blur\" checkSuccess={this.checkSuccess} inline={true}>\n                        <FormControl name=\"name\"/>\n                    </FormItem>\n                    <FormItem labelName=\"年龄\" isRequire={true} method=\"blur\" errorMessage=\"年龄格式错误\" reg={/^[0-9]+$/} inline={true}>\n                        <FormControl name=\"age\" ref=\"input\" />\n                    </FormItem>\n\n\n\n            </Form>\n        )\n    }\n}\n","desc":" 行内布局"},{"example":<Demo4 />,"title":" 单个input校验","code":"/**\n *\n * @title 单个input校验\n * @description 使用FormItem\n *\n */\nimport React ,{Component } from 'react';\nimport Form from '../../src/Form';\nconst FormItem=Form.FormItem;\nimport FormControl from 'bee-form-control';\nimport Select from 'bee-select';\n\nconst Option = Select.Option;\nclass Demo4 extends Component {\n\n    checkSuccess = (obj) => {\n        console.log('item success');\n        console.log(obj);\n    }\n    FormError = (obj) => {\n        console.log('error');\n        console.log(obj);\n    }\n    FormSuccess = (obj) => {\n        console.log('success');\n        console.log(obj);\n    }\n    render() {\n        return (\n           <Form submitError={this.FormError} submitSuccess={this.FormSuccess}>\n               <FormItem labelName=\"姓名\" isRequire={true} htmlType=\"name\" errorMessage=\"姓名格式错误\" method=\"blur\" checkSuccess={this.checkSuccess}  >\n                   <FormControl name=\"name\"/>\n               </FormItem>\n               <FormItem labelName=\"年龄\" isRequire={true} method=\"blur\" errorMessage=\"年龄格式错误\" reg={/^[0-9]+$/}  >\n                   <FormControl name=\"age\" ref=\"input\" />\n               </FormItem>\n               <FormItem labelName=\"性别\" checkSuccess={this.checkSuccess} methon=\"change\">\n                   <Select name=\"select\"  defaultValue=\"woman\"   >\n                       <Option value=\"man\">男</Option>\n                       <Option value=\"woman\">女</Option>\n                   </Select>\n               </FormItem>\n\n           </Form>\n\n\n        )\n    }\n}\n","desc":" 使用FormItem"}]


class Demo extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({ open: !this.state.open })
    }

    render () {
        const { title, example, code, desc  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const footer = (
            <Button shape="block" onClick={ this.handleClick }>
                { caret }
                { text }
            </Button>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                </Panel>
            </Col>
        )
    }
}

class DemoGroup extends Component {
    constructor(props){
        super(props)
    }
    render () {
        return (
                <Row>
                    {DemoArray.map((child,index) => {

                        return (
                            <Demo example= {child.example} title= {child.title} code= {child.code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
