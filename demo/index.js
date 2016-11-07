import Form from '../src';
import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import FormGroup from 'bee-form-group';
import ControlLabel from 'bee-control-label';
import Button from 'bee-button';
import FormControl from 'bee-form-control';

function demo1() {
    return( 
		<Form inline>
			<h3> inline Form </h3>
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

function demo2() {
    return( 
    	<div className="demo-form">
	    	<h3> horizontal Form </h3>
			<Form horizontal>
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
		</div>
	)
}


ReactDOM.render(demo1(), document.getElementById('ReactFormDemo1'));
ReactDOM.render(demo2(), document.getElementById('ReactFormDemo2'));
