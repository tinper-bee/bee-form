/**
 *
 * @title 表单校验
 * @description input和select
 */
import React ,{Component } from 'react';
import Form from '../../src/Form';
const FormItem=Form.FormItem;
import FormControl from 'bee-form-control';
import Select from 'bee-select';
const Option = Select.Option;
class Demo4 extends Component {
    checkForm = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }
    render() {
        return (
           <Form submitCallBack={this.checkForm}>
               <FormItem labelName="姓名"  isRequire={true} htmlType="chinese" errorMessage="姓名格式错误" method="blur"  >
                   <FormControl name="name" placeholder="只能输入中文"/>
               </FormItem>
               <FormItem labelName="年龄" isRequire={true} method="blur" errorMessage="年龄格式错误" reg={/^[0-9]+$/}  >
                   <FormControl name="age" />
               </FormItem>
               <FormItem labelName="性别"  methon="change">
                   <Select name="select"  defaultValue="woman"  >
                       <Option value="man">男</Option>
                       <Option value="woman">女</Option>
                   </Select>
               </FormItem>

           </Form>


        )
    }
}
export default Demo4;