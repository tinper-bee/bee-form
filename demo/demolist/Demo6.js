/**
 *
 * @title 自定义组件
 * @description 
 */
import React ,{Component } from 'react';
import Form from '../../src';
const FormItem=Form.FormItem;
import FormControl from 'bee-form-control';
import Radio from 'bee-radio';
class Customer extends Component {
    constructor(props) {
        super(props);     
        this.state={
            value:props.defaultValue==undefined?'apple':props.defaultValue
        }  
    }
    onChange=(value)=>{
        this.setState({
            value
        })
    }
    render() {
        return (
            <Radio.RadioGroup
                selectedValue={this.state.value}
                name="fruit"
                onChange={this.onChange}
                type='customer'
                >
                <Radio value="apple" >苹果</Radio>
                <Radio value="orange" >橘子</Radio>
                <Radio value="lemon" >柠檬</Radio>
            </Radio.RadioGroup>

        )
    }
}
class Demo6 extends Component {
    constructor(props){
        super(props);
    }
    check = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }
    render() {
        return (
                <Form  submitCallBack={this.check}>
                    <FormItem showMast={true}  inline={true}  labelName="喜好:" isRequire={true} method="blur"  >
                        <Customer defaultValue='lemon' name='customer'/>    
                    </FormItem>
                </Form>
            
        )
    }
}
export default Demo6;