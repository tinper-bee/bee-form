/**
 *
 * @title 表单校验
 * @description 用户信息录入实例
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
import CitySelect from 'bee-city-select';
const FormItem=Form.FormItem;
const Option = Select.Option;
const format = 'YYYY-MM-DD HH:mm:ss';
const dateInputPlaceholder = '选择日期';
class Demo4 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sex:'man',
            rate:0
        };
    }
    sexChange=sex=>{
        this.setState({
            sex
        })
    }
    rateChange=rate=>{
        this.setState({
            rate
        })
    }
    checkForm = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }
    render() {
        return (
           <Form submitCallBack={this.checkForm} className='demo4'>
               <FormItem showMast={true}  labelName="姓名:" isRequire={true} valuePropsName='value' htmlType='chinese' errorMessage="请输入姓名" method="blur"  inline={true}>
                    <FormControl name="name"  placeholder="请输入姓名"/>
                </FormItem>
                <FormItem showMast={true} labelName="身份证号:" isRequire={true} valuePropsName='value' htmlType='IDCard' errorMessage="请输入身份证号" method="blur"  inline={true}>
                    <FormControl name="idCard"  placeholder="请输入身份证号"/>
                </FormItem>
                <FormItem showMast={true} labelName="年龄:" isRequire={true} htmlType='number' valuePropsName='value' errorMessage="年龄格式错误" method="blur"  inline={true}>
                    <FormControl name="age"  placeholder="请输入年龄"/>
                </FormItem>
                <FormItem showMast={true} labelName="性别:" isRequire={true} method="change" inline={true}>
                <Radio.RadioGroup
                    selectedValue={this.state.sex} onChange={this.sexChange}
                    name="sex">
                    <Radio value="man" >男</Radio>
                    <Radio value="woman" >女</Radio>
                </Radio.RadioGroup>
               </FormItem>
               <FormItem showMast={true} labelName="出生日期:" isRequire={true} method="change"  inline={true}>
                   <DatePicker
                       name="time"
                       format={format}
                       locale={zhCN}
                       placeholder = {dateInputPlaceholder}
                   />
               </FormItem>
               <FormItem showMast={true} labelName="籍贯:"  method="change" isRequire={true} inline={true}>
                   <CitySelect name='origin'/>
               </FormItem>
               <FormItem  labelName="保密等级:"  method="change"  inline={true}>
                    <Rate name='rate'  value={this.state.rate} onChange={this.rateChange}/>
               </FormItem>
               <FormItem labelName="备注:" inline={true} >
                   <FormControl componentClass='textarea' name="remark" />
               </FormItem>
           </Form>
        )
    }
}
export default Demo4;