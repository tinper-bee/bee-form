/**
 *
 * @title 高级 form 校验
 * @description formShape的使用，验证的值需要手动修改，然后进行校验示例
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src';
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import Button from 'bee-button';
const FormItem = Form.FormItem;

const Demo7 = Form.createForm()(class Demo7 extends Component {
    
    static propTypes = {
        form: Form.formShape,
    };

    submit = (e) => {
        this.setValue();
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) {
                console.log('校验失败', values);
            } else {
                console.log('提交成功', values)
            }
        });
    }
    setValue = (v) => {
        this.props.form.setFieldsValue({
            username: '王石',
        }, () => console.log('after'));
        console.log('before');
    }

    render() {
        const { getFieldProps, getFieldError } = this.props.form;
        return (
            <div className="Demo7">
                <Label>用户名</Label>
                <FormControl placeholder="请输入用户名" onChange={this.onChange} 
                     {...getFieldProps('username') } 
                />
                <span className='error'>
                    {getFieldError('username')}
                </span>
                <Button shape="border" className="reset" style={{"marginRight":"8px"}}>取消</Button> 
                <Button colors="primary" className="login" onClick={this.submit}> 提交 </Button>
            </div>
        )
    }
})
export default Demo7;