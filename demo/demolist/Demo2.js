/**
 *
 * @title 基本form校验
 * @description 块级布局
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src/Form';
const FormItem = Form.FormItem;
import FormControl from 'bee-form-control';
class Demo2 extends Component {
    checkForm = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }
    render() {
        return (
            <Form  submitCallBack={this.checkForm}  >
                <FormItem  isRequire={true} labelName="姓名" htmlType="chinese" errorMessage="姓名格式错误" method="blur" >
                    <FormControl name="name" placeholder="只能输入中文"/>
                </FormItem>
                <FormItem isRequire={true} labelName="年龄" method="blur" reg={/^[0-9]+$/} errorMessage="年龄格式错误" >
                    <FormControl name="age"  />
                </FormItem>
            </Form>
        )
    }
}
export default Demo2;