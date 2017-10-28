/**
 *
 * @title 基本form校验
 * @description 块级布局
 *
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src/Form';
const FormItem = Form.FormItem;
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import FormGroup from 'bee-form-group';
class Demo1 extends Component {

    FormError = (obj) => {
        console.log('error');
        console.log(obj);
    }
    FormSuccess = (obj) => {
        console.log('success');
        console.log(obj);
    }
    checkSuccess = (obj) => {
        console.log('item success');
        console.log(obj);
    }
    checkError = (obj) => {
        console.log('item error');
        console.log(obj);
    }
    render() {
        return (
            <Form  submitError={this.FormError} submitSuccess={this.FormSuccess} checkError={this.checkError}>
                <FormItem isRequire={true} labelName="姓名" htmlType="name" errorMessage="姓名格式错误" method="blur" checkSuccess={this.checkSuccess}>
                    <FormControl name="name"/>
                </FormItem>
                <FormItem isRequire={true} labelName="年龄" method="blur" reg={/^[0-9]+$/} errorMessage="年龄格式错误" >
                    <FormControl name="age" ref="input" />
                </FormItem>

            </Form>
        )
    }
}
export default Demo1;