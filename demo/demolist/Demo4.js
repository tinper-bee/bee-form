/**
 *
 * @title 单个input校验
 * @description 使用FormItem
 *
 */
import React ,{Component } from 'react';
import Form from '../../src/Form';
const FormItem=Form.FormItem;
import FormControl from 'bee-form-control';
import Select from 'bee-select';

const Option = Select.Option;
class Demo4 extends Component {

    checkSuccess = (obj) => {
        console.log('item success');
        console.log(obj);
    }
    FormError = (obj) => {
        console.log('error');
        console.log(obj);
    }
    FormSuccess = (obj) => {
        console.log('success');
        console.log(obj);
    }
    render() {
        return (
           <Form submitError={this.FormError} submitSuccess={this.FormSuccess}>
               <FormItem labelName="姓名" isRequire={true} htmlType="name" errorMessage="姓名格式错误" method="blur" checkSuccess={this.checkSuccess}  >
                   <FormControl name="name"/>
               </FormItem>
               <FormItem labelName="年龄" isRequire={true} method="blur" errorMessage="年龄格式错误" reg={/^[0-9]+$/}  >
                   <FormControl name="age" ref="input" />
               </FormItem>
               <FormItem labelName="性别" checkSuccess={this.checkSuccess} methon="change">
                   <Select name="select"  defaultValue="woman"   >
                       <Option value="man">男</Option>
                       <Option value="woman">女</Option>
                   </Select>
               </FormItem>

           </Form>


        )
    }
}
export default Demo4;