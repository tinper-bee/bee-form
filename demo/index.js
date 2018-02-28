
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var Demo4 = require("./demolist/Demo4");var Demo5 = require("./demolist/Demo5");var DemoArray = [{"example":<Demo1 />,"title":" 单个input校验","code":"/**\n *\n * @title 单个input校验\n * @description 使用FormItem\n */\nimport React ,{Component } from 'react';\nimport { Form, FormControl } from 'tinper-bee';\n\nconst FormItem=Form.FormItem;\n\nclass Demo1 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            value:''\n        }\n    }\n    check=(flag,obj)=>{\n        console.log(flag);\n        console.log(obj);\n    }\n    onChange=(value)=>{\n        this.setState({\n            value\n        })\n    }\n    render() {\n        return (\n            <FormItem className=\"demo1\" showMast={true} labelName=\"域名\" inline={true} \n            inputBefore=\"http://\"  isRequire={true} method=\"blur\"  check={this.check}>\n                <FormControl  name=\"url\"   placeholder=\"请输入域名\" value={this.state.value} onChange={this.onChange}/>\n            </FormItem>\n        )\n    }\n}\n","desc":" 使用FormItem","scss_code":".demo1 .u-label {\n    position: relative;\n    bottom: 8px;\n}\n\n.demo1 .u-form-control {\n    border-top-left-radius: 0!important;\n    border-bottom-left-radius: 0!important;\n}"},{"example":<Demo2 />,"title":" 基本form校验","code":"/**\n *\n * @title 基本form校验\n * @description 登录示例\n */\nimport React, {Component} from 'react';\nimport ReactDOM from 'react-dom';\nimport { Form, Button, FormControl } from 'tinper-bee';\nconst FormItem = Form.FormItem;\n\nclass Demo2 extends Component {\n    checkForm = (flag,obj) => {\n        console.log(flag);\n        console.log(obj);\n    }\n    render() {\n        let cancel=()=>{\n            return (\n                <Button shape=\"border\" className=\"cancel\">取消</Button>\n            )\n        }\n        return (\n            <div className=\"demo2\">\n                <Form  submitCallBack={this.checkForm} afterSubmitBtn={cancel()}>\n                    <FormItem showMast={true}  labelName=\"用户名:\" isRequire={true}  \n                    errorMessage=\"请输入用户名\" method=\"blur\"  inline={true} valuePropsName='value'>\n                        <FormControl name=\"username\"   placeholder=\"请输入用户名\" />\n                    </FormItem>\n                    <FormItem showMast={true}  labelName=\"密码:\" isRequire={true} \n                    method=\"blur\" errorMessage=\"请输入密码\" \n                    inputAfter={<span className='forget'>忘记密码？</span>}  inline={true} valuePropsName='value'>\n                        <FormControl name=\"password\"  type=\"password\" placeholder=\"请输入密码\"   />\n                    </FormItem>\n                </Form>\n            </div>\n        )\n    }\n}\n","desc":" 登录示例","scss_code":".demo2 .u-label {\n    min-width: 70px;\n    width: 70px;\n    text-align: right;\n}\n\n.demo2 .cancel,\n.demo3 .cancel {\n    margin-left: 20px;\n}\n\n.demo2 .u-form-submit {\n    padding-left: 70px;\n}\n\n.demo2 .u-input-after {\n    width: auto;\n    border: none!important;\n    background: none!important;\n    cursor: pointer;\n    color: #42a5f5;\n}"},{"example":<Demo3 />,"title":" 基本form校验","code":"/**\n *\n * @title 基本form校验\n * @description 注册示例\n */\nimport React, {Component} from 'react';\nimport { Form, Checkbox, InputNumber, Button, FormControl } from 'tinper-bee';\nconst FormItem = Form.FormItem;\n\nclass Demo3 extends Component {\n    checkForm = (flag,obj) => {\n        console.log(flag);\n        console.log(obj);\n    }\n    render() {\n        let cancel=()=>{\n            return (\n                <Button shape=\"border\" className=\"cancel\">取消</Button>\n            )\n        }\n        return (\n            <div className=\"demo3\">\n                <Form submitCallBack={this.checkForm} afterSubmitBtn={cancel()}>\n                    <FormItem showMast={true}  labelName=\"用户名:\" isRequire={true} valuePropsName='value' errorMessage=\"请输入用户名\" method=\"blur\"  inline={true}>\n                        <FormControl name=\"username\"  placeholder=\"请输入用户名\"/>\n                    </FormItem>\n                    <FormItem showMast={true}  labelName=\"密码:\" isRequire={true} valuePropsName='value' method=\"blur\" errorMessage=\"请输入密码\"   inline={true}>\n                        <FormControl name=\"password1\" type=\"password\" placeholder=\"请输入密码\" />\n                    </FormItem>\n                    <FormItem showMast={true}  labelName=\"再次输入密码:\" valuePropsName='value' isRequire={true} method=\"blur\" errorMessage=\"请再次输入密码\"  inline={true}>\n                        <FormControl name=\"password2\" type=\"password\" placeholder=\"请再次输入密码\" />\n                    </FormItem>\n                    <FormItem showMast={true} valuePropsName='value'  labelName=\"邮箱:\" isRequire={true} method=\"blur\" htmlType=\"email\" errorMessage=\"邮箱格式错误\"  inline={true}>\n                        <FormControl name=\"email\"  placeholder=\"请输入邮箱\" />\n                    </FormItem>\n                    <FormItem inputBefore=\"+86\" showMast={true}  valuePropsName='value'  labelName=\"手机号:\" isRequire={true} method=\"blur\" htmlType=\"tel\" errorMessage=\"手机号格式错误\"  inline={true}>\n                        <FormControl name=\"phone\"  placeholder=\"请输入手机号\" />\n                    </FormItem>\n                    <FormItem inputAfter={<Button shape=\"border\">获取验证码</Button>} showMast={true} valuePropsName='value'  labelName=\"验证码:\" isRequire={true} method=\"blur\"  errorMessage=\"请输入验证码\"  inline={true}>\n                        <FormControl name=\"verification\"  placeholder=\"请输入验证码\" />\n                    </FormItem>\n                    <FormItem  inputAfter='我已经阅读并同意相关条款' valuePropsName='defaultChecked'  labelName=\"\"  inline={true}>\n                        <Checkbox colors=\"info\" name=\"agree\"/>\n                    </FormItem>\n                </Form>\n            </div>\n        )\n    }\n}\n","desc":" 注册示例","scss_code":".demo3 .u-form .u-label {\n    width: 120px;\n    text-align: right;\n}\n\n.demo3 .u-form-submit {\n    padding-left: 120px;\n}\n\n.demo3 .u-input-after {\n    border: none!important;\n    background: none!important;\n}\n\n.demo3 .u-input-after .u-button {\n    height: 30px;\n    padding: 0;\n}"},{"example":<Demo4 />,"title":" 表单校验","code":"/**\n *\n * @title 表单校验\n * @description 用户信息录入实例\n */\nimport React ,{Component } from 'react';\nimport ReactDOM from 'react-dom';\nimport { Form, CitySelect, Rate, InputNumber, Slider, Switch, Checkbox, DatePicker, Radio, Select, FormControl } from 'tinper-bee';\nimport zhCN from 'rc-calendar/lib/locale/zh_CN';\nimport moment from 'moment';\nconst FormItem=Form.FormItem;\nconst Option = Select.Option;\nconst format = 'YYYY-MM-DD HH:mm:ss';\nconst dateInputPlaceholder = '选择日期';\nclass Demo4 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            sex:'man',\n            rate:0\n        };\n    }\n    sexChange=sex=>{\n        this.setState({\n            sex\n        })\n    }\n    rateChange=rate=>{\n        this.setState({\n            rate\n        })\n    }\n    checkForm = (flag,obj) => {\n        console.log(flag);\n        console.log(obj);\n    }\n    render() {\n        return (\n           <Form submitCallBack={this.checkForm} className='demo4'>\n               <FormItem showMast={true}  labelName=\"姓名:\" isRequire={true} valuePropsName='value' htmlType='chinese' errorMessage=\"请输入姓名\" method=\"blur\"  inline={true}>\n                    <FormControl name=\"name\"  placeholder=\"请输入姓名\"/>\n                </FormItem>\n                <FormItem showMast={true} labelName=\"身份证号:\" isRequire={true} valuePropsName='value' htmlType='IDCard' errorMessage=\"请输入身份证号\" method=\"blur\"  inline={true}>\n                    <FormControl name=\"idCard\"  placeholder=\"请输入身份证号\"/>\n                </FormItem>\n                <FormItem showMast={true} labelName=\"年龄:\" isRequire={true} htmlType='number' valuePropsName='value' errorMessage=\"年龄格式错误\" method=\"blur\"  inline={true}>\n                    <FormControl name=\"age\"  placeholder=\"请输入年龄\"/>\n                </FormItem>\n                <FormItem showMast={true} labelName=\"性别:\" isRequire={true} method=\"change\" inline={true}>\n                <Radio.RadioGroup\n                    selectedValue={this.state.sex} onChange={this.sexChange}\n                    name=\"sex\">\n                    <Radio value=\"man\" >男</Radio>\n                    <Radio value=\"woman\" >女</Radio>\n                </Radio.RadioGroup>\n               </FormItem>\n               <FormItem showMast={true} labelName=\"出生日期:\" isRequire={true} method=\"change\"  inline={true}>\n                   <DatePicker\n                       name=\"time\"\n                       format={format}\n                       locale={zhCN}\n                       placeholder = {dateInputPlaceholder}\n                   />\n               </FormItem>\n               <FormItem showMast={true} labelName=\"籍贯:\"  method=\"change\" isRequire={true} inline={true}>\n                   <CitySelect name='origin'/>\n               </FormItem>\n               <FormItem  labelName=\"保密等级:\"  method=\"change\"  inline={true}>\n                    <Rate name='rate'  value={this.state.rate} onChange={this.rateChange}/>\n               </FormItem>\n               <FormItem labelName=\"备注:\" inline={true} >\n                   <FormControl componentClass='textarea' name=\"remark\" />\n               </FormItem>\n           </Form>\n        )\n    }\n}\n","desc":" 用户信息录入实例","scss_code":".demo4 .u-label {\n    width: 75px;\n    text-align: right;\n}\n\n.demo4 .province,\n.demo4 .city,\n.demo4 .area {\n    width: 90px!important;\n}\n\n.demo4 .uf.uf-calendar {\n    position: relative;\n    top: -4px;\n    right: 9px;\n}\n\n.demo4 .u-form-submit {\n    padding-left: 75px;\n}\n\ntextarea {\n    min-height: 100px;\n    min-width: 300px;\n}"},{"example":<Demo5 />,"title":" 表单校验","code":"/**\n *\n * @title 表单校验\n * @description 使用栅格布局，配置 Form：userRow={true}  FormItem 格子数，参照栅格布局\n */\nimport React ,{Component } from 'react';\nimport { Form, Button, FormControl } from 'tinper-bee';\nconst FormItem=Form.FormItem;\nclass Demo5 extends Component {\n    constructor(props){\n        super(props);\n        this.state={\n            checkFormNow:false\n        }\n    }\n    checkForm = (flag,obj,num) => {\n        console.log('第'+num+'个');\n        console.log(flag);\n        console.log(obj);\n    }\n    handClick=()=>{\n        this.setState({\n            checkFormNow:true\n        });\n    }\n    render() {\n        return (\n            <div className=\"demo5\">\n                <Form useRow={true} showSubmit={false} submitCallBack={(flag,obj)=>this.checkForm(flag,obj,1)} checkFormNow={this.state.checkFormNow}>\n                    <FormItem showMast={true}  inline={true} labelXs={6} xs={6} labelMd={2} md={4} labelName=\"姓名\"  isRequire={true} htmlType=\"chinese\" errorMessage=\"姓名格式错误\" method=\"blur\"  >\n                        <FormControl  name=\"name\" placeholder=\"只能输入中文\"  />\n                    </FormItem>\n                    <FormItem showMast={true}  inline={true} labelXs={6} xs={6} labelMd={2} md={4} labelName=\"年龄\" isRequire={true} method=\"blur\" errorMessage=\"年龄格式错误\" reg={/^[0-9]+$/}  >\n                        <FormControl  name=\"age\" />\n                    </FormItem>\n                </Form>\n\n                <Form useRow={true} showSubmit={false} submitCallBack={(flag,obj)=>this.checkForm(flag,obj,2)} checkFormNow={this.state.checkFormNow}>\n                    <FormItem showMast={true}  inline={true} labelXs={6} xs={6} labelMd={2} md={4} labelName=\"姓名\"  isRequire={true} htmlType=\"chinese\" errorMessage=\"姓名格式错误\" method=\"blur\"  >\n                        <FormControl  name=\"name\" placeholder=\"只能输入中文\"  />\n                    </FormItem>\n                    <FormItem showMast={true}  inline={true} labelXs={6} xs={6} labelMd={2} md={4} labelName=\"年龄\" isRequire={true} method=\"blur\" errorMessage=\"年龄格式错误\" reg={/^[0-9]+$/}  >\n                        <FormControl  name=\"age\" />\n                    </FormItem>\n                </Form>\n                <Button colors=\"primary\" onClick={this.handClick}>主动校验form</Button>\n            </div>\n\n        )\n    }\n}\n","desc":" 使用栅格布局，配置 Form：userRow={true}  FormItem 格子数，参照栅格布局","scss_code":".demo5 .u-form .u-col-md-2 {\n    text-align: right;\n}"}]


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
        const { title, example, code, desc, scss_code  } = this.props;
        let caret = this.state.open ? CARETUP : CARET;
        let text = this.state.open ? "隐藏代码" : "查看代码";

        const header = (
            <div>
                {example}
                <Button style={{"marginTop": "10px"}} shape="block" onClick={ this.handleClick }>
                    { caret }
                    { text }
                </Button>
            </div>
        );
        return (
            <Col md={12} >
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible headerContent expanded={ this.state.open } colors='bordered' header={ header } footerStyle = {{padding: 0}}>
                    <pre><code className="hljs javascript">{ code }</code></pre>
                    { !!scss_code ? <pre><code className="hljs css">{ scss_code }</code></pre> : null }
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
                            <Demo example= {child.example} title= {child.title} code= {child.code} scss_code= {child.scss_code} desc= {child.desc} key= {index}/>
                        )

                    })}
                </Row>
        )
    }
}

ReactDOM.render(<DemoGroup/>, document.getElementById('tinperBeeDemo'));
