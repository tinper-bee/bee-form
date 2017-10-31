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
        let before=()=>{
            return (<span>
                before
            </span>)
        }
        let after=()=>{
            return (<span>
                after
            </span>)
        }
        return (
            <FormItem inputBefore={before()} inputAfter={after()} isRequire={true} method="blur" reg={/^[0-9]+$/} check={this.check}>
                <FormControl name="age" placeholder="请输入数字"/>
            </FormItem>
        )
    }
}
export default Demo1;