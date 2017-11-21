
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../src';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 单个input校验","code":"/**\n *\n * @title 单个input校验\n * @description 使用FormItem\n */\nimport React ,{Component } from 'react';\nimport Form from '../../src/Form';\nconst FormItem=Form.FormItem;\nimport FormControl from 'bee-form-control';\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            value:'123'\n        }\n    }\n    check=(flag,obj)=>{\n        console.log(flag);\n        console.log(obj);\n    }\n    change=(value)=>{\n        this.setState({\n            value:value\n        })\n    }\n    render() {\n        return (\n            <FormItem className=\"demo1\" showMast={true} labelName=\"域名\" inline={true} \n            inputBefore=\"http://\"  isRequire={true} method=\"blur\"  check={this.check}>\n                <FormControl name=\"url\"  onChange={this.change} placeholder=\"请输入域名\" value={this.state.value}/>\n            </FormItem>\n        )\n    }\n}\n","desc":" 使用FormItem"},{"example":<Demo2 />,"title":" 基本form校验","code":"/**\n *\n * @title 基本form校验\n * @description 登录示例\n */\nimport React, {Component} from 'react';\nimport Form from '../../src/Form';\nconst FormItem = Form.FormItem;\nimport FormControl from 'bee-form-control';\nimport Button from 'bee-button';\n\nclass Demo2 extends Component {\n    checkForm = (flag,obj) => {\n        console.log(flag);\n        console.log(obj);\n    }\n    render() {\n        let cancel=()=>{\n            return (\n                <Button shape=\"border\" className=\"cancel\">取消</Button>\n            )\n        }\n        return (\n            <div className=\"demo2\">\n                <Form   submitCallBack={this.checkForm} afterSubmitBtn={cancel()}>\n                    <FormItem showMast={true}  labelName=\"用户名:\" isRequire={true}  errorMessage=\"请输入用户名\" method=\"blur\"  inline={true}>\n                        <FormControl name=\"username\"   placeholder=\"请输入用户名\" />\n                    </FormItem>\n                    <FormItem showMast={true}  labelName=\"密码:\" isRequire={true} method=\"blur\" errorMessage=\"请输入密码\" inputAfter={<span className='forget'>忘记密码？</span>}  inline={true}>\n                        <FormControl name=\"password\"  type=\"password\" placeholder=\"请输入密码\" />\n                    </FormItem>\n                </Form>\n            </div>\n        )\n    }\n}\n","desc":" 登录示例"},{"example":<Demo3 />,"title":" 基本form校验","code":"/**\n *\n * @title 基本form校验\n * @description 注册示例\n */\nimport React, {Component} from 'react';\nimport Form from '../../src/Form';\nconst FormItem = Form.FormItem;\nimport FormControl from 'bee-form-control';\nimport Button from 'bee-button';\n\nclass Demo3 extends Component {\n    checkForm = (flag,obj) => {\n        console.log(flag);\n        console.log(obj);\n    }\n    render() {\n        let cancel=()=>{\n            return (\n                <Button shape=\"border\" className=\"cancel\">取消</Button>\n            )\n        }\n        return (\n            <div className=\"demo3\">\n                <Form submitCallBack={this.checkForm} afterSubmitBtn={cancel()}>\n                    <FormItem showMast={true}  labelName=\"用户名:\" isRequire={true}  errorMessage=\"请输入用户名\" method=\"blur\"  inline={true}>\n                        <FormControl name=\"username\"  placeholder=\"请输入用户名\"/>\n                    </FormItem>\n                    <FormItem showMast={true}  labelName=\"密码:\" isRequire={true} method=\"blur\" errorMessage=\"请输入密码\"   inline={true}>\n                        <FormControl name=\"password1\" type=\"password\" placeholder=\"请输入密码\" />\n                    </FormItem>\n                    <FormItem showMast={true}  labelName=\"再次输入密码:\" isRequire={true} method=\"blur\" errorMessage=\"请再次输入密码\"  inline={true}>\n                        <FormControl name=\"password2\" type=\"password\" placeholder=\"请再次输入密码\" />\n                    </FormItem>\n                    <FormItem showMast={true}  showMast={true}   labelName=\"邮箱:\" isRequire={true} method=\"blur\" htmlType=\"email\" errorMessage=\"邮箱格式错误\"  inline={true}>\n                        <FormControl name=\"email\"  placeholder=\"请输入邮箱\" />\n                    </FormItem>\n                </Form>\n            </div>\n        )\n    }\n}\n","desc":" 注册示例"},{"example":<Demo4 />,"title":" 表单校验","code":"/**\n *\n * @title 表单校验\n * @description input和select\n */\nimport React ,{Component } from 'react';\nimport Form from '../../src/Form';\nimport FormControl from 'bee-form-control';\nimport Select from 'bee-select';\nimport Radio from 'bee-radio'\nimport DatePicker from 'bee-datepicker';\nimport zhCN from 'rc-calendar/lib/locale/zh_CN';\nimport moment from 'moment';\nimport Checkbox from 'bee-checkbox';\nimport Switch from 'bee-switch';\nconst FormItem=Form.FormItem;\nconst Option = Select.Option;\nconst format = 'YYYY-MM-DD HH:mm:ss';\nconst dateInputPlaceholder = '选择日期';\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            radioValue: 'apple'\n        };\n    }\n\n    checkForm = (flag,obj) => {\n        console.log(flag);\n        console.log(obj);\n    }\n    radioChange=value=>{\n        this.setState({\n            radioValue:value\n        });\n    }\n    timeChange=v=>{\n        console.log(v);\n    }\n    textareaChange=v=>{\n        console.log(v);\n    }\n    checkboxChange=v=>{\n        console.log(v);\n    }\n    switchChange=v=>{\n        console.log(v);\n    }\n    render() {\n        return (\n           <Form submitCallBack={this.checkForm}>\n               <FormItem labelName=\"姓名\"  isRequire={true} htmlType=\"chinese\" errorMessage=\"姓名格式错误\" method=\"blur\"  >\n                   <FormControl name=\"name\" placeholder=\"只能输入中文\"/>\n               </FormItem>\n               <FormItem labelName=\"年龄\" isRequire={true} method=\"blur\" errorMessage=\"年龄格式错误\" reg={/^[0-9]+$/}  >\n                   <FormControl name=\"age\" />\n               </FormItem>\n               <FormItem labelName=\"性别\"  method=\"change\">\n                   <Select name=\"select\"  defaultValue=\"woman\"  >\n                       <Option value=\"man\">男</Option>\n                       <Option value=\"woman\">女</Option>\n                   </Select>\n               </FormItem>\n               <FormItem inline={true} labelName=\"喜好\"  method=\"change\" change={this.radioChange}>\n                   <Radio.RadioGroup\n                       selectedValue={this.state.radioValue}\n                       name=\"fruit\">\n                   <Radio value=\"apple\" >苹果</Radio>\n                   <Radio value=\"orange\" >橘子</Radio>\n                   <Radio value=\"lemon\" >柠檬</Radio>\n               </Radio.RadioGroup>\n               </FormItem>\n               <FormItem labelName=\"时间\"  method=\"change\" change={this.timeChange}>\n                   <DatePicker\n                       name=\"time\"\n                       format={format}\n                       locale={zhCN}\n                       value={moment()}\n                       placeholder = {dateInputPlaceholder}\n                   />\n               </FormItem>\n               <FormItem inline={true} labelName=\"完成\"   method=\"change\" change={this.checkboxChange}>\n                   <Checkbox colors=\"info\" name=\"checkbox\"/>\n               </FormItem>\n               <FormItem inline={true} labelName=\"启用\"   method=\"change\" change={this.switchChange}>\n                   <Switch  name=\"switch\"/>\n               </FormItem>\n               <FormItem labelName=\"备注\"   method=\"change\" change={this.textareaChange}>\n                   <textarea name=\"textarea\"/>\n               </FormItem>\n           </Form>\n\n\n        )\n    }\n}\n","desc":" input和select"},{"example":<Demo5 />,"title":" 表单校验","code":"/**\n *\n * @title 表单校验\n * @description 使用栅格布局，配置 Form：userRow={true}  FormItem 格子数，参照栅格布局\n */\nimport React ,{Component } from 'react';\nimport Form from '../../src/Form';\nconst FormItem=Form.FormItem;\nimport FormControl from 'bee-form-control';\nimport Button from 'bee-button';\nclass Demo5 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            checkFormNow:false\n        }\n    }\n    checkForm = (flag,obj,num) => {\n        console.log('第'+num+'个');\n        console.log(flag);\n        console.log(obj);\n    }\n    handClick=()=>{\n        this.setState({\n            checkFormNow:true\n        });\n    }\n    render() {\n        return (\n            <div className=\"demo5\">\n                <Form useRow={true} showSubmit={false} submitCallBack={(flag,obj)=>this.checkForm(flag,obj,1)} checkFormNow={this.state.checkFormNow}>\n                    <FormItem showMast={true}  inline={true} labelMd={2} md={4} labelName=\"姓名\"  isRequire={true} htmlType=\"chinese\" errorMessage=\"姓名格式错误\" method=\"blur\"  >\n                        <FormControl  name=\"name\" placeholder=\"只能输入中文\"  />\n                    </FormItem>\n                    <FormItem showMast={true}  inline={true} labelMd={2} md={4} labelName=\"年龄\" isRequire={true} method=\"blur\" errorMessage=\"年龄格式错误\" reg={/^[0-9]+$/}  >\n                        <FormControl  name=\"age\" />\n                    </FormItem>\n                </Form>\n\n                <Form useRow={true} showSubmit={false} submitCallBack={(flag,obj)=>this.checkForm(flag,obj,2)} checkFormNow={this.state.checkFormNow}>\n                    <FormItem showMast={true}  inline={true} labelMd={2} md={4} labelName=\"姓名\"  isRequire={true} htmlType=\"chinese\" errorMessage=\"姓名格式错误\" method=\"blur\"  >\n                        <FormControl  name=\"name\" placeholder=\"只能输入中文\"  />\n                    </FormItem>\n                    <FormItem showMast={true}  inline={true} labelMd={2} md={4} labelName=\"年龄\" isRequire={true} method=\"blur\" errorMessage=\"年龄格式错误\" reg={/^[0-9]+$/}  >\n                        <FormControl  name=\"age\" />\n                    </FormItem>\n                </Form>\n                <Button colors=\"primary\" onClick={this.handClick}>主动校验form</Button>\n            </div>\n\n        )\n    }\n}\n","desc":" 使用栅格布局，配置 Form：userRow={true}  FormItem 格子数，参照栅格布局"}]


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
