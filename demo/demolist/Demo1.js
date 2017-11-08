/**
 *
 * @title 单个input校验
 * @description 使用FormItem
 */
import React ,{Component } from 'react';
import Form from '../../src/Form';
const FormItem=Form.FormItem;
import FormControl from 'bee-form-control';
class Demo1 extends Component {
    check=(flag,obj)=>{
        console.log(flag);
        console.log(obj);
    }
    render() {
        return (
            <FormItem labelName="域名" inline={true} inputBefore="http://"  isRequire={true} method="blur"  check={this.check}>
                <FormControl name="url" placeholder="请输入域名" />
            </FormItem>
        )
    }
}
export default Demo1;