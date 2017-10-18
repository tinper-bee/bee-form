/**
 * @title 表单Form
 * @description 以下例子是个表单集合，将常用的表单元素集合起来放到Form里面。
 */
import React, { Component } from 'react';
import FormGroup from 'bee-form-group';
import { Row, Col } from 'bee-layout';
import Label from 'bee-label';
import Button from 'bee-button';
import FormControl from 'bee-form-control';
import InputGroup from 'bee-input-group';
import Radio from 'bee-radio';
import Select from 'bee-select';
import Checkbox from 'bee-checkbox';
import Icon from 'bee-icon';
import Form from '../../src';
import { FormItem } from '../../src';
import *as utils from '../verification';
export default class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataary: []
        };

    }
    // 测试登录
    handleSubmit = (e) => {
        let ary = [this.phone, this.pass];
        this.setState({ dataary: [] });
        ary.map((item, index) => {
            this.state.dataary.push(item.regTest(item, item.state.tagValue));
        })
        this.FormData.handleSubmit();
    }
    render() {
        return (
            <Form horizontal data-ary={this.state.dataary} ref={(input) => { this.FormData = input }} className="u-form-modul">
                <h1 className="u-form-title">用户登录</h1>
                <FormItem regtype="phone" placeholder="请输入手机号" ref={(input) => { this.phone = input }} type="number" must={true} title="手机号" />
                <FormItem regtype="pass" placeholder="请输入密码" ref={(input) => { this.pass = input }} type="password" must={true} title="密码" />
                <Button size="lg" onClick={this.handleSubmit} colors="primary">登录</Button>
            </Form>
        )
    }
}
