import Form from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import FormGroup from 'bee-form-group';
import ControlLabel from 'bee-control-label';
import Button from 'bee-button';
import FormControl from 'bee-form-control';
import InputGroup from 'bee-input-group';
import RadioGroup from 'bee-radio-group'

class Demo extends Component {
	render(){
		return( 
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
		)
	}
}
export default Demo;