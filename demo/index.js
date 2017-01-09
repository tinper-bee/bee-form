
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../src';
import FormGroup from 'bee-form-group';
import Label from 'bee-label';
import Button from 'bee-button';
import FormControl from 'bee-form-control';
import InputGroup from 'bee-input-group';
import Radio from 'bee-radio';
import Select from 'bee-select';
import Checkbox from 'bee-checkbox';
import Icon from 'bee-icon';

const CARET = <i className="uf uf-arrow-down"></i>;

const CARETUP = <i className="uf uf-arrow-up"></i>;


/**
 * @title 表单Form
 * @description 以下例子是个表单集合，将常用的表单元素集合起来放到Form里面。
 */
const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
};
const uploadprops = {
    action: '/upload.do',
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file);
            console.log(info.fileList);
        }
    },
    defaultFileList: [{
        uid: -1,
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png'
    }, {
        uid: -2,
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png'
    }]
};
class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: [],
            selectedSex: 'female',
            cities: cityData[provinceData[0]],
            secondCity: cityData[provinceData[0]][0]
        };
        this.handleProvinceChange = this.handleProvinceChange.bind(this);
        this.onSecondCityChange = this.onSecondCityChange.bind(this);
        this.ChangeMail = this.ChangeMail.bind(this);
    }

    ChangeMail(value) {
        let options;
        if (!value || value.indexOf('@') >= 0) {
            options = [];
        } else {
            options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {
                const email = `${value}@${domain}`;
                return <Option key={email}>{email}</Option>;
            });
        }
        this.setState({options});
    }

    ChangeSex(value) {
        this.setState({selectedSex: value});
    }

    handleProvinceChange(value) {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0]
        });
    }

    onSecondCityChange(value) {
        this.setState({
            secondCity: value
        });
    }

    render() {
        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
        const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
        return (
            <Form horizontal>
                <Row>
                    <FormGroup>
                        <Col md={2} className="text-right">
                            <Label>姓名:</Label>
                        </Col>
                        <Col md={5}>
                            <FormControl placeholder="Jane Doe"/>
                        </Col>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Col md={2} className="text-right">
                            <Label>姓别:</Label>
                        </Col>
                        <Col md={5}>
                            <Radio.RadioGroup
                                name="sex"
                                selectedValue={this.state.selectedSex}
                                onChange={this.ChangeSex.bind(this)}>
                                <Radio colors="dark" value="female">female</Radio>
                                <Radio colors="dark" value="male">male</Radio>
                            </Radio.RadioGroup>
                        </Col>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Col md={2} className="text-right">
                            <Label>首付款:</Label>
                        </Col>
                        <Col md={5}>
                            <InputGroup>
                                <InputGroup.Addon>￥</InputGroup.Addon>
                                <FormControl type="text"/>
                                <InputGroup.Addon>.00</InputGroup.Addon>
                            </InputGroup>
                        </Col>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Col md={2} className="text-right">
                            <Label>住址:</Label>
                        </Col>
                        <Col md={5}>
                            <Select defaultValue={provinceData[0]} style={{ width: 90 }}
                                    onChange={this.handleProvinceChange}>
                                {provinceOptions}
                            </Select>
                            <Select value={this.state.secondCity} style={{ width: 90 }}
                                    onChange={this.onSecondCityChange}>
                                {cityOptions}
                            </Select>
                        </Col>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Col md={2} className="text-right">
                            <Label>标签:</Label>
                        </Col>
                        <Col md={5}>
                            <InputGroup>
                                <InputGroup.Addon style={{paddingBottom: 0}}><Checkbox style={{marginTop:4}}></Checkbox></InputGroup.Addon>
                                <FormControl type="text"/>
                                <InputGroup.Addon>.00</InputGroup.Addon>
                            </InputGroup>
                        </Col>
                    </FormGroup>
                </Row>
                <Row>
                    <FormGroup>
                        <Col md={2} className="text-right">
                            <Label>邮件:</Label>
                        </Col>
                        <Col md={5}>
                            <Select combobox
                                    onChange={this.ChangeMail}
                                    filterOption={false}
                                    placeholder="Enter the account name"
                                >
                                {this.state.options}
                            </Select>
                        </Col>
                    </FormGroup>
                </Row>
               
            </Form>
        )
    }
}
var DemoArray = [{"example":<Demo1 />,"title":" 表单Form","code":"/**\n * @title 表单Form\n * @description 以下例子是个表单集合，将常用的表单元素集合起来放到Form里面。\n */\nconst provinceData = ['Zhejiang', 'Jiangsu'];\nconst cityData = {\n    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],\n    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']\n};\nconst uploadprops = {\n    action: '/upload.do',\n    onChange(info) {\n        if (info.file.status !== 'uploading') {\n            console.log(info.file);\n            console.log(info.fileList);\n        }\n    },\n    defaultFileList: [{\n        uid: -1,\n        name: 'xxx.png',\n        status: 'done',\n        url: 'http://www.baidu.com/xxx.png'\n    }, {\n        uid: -2,\n        name: 'yyy.png',\n        status: 'done',\n        url: 'http://www.baidu.com/yyy.png'\n    }]\n};\nclass Demo1 extends Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            options: [],\n            selectedSex: 'female',\n            cities: cityData[provinceData[0]],\n            secondCity: cityData[provinceData[0]][0]\n        };\n        this.handleProvinceChange = this.handleProvinceChange.bind(this);\n        this.onSecondCityChange = this.onSecondCityChange.bind(this);\n        this.ChangeMail = this.ChangeMail.bind(this);\n    }\n\n    ChangeMail(value) {\n        let options;\n        if (!value || value.indexOf('@') >= 0) {\n            options = [];\n        } else {\n            options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {\n                const email = `${value}@${domain}`;\n                return <Option key={email}>{email}</Option>;\n            });\n        }\n        this.setState({options});\n    }\n\n    ChangeSex(value) {\n        this.setState({selectedSex: value});\n    }\n\n    handleProvinceChange(value) {\n        this.setState({\n            cities: cityData[value],\n            secondCity: cityData[value][0]\n        });\n    }\n\n    onSecondCityChange(value) {\n        this.setState({\n            secondCity: value\n        });\n    }\n\n    render() {\n        const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);\n        const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);\n        return (\n            <Form horizontal>\n                <Row>\n                    <FormGroup>\n                        <Col md={2} className=\"text-right\">\n                            <Label>姓名:</Label>\n                        </Col>\n                        <Col md={5}>\n                            <FormControl placeholder=\"Jane Doe\"/>\n                        </Col>\n                    </FormGroup>\n                </Row>\n                <Row>\n                    <FormGroup>\n                        <Col md={2} className=\"text-right\">\n                            <Label>姓别:</Label>\n                        </Col>\n                        <Col md={5}>\n                            <Radio.RadioGroup\n                                name=\"sex\"\n                                selectedValue={this.state.selectedSex}\n                                onChange={this.ChangeSex.bind(this)}>\n                                <Radio colors=\"dark\" value=\"female\">female</Radio>\n                                <Radio colors=\"dark\" value=\"male\">male</Radio>\n                            </Radio.RadioGroup>\n                        </Col>\n                    </FormGroup>\n                </Row>\n                <Row>\n                    <FormGroup>\n                        <Col md={2} className=\"text-right\">\n                            <Label>首付款:</Label>\n                        </Col>\n                        <Col md={5}>\n                            <InputGroup>\n                                <InputGroup.Addon>￥</InputGroup.Addon>\n                                <FormControl type=\"text\"/>\n                                <InputGroup.Addon>.00</InputGroup.Addon>\n                            </InputGroup>\n                        </Col>\n                    </FormGroup>\n                </Row>\n                <Row>\n                    <FormGroup>\n                        <Col md={2} className=\"text-right\">\n                            <Label>住址:</Label>\n                        </Col>\n                        <Col md={5}>\n                            <Select defaultValue={provinceData[0]} style={{ width: 90 }}\n                                    onChange={this.handleProvinceChange}>\n                                {provinceOptions}\n                            </Select>\n                            <Select value={this.state.secondCity} style={{ width: 90 }}\n                                    onChange={this.onSecondCityChange}>\n                                {cityOptions}\n                            </Select>\n                        </Col>\n                    </FormGroup>\n                </Row>\n                <Row>\n                    <FormGroup>\n                        <Col md={2} className=\"text-right\">\n                            <Label>标签:</Label>\n                        </Col>\n                        <Col md={5}>\n                            <InputGroup>\n                                <InputGroup.Addon style={{paddingBottom: 0}}><Checkbox style={{marginTop:4}}></Checkbox></InputGroup.Addon>\n                                <FormControl type=\"text\"/>\n                                <InputGroup.Addon>.00</InputGroup.Addon>\n                            </InputGroup>\n                        </Col>\n                    </FormGroup>\n                </Row>\n                <Row>\n                    <FormGroup>\n                        <Col md={2} className=\"text-right\">\n                            <Label>邮件:</Label>\n                        </Col>\n                        <Col md={5}>\n                            <Select combobox\n                                    onChange={this.ChangeMail}\n                                    filterOption={false}\n                                    placeholder=\"Enter the account name\"\n                                >\n                                {this.state.options}\n                            </Select>\n                        </Col>\n                    </FormGroup>\n                </Row>\n               \n            </Form>\n        )\n    }\n}\n","desc":" 以下例子是个表单集合，将常用的表单元素集合起来放到Form里面。"}]


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
            <Col md={12}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel collapsible expanded={ this.state.open } colors='bordered' header={ example } footer={footer} footerStyle = {{padding: 0,borderColor: "transparent"}} >
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
