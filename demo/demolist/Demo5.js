/**
 *
 * @title 表单校验
 * @description 使用栅格布局，配置 Form：userRow={true}  FormItem 格子数，参照栅格布局
 */
import React ,{Component } from 'react';
import Form from '../../src';
const FormItem=Form.FormItem;
import FormControl from 'bee-form-control';
import Button from 'bee-button';
class Demo5 extends Component {
    constructor(props){
        super(props);
        this.state={
            checkFormNow:false
        }
    }
    checkForm = (flag,obj,num) => {
        console.log('第'+num+'个');
        console.log(flag);
        console.log(obj);
    }
    handClick=()=>{
        this.setState({
            checkFormNow:true
        });
    }
    render() {
        return (
            <div className="demo5">
                <Form useRow={true} showSubmit={false} submitCallBack={(flag,obj)=>this.checkForm(flag,obj,1)} checkFormNow={this.state.checkFormNow}>
                    <FormItem showMast={true}  inline={true} labelMd={2} md={4} labelName="姓名"  isRequire={true} htmlType="chinese" errorMessage="姓名格式错误" method="blur"  >
                        <FormControl  name="name" placeholder="只能输入中文"  />
                    </FormItem>
                    <FormItem showMast={true}  inline={true} labelMd={2} md={4} labelName="年龄" isRequire={true} method="blur" errorMessage="年龄格式错误" reg={/^[0-9]+$/}  >
                        <FormControl  name="age" />
                    </FormItem>
                </Form>

                <Form useRow={true} showSubmit={false} submitCallBack={(flag,obj)=>this.checkForm(flag,obj,2)} checkFormNow={this.state.checkFormNow}>
                    <FormItem showMast={true}  inline={true} labelMd={2} md={4} labelName="姓名"  isRequire={true} htmlType="chinese" errorMessage="姓名格式错误" method="blur"  >
                        <FormControl  name="name" placeholder="只能输入中文"  />
                    </FormItem>
                    <FormItem showMast={true}  inline={true} labelMd={2} md={4} labelName="年龄" isRequire={true} method="blur" errorMessage="年龄格式错误" reg={/^[0-9]+$/}  >
                        <FormControl  name="age" />
                    </FormItem>
                </Form>
                <Button colors="primary" onClick={this.handClick}>主动校验form</Button>
            </div>

        )
    }
}
export default Demo5;