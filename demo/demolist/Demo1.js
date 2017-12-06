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
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }
    check=(flag,obj)=>{
        console.log(flag);
        console.log(obj);
    }
    onChange=(value)=>{
        this.setState({
            value
        })
    }
    render() {
        return (
            <FormItem className="demo1" showMast={true} labelName="域名" inline={true} 
            inputBefore="http://"  isRequire={true} method="blur"  check={this.check}>
                <FormControl style={{'paddingLeft':'50px'}} name="url"   placeholder="请输入域名" value={this.state.value} onChange={this.onChange}/>
            </FormItem>
        )
    }
}
export default Demo1;