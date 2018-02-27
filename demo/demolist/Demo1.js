/**
 *
 * @title 单个input校验
 * @description 使用FormItem
 */
import React, { Component } from 'react';
import Form from '../../src';
import FormControl from 'bee-form-control';
import Label from 'bee-label';
const FormItem = Form.FormItem;


class Demo1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '默认值'
        }
    }
    render() {
        const self=this;
        const { getFieldProps, getFieldError } = this.props.form;
        return (
                <FormItem className='demo1'>
                    <Label>姓名：</Label>
                    <FormControl placeholder='请输入姓名'
                     {...getFieldProps('name', {
                        initialValue:this.state.value,
                        onChange(value){self.setState({
                            value
                        })},
                        validateTrigger: 'onBlur',
                        rules: [{
                            required: true, message: '请输入姓名',
                        },{
                            pattern: /[\u4e00-\u9fa5]/, message: '请输入中文字符',
                        }],
                    }) } />
                    <span className='error'>
                        {getFieldError('name')}
                    </span>   
                </FormItem>
        )
    }
}
export default Form.createForm()(Demo1);