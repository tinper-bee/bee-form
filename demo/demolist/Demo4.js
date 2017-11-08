/**
 *
 * @title 表单校验
 * @description input和select
 */
import React ,{Component } from 'react';
import Form from '../../src/Form';
import FormControl from 'bee-form-control';
import Select from 'bee-select';
import Radio from 'bee-radio'
import DatePicker from 'bee-datepicker';
import zhCN from 'rc-calendar/lib/locale/zh_CN';
import moment from 'moment';
import Checkbox from 'bee-checkbox';
import Switch from 'bee-switch';
const FormItem=Form.FormItem;
const Option = Select.Option;
const format = 'YYYY-MM-DD HH:mm:ss';
const dateInputPlaceholder = '选择日期';
class Demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: 'apple'
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
    timeChange=v=>{
        console.log(v);
    }
    textareaChange=v=>{
        console.log(v);
    }
    checkboxChange=v=>{
        console.log(v);
    }
    switchChange=v=>{
        console.log(v);
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
               <FormItem inline={true} labelName="喜好"  methon="change" change={this.radioChange}>
                   <Radio.RadioGroup
                       selectedValue={this.state.radioValue}
                       name="fruit">
                   <Radio value="apple" >苹果</Radio>
                   <Radio value="orange" >橘子</Radio>
                   <Radio value="watermelon" >柠檬</Radio>
               </Radio.RadioGroup>
               </FormItem>
               <FormItem labelName="时间"  methon="change" change={this.timeChange}>
                   <DatePicker
                       name="time"
                       format={format}
                       locale={zhCN}
                       value={moment()}
                       placeholder = {dateInputPlaceholder}
                   />
               </FormItem>
               <FormItem inline={true} labelName="完成"   methon="change" change={this.checkboxChange}>
                   <Checkbox colors="info" name="checkbox"/>
               </FormItem>
               <FormItem inline={true} labelName="启用"   methon="change" change={this.switchChange}>
                   <Switch  name="switch"/>
               </FormItem>
               <FormItem labelName="备注"   methon="change" change={this.textareaChange}>
                   <textarea name="textarea" />
               </FormItem>
           </Form>


        )
    }
}
export default Demo4;