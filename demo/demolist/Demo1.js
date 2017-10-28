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
class Demo1 extends Component {
    checkSuccess=(obj)=>{
        console.log('item success');
        console.log(obj);
    }
    checkError=(obj)=>{
        console.log('item error');
        console.log(obj);
    }

    render() {
        return (
            <FormItem isRequire={true} method="change" reg={/^[0-9]+$/} checkSuccess={this.checkSuccess} checkError={this.checkError}>
                <FormControl name="age" placeholder="请输入数字"/>
            </FormItem>
        )
    }
}
export default Demo1;