/**
 *
 * @title 基本form校验
 * @description 行内布局
 */
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src/Form';
const FormItem = Form.FormItem;
import FormControl from 'bee-form-control';
import Label from 'bee-label';
import FormGroup from 'bee-form-group';
class Demo3 extends Component {
    checkForm = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }
    render() {
        return (
            <Form submitCallBack={this.checkForm}>
                    <FormItem labelName="姓名" isRequire={true} htmlType="chinese" errorMessage="姓名格式错误" method="blur"  inline={true}>
                        <FormControl name="name" placeholder="只能输入中文"/>
                    </FormItem>
                    <FormItem labelName="年龄" isRequire={true} method="blur" errorMessage="年龄格式错误" reg={/^[0-9]+$/} inline={true}>
                        <FormControl name="age" ref="input" />
                    </FormItem>
            </Form>
        )
    }
}
export default Demo3;