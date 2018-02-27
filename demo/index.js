
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import Button from 'bee-button';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


var Demo1 = require("./demolist/Demo1");var Demo2 = require("./demolist/Demo2");var Demo3 = require("./demolist/Demo3");var DemoArray = [{"example":<Demo1 />,"title":" 单个input校验","code":"/**\n *\n * @title 单个input校验\n * @description 使用FormItem\n */\nimport React, { Component } from 'react';\nimport { Form, Label, FormControl } from 'tinper-bee';\nconst FormItem = Form.FormItem;\n\n\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            value: '默认值'\n        }\n    }\n    render() {\n        const self=this;\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n                <FormItem className='demo1'>\n                    <Label>姓名：</Label>\n                    <FormControl placeholder='请输入姓名'\n                     {...getFieldProps('name', {\n                        initialValue:this.state.value,\n                        onChange(value){self.setState({\n                            value\n                        })},\n                        validateTrigger: 'onBlur',\n                        rules: [{\n                            required: true, message: '请输入姓名',\n                        },{\n                            pattern: /[\\u4e00-\\u9fa5]/, message: '请输入中文字符',\n                        }],\n                    }) } />\n                    <span className='error'>\n                        {getFieldError('name')}\n                    </span>   \n                </FormItem>\n        )\n    }\n}\n","desc":" 使用FormItem","scss_code":".demo1{\n    font-size: 14px;\n}\n.demo1 .u-label {\n    display: inline;\n}\n.demo1 .u-form-control {\n    width: auto;\n}\n.demo1 .error{\n    font-size: 12px;\n    color: red;\n    margin-left: 10px;\n}"},{"example":<Demo2 />,"title":" 基本form校验","code":"/**\n *\n * @title 基本form校验\n * @description 登录示例\n */\nimport React, {Component} from 'react';\nimport ReactDOM from 'react-dom';\nimport { Form, Button, Label, FormControl } from 'tinper-bee';\nconst FormItem = Form.FormItem;\n\nclass Demo2 extends Component {\n   \n    submit=(e)=>{\n        e.preventDefault();\n        this.props.form.validateFields((err, values) => {\n          if (err) {\n            console.log('校验失败', values);\n          }else{\n            console.log('提交成功',values)\n          }\n        });\n    }\n    render() {\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n            <div className=\"demo2\">\n                <Form >\n                    <FormItem>\n                    <Label>用户名：</Label>\n                        <FormControl placeholder=\"请输入用户名\" \n                         {...getFieldProps('username', {\n                            validateTrigger: 'onBlur',\n                            rules: [{\n                                required: true, message: '请输入用户名',\n                            }],\n                        }) } \n                        />\n                        <span className='error'>\n                        {getFieldError('username')}\n                    </span>   \n                    </FormItem>\n                    <FormItem>\n                    <Label>密码：</Label>\n                        <FormControl placeholder=\"请输入密码\" type='password'\n                         {...getFieldProps('password', {\n                            validateTrigger: 'onBlur',\n                            rules: [{\n                                required: true, message: '请输入密码',\n                            }],\n                        }) } \n                        />\n                        <span className='error'>\n                        {getFieldError('password')}\n                    </span>   \n                    </FormItem>\n                    <div className='submit'>\n                    <Button colors=\"primary\" className=\"login\" onClick={this.submit}>登陆</Button>\n                    <Button shape=\"border\" className=\"reset\">取消</Button>\n                    </div>\n                    \n                </Form>\n            </div>\n        )\n    }\n}\n","desc":" 登录示例","scss_code":".demo2{\n    font-size: 14px;\n}\n.demo2 .u-label {\n    display: inline-block;\n    min-width: 80px;\n    text-align: right;\n}\n.demo2 .u-form-control {\n    width: auto;\n}\n.demo2 .error{\n    font-size: 12px;\n    color: red;\n    margin-left: 10px;\n}\n.demo2 .submit{\n    padding-left: 90px;\n}\n.demo2 .submit .login{\n    margin-right: 10px;\n}"},{"example":<Demo3 />,"title":" 基本form校验","code":"/**\n *\n * @title 基本form校验\n * @description 注册示例\n */\nimport React, { Component } from 'react';\nimport { Form, Label, Checkbox, Button, FormControl } from 'tinper-bee';\nconst FormItem = Form.FormItem;\n\nclass Demo3 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            checkbox: false\n        }\n    }\n    submit = (e) => {\n        e.preventDefault();\n        this.props.form.validateFields((err, values) => {\n            if (err) {\n                console.log('校验失败', values);\n            } else {\n                console.log('提交成功', values)\n            }\n        });\n    }\n    handleConfirmPassword = (rule, value, callback) => {\n        const { getFieldValue } = this.props.form;\n        if (value && value !== getFieldValue('password')) {\n            callback('两次输入不一致！')\n        }\n        callback();\n    }\n    render() {\n        const self = this;\n        const { getFieldProps, getFieldError } = this.props.form;\n        return (\n            <div className=\"demo3\">\n                <Form>\n                    <FormItem>\n                        <Label>用户名：</Label>\n                        <FormControl placeholder=\"请输入用户名(包含数字和字母，8-15位)\"\n                            {...getFieldProps('username', {\n                                validateTrigger: 'onBlur',\n                                rules: [{\n                                    required: true, message: '请输入用户名',\n                                }, {\n                                    pattern: /^(?!\\d+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{8,15}$/, message: '用户名格式错误',\n                                }],\n                            }) }\n                        />\n                        <span className='error'>\n                            {getFieldError('username')}\n                        </span>\n                    </FormItem>\n\n                    <FormItem>\n                        <Label>密码：</Label>\n                        <FormControl placeholder=\"请输入密码\"\n                            {...getFieldProps('password', {\n                                validateTrigger: 'onBlur',\n                                rules: [{\n                                    required: true, message: '请输入密码',\n                                }],\n                            }) }\n                        />\n                        <span className='error'>\n                            {getFieldError('password')}\n                        </span>\n                    </FormItem>\n\n                    <FormItem>\n                        <Label>再次输入密码：</Label>\n                        <FormControl placeholder=\"请输入密码\"\n                            {...getFieldProps('password2', {\n                                validateTrigger: 'onBlur',\n                                rules: [{\n                                    required: true, message: '请输入密码',\n                                }, {\n                                    validator: this.handleConfirmPassword\n                                }],\n                            }) }\n                        />\n                        <span className='error'>\n                            {getFieldError('password2')}\n                        </span>\n                    </FormItem>\n\n                    <FormItem>\n                        <Label>邮箱：</Label>\n                        <FormControl placeholder=\"请输入邮箱\"\n                            {...getFieldProps('email', {\n                                validateTrigger: 'onBlur',\n                                rules: [{\n                                    required: true, message: '请输入邮箱',\n                                }, {\n                                    type: 'email', message: '邮箱格式不正确'\n                                }],\n                            }) }\n                        />\n                        <span className='error'>\n                            {getFieldError('email')}\n                        </span>\n                    </FormItem>\n                    <FormItem>\n                        <Label>手机号：</Label>\n\n                        <FormControl placeholder=\"请输入手机号\"\n                            {...getFieldProps('phone', {\n                                validateTrigger: 'onBlur',\n                                rules: [{\n                                    required: true, message: '请输入手机号',\n                                }, {\n                                    pattern: /^\\d{11}$/, message: '手机号格式不正确'\n                                }],\n                            }) }\n                        />\n\n                        <span className='error'>\n                            {getFieldError('phone')}\n                        </span>\n                    </FormItem>\n\n                    <FormItem style={{'paddingLeft':'110px'}}>\n                        <Checkbox colors=\"info\"\n                            defaultChecked={this.state.checkbox}\n                            {\n                            ...getFieldProps('checkbox', {\n                                initialValue: false,\n                            }\n                            ) }\n                        />\n                        <span>我已经阅读并同意相关条款</span>\n                    </FormItem>\n                    <div className='submit'>\n                        <Button colors=\"primary\" className=\"login\" onClick={this.submit}>登陆</Button>\n                        <Button shape=\"border\" className=\"reset\">取消</Button>\n                    </div>\n                </Form>\n            </div>\n        )\n    }\n}\n","desc":" 注册示例","scss_code":".demo3{\n    font-size: 14px;\n}\n.demo3 .u-label {\n    display: inline-block;\n    min-width: 100px;\n    text-align: right;\n}\n.demo3 .u-form-control {\n    width: auto;\n    min-width: 300px;\n}\n.demo3 .error{\n    font-size: 12px;\n    color: red;\n    margin-left: 10px;\n}\n.demo3 .submit{\n    padding-left: 90px;\n}\n.demo3 .submit .login{\n    margin-right: 10px;\n}"}]


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
