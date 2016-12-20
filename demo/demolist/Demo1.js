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
				    	<Col md={2} className="text-right">
				    		<ControlLabel>姓名:</ControlLabel>
				    	</Col>
				      	<Col md={5}>
				      		<FormControl htmlType="text" placeholder="Jane Doe" />
				      	</Col>
				    </FormGroup>
			    </Row>
			    <Row>
				    <FormGroup controlId="formInlineSex">
				    	<Col md={2} className="text-right">
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
				    	<Col md={2} className="text-right">
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
				    	<Col md={2} className="text-right">
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
				    	<Col md={2} className="text-right">
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
				    	<Col md={2} className="text-right">
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
				    	<Col md={2} className="text-right">
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
