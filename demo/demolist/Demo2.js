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
        //?方法移到form里
        let ary = [this.name, this.nickname, this.birthday, this.email, this.phone, this.sex,this.cityinfo, this.emailcode];
        this.setState({ dataary: [] });
        ary.map((item, index) => {
            this.state.dataary.push(item.regTest(item, item.state.tagValue));
        })
        // this.FormData.handleSubmit();
    }
    render() {
        //?ref 去掉
        return (
            <Form horizontal data-ary={this.state.dataary} ref={(input) => { this.FormData = input }} className="u-form-modul">
                <h1 className="u-form-title">基础信息</h1>
                <FormItem regtype="name" placeholder="请输入姓名" ref={(input) => { this.name = input }} type="text" must={true} title="姓名" />

                <FormItem regtype="nickname" placeholder="请输入昵称" ref={(input) => { this.nickname = input }} type="text" must={true} title="昵称" />

                <FormItem regtype="birthday" placeholder="生日" ref={(input) => { this.birthday = input }} type="number" must={true} title="生日" />

                <FormItem regtype="sex" ref={(input) => { this.sex = input }} type="" must={true} title="性别" />

                <h1 className="u-form-title">联系信息</h1>
                <FormItem regtype="email" placeholder="请输入邮箱" ref={(input) => { this.email = input }} type="text" must={true} title="邮件" />

                <FormItem regtype="phone" placeholder="请输入手机号" ref={(input) => { this.phone = input }} type="number" must={true} title="电话" />
{/*
                <FormItem regtype="city" placeholder="详细地址" ref={(input) => { this.cityinfo = input }} type="text" must={true} title="住址" />*/}

                <FormItem regtype="milecode" placeholder="邮编" ref={(input) => { this.emailcode = input }} type="number" must={true} title="邮编" />
                <Button size="lg" onClick={this.handleSubmit} colors="primary">录入</Button>
            </Form>
        )
    }
}
