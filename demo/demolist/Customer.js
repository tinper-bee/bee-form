/**
 *
 * @title 表单校验
 * @description 使用栅格布局，配置 Form：userRow={true}  FormItem 格子数，参照栅格布局
 */
import React, { Component } from 'react';
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
export default Customer;