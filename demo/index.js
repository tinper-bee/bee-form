
import { Con, Row, Col } from 'bee-layout';
import { Panel } from 'bee-panel';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../src';
import FormGroup from 'bee-form-group';
import ControlLabel from 'bee-control-label';
import Button from 'bee-button';
import FormControl from 'bee-form-control';
import InputGroup from 'bee-input-group';
import RadioGroup from 'bee-radio-group';
import Select from 'bee-select';
import Checkbox from 'bee-checkbox';
import Icon from 'bee-icon';
import Upload from 'bee-upload'

const CARET = <i className="uf uf-chevronarrowdown"></i>;

const CARETUP = <i className="uf uf-chevronarrowup"></i>;


/**
 * @title Checkbox
 * @description `checked` 参数设置是否选中，`disabled`设置是否可用。
 */
 const provinceData = ['Zhejiang', 'Jiangsu'];
const cityData = {
  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],
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
    url: 'http://www.baidu.com/xxx.png',
  }, {
    uid: -2,
    name: 'yyy.png',
    status: 'done',
    url: 'http://www.baidu.com/yyy.png',
  }],
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
	    this.setState({ options });
	}
	ChangeSex(value) {
	    this.setState({selectedSex: value});
	}
	handleProvinceChange(value) {
	    this.setState({
	      cities: cityData[value],
	      secondCity: cityData[value][0],
	    });
	}
	onSecondCityChange(value) {
	    this.setState({
	      secondCity: value,
	    });
	}
	render () {
		const provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);
	    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);
		return (
			<Form horizontal>
				<Row>
				    <FormGroup controlId="formInlineName">
				    	<Col md={1} className="text-right">
				    		<ControlLabel>姓名:</ControlLabel>
				    	</Col>
				      	<Col md={5}>
				      		<FormControl htmlType="text" placeholder="Jane Doe" />
				      	</Col>
				    </FormGroup>
			    </Row>
			    <Row>
				    <FormGroup controlId="formInlineSex">
				    	<Col md={1} className="text-right">
				    		<ControlLabel>姓别:</ControlLabel>
				    	</Col>
				      	<Col md={5}>
				      		<RadioGroup
						        name="sex"
						        selectedValue={this.state.selectedSex}
						        onChange={this.ChangeSex.bind(this)}>
						          <RadioGroup.Radio colors="dark" value="female" >female</RadioGroup.Radio>
						          <RadioGroup.Radio colors="dark" value="male" >male</RadioGroup.Radio>
						      </RadioGroup>
				      	</Col>
				    </FormGroup>
			    </Row>
			    <Row>
			    	<FormGroup controlId="formInlineMoney">
				    	<Col md={1} className="text-right">
				    		<ControlLabel>首付款:</ControlLabel>
				    	</Col>
				      	<Col md={5}>
				      		<InputGroup>
						 		<InputGroup.Addon>￥</InputGroup.Addon>
						        <FormControl type="text" />
						        <InputGroup.Addon>.00</InputGroup.Addon>
						    </InputGroup>
				      	</Col>
				    </FormGroup>
			    </Row>
			    <Row>
			    	<FormGroup controlId="formInlineSex">
				    	<Col md={1} className="text-right">
					    		<ControlLabel>住址:</ControlLabel>
					    	</Col>
					    <Col md={5}>
					    	<Select defaultValue={provinceData[0]} style={{ width: 90 }} onChange={this.handleProvinceChange}>
					          {provinceOptions}
					        </Select>
					        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>
					          {cityOptions}
					        </Select>
					    </Col>
					</FormGroup>
			    </Row>
			    <Row>
			    	<FormGroup controlId="formInlineSex">
				    	<Col md={1} className="text-right">
					    		<ControlLabel>标签:</ControlLabel>
					    	</Col>
					    <Col md={5}>
					    	<InputGroup>
						 		<InputGroup.Addon style={{paddingBottom: 0}}><Checkbox style={{marginTop:4}}></Checkbox></InputGroup.Addon>
						        <FormControl type="text" />
						        <InputGroup.Addon>.00</InputGroup.Addon>
						    </InputGroup>
					    </Col>
					</FormGroup>
			    </Row>
			    <Row>
			    	<FormGroup controlId="formInlineSex">
				    	<Col md={1} className="text-right">
					    		<ControlLabel>邮件:</ControlLabel>
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
			    <Row>
			    	<FormGroup controlId="formInlineSex">
				    	<Col md={1} className="text-right">
					    		<ControlLabel>标签:</ControlLabel>
					    </Col>
					    <Col md={5}>
					    	<Upload {...uploadprops}>
						        <Button shape="border">
						          <Icon type="upload" /> Click to Upload
						        </Button>
						    </Upload>
					    </Col>
					</FormGroup>
			    </Row>
			</Form>	
		)
	}
}
var DemoArray = [{"example":<Demo1 />,"title":" Checkbox","code":"/**\n * @title Checkbox\n * @description `checked` 参数设置是否选中，`disabled`设置是否可用。\n */\n const provinceData = ['Zhejiang', 'Jiangsu'];\nconst cityData = {\n  Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],\n  Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang'],\n};\nconst uploadprops = {\n  action: '/upload.do',\n  onChange(info) {\n    if (info.file.status !== 'uploading') {\n      console.log(info.file);\n      console.log(info.fileList);\n    }\n  },\n  defaultFileList: [{\n    uid: -1,\n    name: 'xxx.png',\n    status: 'done',\n    url: 'http://www.baidu.com/xxx.png',\n  }, {\n    uid: -2,\n    name: 'yyy.png',\n    status: 'done',\n    url: 'http://www.baidu.com/yyy.png',\n  }],\n};\nclass Demo1 extends Component {\n\tconstructor(props) {\n\t  \tsuper(props);\n\t  \tthis.state = {\n\t  \t\toptions: [],\n\t    \tselectedSex: 'female',\n\t    \tcities: cityData[provinceData[0]],\n      \t\tsecondCity: cityData[provinceData[0]][0]\n\t    };\n\t    this.handleProvinceChange = this.handleProvinceChange.bind(this);\n\t\tthis.onSecondCityChange = this.onSecondCityChange.bind(this);\n\t\tthis.ChangeMail = this.ChangeMail.bind(this);\n\t}\n\tChangeMail(value) {\n\t    let options;\n\t    if (!value || value.indexOf('@') >= 0) {\n\t      options = [];\n\t    } else {\n\t      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {\n\t        const email = `${value}@${domain}`;\n\t        return <Option key={email}>{email}</Option>;\n\t      });\n\t    }\n\t    this.setState({ options });\n\t}\n\tChangeSex(value) {\n\t    this.setState({selectedSex: value});\n\t}\n\thandleProvinceChange(value) {\n\t    this.setState({\n\t      cities: cityData[value],\n\t      secondCity: cityData[value][0],\n\t    });\n\t}\n\tonSecondCityChange(value) {\n\t    this.setState({\n\t      secondCity: value,\n\t    });\n\t}\n\trender () {\n\t\tconst provinceOptions = provinceData.map(province => <Option key={province}>{province}</Option>);\n\t    const cityOptions = this.state.cities.map(city => <Option key={city}>{city}</Option>);\n\t\treturn (\n\t\t\t<Form horizontal>\n\t\t\t\t<Row>\n\t\t\t\t    <FormGroup controlId=\"formInlineName\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t    \t\t<ControlLabel>姓名:</ControlLabel>\n\t\t\t\t    \t</Col>\n\t\t\t\t      \t<Col md={5}>\n\t\t\t\t      \t\t<FormControl htmlType=\"text\" placeholder=\"Jane Doe\" />\n\t\t\t\t      \t</Col>\n\t\t\t\t    </FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t\t    <FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t    \t\t<ControlLabel>姓别:</ControlLabel>\n\t\t\t\t    \t</Col>\n\t\t\t\t      \t<Col md={5}>\n\t\t\t\t      \t\t<RadioGroup\n\t\t\t\t\t\t        name=\"sex\"\n\t\t\t\t\t\t        selectedValue={this.state.selectedSex}\n\t\t\t\t\t\t        onChange={this.ChangeSex.bind(this)}>\n\t\t\t\t\t\t          <RadioGroup.Radio colors=\"dark\" value=\"female\" >female</RadioGroup.Radio>\n\t\t\t\t\t\t          <RadioGroup.Radio colors=\"dark\" value=\"male\" >male</RadioGroup.Radio>\n\t\t\t\t\t\t      </RadioGroup>\n\t\t\t\t      \t</Col>\n\t\t\t\t    </FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineMoney\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t    \t\t<ControlLabel>首付款:</ControlLabel>\n\t\t\t\t    \t</Col>\n\t\t\t\t      \t<Col md={5}>\n\t\t\t\t      \t\t<InputGroup>\n\t\t\t\t\t\t \t\t<InputGroup.Addon>￥</InputGroup.Addon>\n\t\t\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t\t\t        <InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t\t\t    </InputGroup>\n\t\t\t\t      \t</Col>\n\t\t\t\t    </FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t\t    \t\t<ControlLabel>住址:</ControlLabel>\n\t\t\t\t\t    \t</Col>\n\t\t\t\t\t    <Col md={5}>\n\t\t\t\t\t    \t<Select defaultValue={provinceData[0]} style={{ width: 90 }} onChange={this.handleProvinceChange}>\n\t\t\t\t\t          {provinceOptions}\n\t\t\t\t\t        </Select>\n\t\t\t\t\t        <Select value={this.state.secondCity} style={{ width: 90 }} onChange={this.onSecondCityChange}>\n\t\t\t\t\t          {cityOptions}\n\t\t\t\t\t        </Select>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t</FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t\t    \t\t<ControlLabel>标签:</ControlLabel>\n\t\t\t\t\t    \t</Col>\n\t\t\t\t\t    <Col md={5}>\n\t\t\t\t\t    \t<InputGroup>\n\t\t\t\t\t\t \t\t<InputGroup.Addon style={{paddingBottom: 0}}><Checkbox style={{marginTop:4}}></Checkbox></InputGroup.Addon>\n\t\t\t\t\t\t        <FormControl type=\"text\" />\n\t\t\t\t\t\t        <InputGroup.Addon>.00</InputGroup.Addon>\n\t\t\t\t\t\t    </InputGroup>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t</FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t\t    \t\t<ControlLabel>邮件:</ControlLabel>\n\t\t\t\t\t    \t</Col>\n\t\t\t\t\t    <Col md={5}>\n\t\t\t\t\t    \t<Select combobox\n\t\t\t\t\t\t        onChange={this.ChangeMail}\n\t\t\t\t\t\t        filterOption={false}\n\t\t\t\t\t\t        placeholder=\"Enter the account name\"\n\t\t\t\t\t\t      >\n\t\t\t\t\t\t        {this.state.options}\n\t\t\t\t\t\t      </Select>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t</FormGroup>\n\t\t\t    </Row>\n\t\t\t    <Row>\n\t\t\t    \t<FormGroup controlId=\"formInlineSex\">\n\t\t\t\t    \t<Col md={1} className=\"text-right\">\n\t\t\t\t\t    \t\t<ControlLabel>标签:</ControlLabel>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t    <Col md={5}>\n\t\t\t\t\t    \t<Upload {...uploadprops}>\n\t\t\t\t\t\t        <Button shape=\"border\">\n\t\t\t\t\t\t          <Icon type=\"upload\" /> Click to Upload\n\t\t\t\t\t\t        </Button>\n\t\t\t\t\t\t    </Upload>\n\t\t\t\t\t    </Col>\n\t\t\t\t\t</FormGroup>\n\t\t\t    </Row>\n\t\t\t</Form>\t\n\t\t)\n\t}\n}\n","desc":" `checked` 参数设置是否选中，`disabled`"}]


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
        const header = (
            <Row>
                <Col md={11}>
                { example }
                </Col>
                <Col md={1}>
                <Button shape="icon" onClick={ this.handleClick }>
                    { caret }
                </Button>
                </Col>
            </Row>
        );
        return (
            <Col md={10} mdOffset={1} sm={12} smOffset={0}>
                <h3>{ title }</h3>
                <p>{ desc }</p>
                <Panel headerContent collapsible expanded={ this.state.open } colors='bordered' header={ header } footer={footer} footerStyle = {{padding: 0}}>
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
