import React from 'react';
import {shallow, mount, render} from 'enzyme';
import {expect} from 'chai';
import Form from '../src/index';

describe('Form test', function() {
	it('Form inline should be exist', function() {
		let form = shallow(<Form inline/>);
		expect(form.hasClass('form-inline')).to.equal(true);
	})
	it('Form inline should be exist', function() {
		let form = shallow(<Form horizontal/>);
		expect(form.hasClass('form-horizontal')).to.equal(true);
	})
})