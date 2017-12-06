/**
 *
 * @title 使用tinper例子
 */
import React ,{Component } from 'react';
import ReactDOM from 'react-dom';
import Form from '../../src/Form';
import FormControl from 'bee-form-control';
import Select from 'bee-select';
import Radio from 'bee-radio';
import DatePicker from 'bee-datepicker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import moment from 'moment';
import Checkbox from 'bee-checkbox';
import Switch from 'bee-switch';
import Slider from 'bee-slider';
import InputNumber from 'bee-input-number';
import Rate from 'bee-rate';
const FormItem=Form.FormItem;
const Option = Select.Option;
const format = 'YYYY-MM-DD HH:mm:ss';
const dateInputPlaceholder = '选择日期';
class Demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: 'apple',
            name:'',
            age:'',
            remark:'',
            num:123,
            rate:0
        };
    }

    checkForm = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }
    radioChange=value=>{
        this.setState({
            radioValue:value
        });
    }
    numChange=value=>{
        this.setState({
            num:value
        });
    }
    textareaChange=value=>{
        this.setState({
            remark:value
        });
    }
    change=v=>{
        console.log(v);
    }
    inputChange=()=>{
        this.setState({
            name:ReactDOM.findDOMNode(this.refs.name).value,
            age:ReactDOM.findDOMNode(this.refs.age).value,
            remark:ReactDOM.findDOMNode(this.refs.remark).value,
            num:ReactDOM.findDOMNode(this.refs.num).value,
        })
    }
    rateChange=(value)=>{
        this.setState({
            rate:value
        });
    }
    render() {

        return (
           <Form submitCallBack={this.checkForm}>
               <FormItem labelName="姓名"  isRequire={true} htmlType="chinese"
                errorMessage="姓名格式错误" method="blur" valuePropsName='value' >
                   <FormControl name="name" ref='name' placeholder="只能输入中文"
                    value={this.state.name} onChange={this.inputChange}/>
               </FormItem>
               <FormItem labelName="年龄" isRequire={true} method="blur"
                errorMessage="年龄格式错误" reg={/^[0-9]+$/}  valuePropsName='value'>
                   <FormControl name="age" ref='age' placeholder="只能输入数字" value={this.state.age} onChange={this.inputChange}/>
               </FormItem>
               <FormItem labelName="性别"  method="change">
                   <Select name="select"  defaultValue="woman"  >
                       <Option value="man">男</Option>
                       <Option value="woman">女</Option>
                   </Select>
               </FormItem>
               <FormItem inline={true} labelName="喜好" valuePropsName='selectedValue' method="change" change={this.radioChange} >
                   <Radio.RadioGroup
                       selectedValue={this.state.radioValue}
                       name="fruit">
                   <Radio value="apple" >苹果</Radio>
                   <Radio value="orange" >橘子</Radio>
                   <Radio value="lemon" >柠檬</Radio>
               </Radio.RadioGroup>
               </FormItem>
               <FormItem labelName="时间"  method="change" change={this.change}>
                   <DatePicker
                       name="time"
                       format={format}
                       locale={zhCN}
                       defaultValue={moment()}
                       placeholder = {dateInputPlaceholder}
                   />
               </FormItem>
               <FormItem inline={true} labelName="完成" valuePropsName='defaultChecked'   method="change" Change={this.change}>
                   <Checkbox colors="info" name="checkbox"/>
               </FormItem>
               <FormItem inline={true} labelName="启用" valuePropsName='defaultChecked'  method="change" Change={this.change}>
                   <Switch  name="switch"/>
               </FormItem>
               <FormItem  labelName="滑块" method="change" >
                    <Slider defaultValue={20} onChange={this.change} style={{'width':'500px'}} name='slider'/>
               </FormItem>
               <FormItem  labelName="数字" method="change" valuePropsName='value'>
                    <InputNumber name='num' precision={2} min={0} value={this.state.num} onChange={ this.numChange }/>
               </FormItem>
               <FormItem  labelName="评级" method="change" valuePropsName='value'>
                    <Rate name='rate'  value={this.state.rate} onChange={this.rateChange}/>
               </FormItem>
               <FormItem labelName="备注" >
                   <FormControl componentClass='textarea' name="remark" ref='remark' value={this.state.remark} onChange={this.textareaChange}/>
               </FormItem>
           </Form>
        )
    }
}
export default Demo4;