/**
 *
 * @title 基本form校验
 * @description 行内布局
 *
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src/Form';
const FormItem = Form.FormItem;
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import FormGroup from 'bee-form-group';
class Demo3 extends Component {

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
            <Form submitError={this.FormError} submitSuccess={this.FormSuccess} >
                    <FormItem labelName="姓名" isRequire={true} htmlType="name" errorMessage="姓名格式错误" method="blur" checkSuccess={this.checkSuccess} checkError={this.checkError} inline={true}>
                        <FormControl name="name"/>
                    </FormItem>
                    <FormItem labelName="年龄" isRequire={true} method="blur" errorMessage="年龄格式错误" reg={/^[0-9]+$/} inline={true}>
                        <FormControl name="age" ref="input" />
                    </FormItem>



            </Form>
        )
    }
}
export default Demo3;