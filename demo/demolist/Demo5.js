/**
 *
 * @title 表单校验
 * @description 使用栅格布局，配置 Form：userRow={true}  FormItem 格子数，参照栅格布局
 */
import React ,{Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src/Form';
const FormItem=Form.FormItem;
import FormControl from 'bee-form-control';
class Demo5 extends Component {

    checkForm = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }
    render() {
        return (
           <Form userRow={true} submitCallBack={this.checkForm}>
               <FormItem inline={true} md={6} labelName="姓名"  isRequire={true} htmlType="chinese" errorMessage="姓名格式错误" method="blur"  >
                   <FormControl  name="name" placeholder="只能输入中文"  />
               </FormItem>
               <FormItem inline={true} md={6} labelName="年龄" isRequire={true} method="blur" errorMessage="年龄格式错误" reg={/^[0-9]+$/}  >
                   <FormControl  name="age" />
               </FormItem>
           </Form>
        )
    }
}
export default Demo5;