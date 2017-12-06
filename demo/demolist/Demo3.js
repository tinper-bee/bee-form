/**
 *
 * @title 基本form校验
 * @description 注册示例
 */
import React, {Component} from 'react';
import Form from '../../src/Form';
const FormItem = Form.FormItem;
import FormControl from 'bee-form-control';
import Button from 'bee-button';
import InputNumber from 'bee-input-number';
import Checkbox from 'bee-checkbox';

class Demo3 extends Component {
    checkForm = (flag,obj) => {
        console.log(flag);
        console.log(obj);
    }
    render() {
        let cancel=()=>{
            return (
                <Button shape="border" className="cancel">取消</Button>
            )
        }
        return (
            <div className="demo3">
                <Form submitCallBack={this.checkForm} afterSubmitBtn={cancel()}>
                    <FormItem showMast={true}  labelName="用户名:" isRequire={true} valuePropsName='value' errorMessage="请输入用户名" method="blur"  inline={true}>
                        <FormControl name="username"  placeholder="请输入用户名"/>
                    </FormItem>
                    <FormItem showMast={true}  labelName="密码:" isRequire={true} valuePropsName='value' method="blur" errorMessage="请输入密码"   inline={true}>
                        <FormControl name="password1" type="password" placeholder="请输入密码" />
                    </FormItem>
                    <FormItem showMast={true}  labelName="再次输入密码:" valuePropsName='value' isRequire={true} method="blur" errorMessage="请再次输入密码"  inline={true}>
                        <FormControl name="password2" type="password" placeholder="请再次输入密码" />
                    </FormItem>
                    <FormItem showMast={true} valuePropsName='value'  labelName="邮箱:" isRequire={true} method="blur" htmlType="email" errorMessage="邮箱格式错误"  inline={true}>
                        <FormControl name="email"  placeholder="请输入邮箱" />
                    </FormItem>
                    <FormItem inputBefore="+86" showMast={true}  valuePropsName='value'  labelName="手机号:" isRequire={true} method="blur" htmlType="tel" errorMessage="手机号格式错误"  inline={true}>
                        <FormControl name="phone"  placeholder="请输入手机号" />
                    </FormItem>
                    <FormItem inputAfter={<Button shape="border">获取验证码</Button>} showMast={true} valuePropsName='value'  labelName="验证码:" isRequire={true} method="blur"  errorMessage="请输入验证码"  inline={true}>
                        <FormControl name="verification"  placeholder="请输入验证码" />
                    </FormItem>
                    <FormItem  inputAfter='我已经阅读并同意相关条款' valuePropsName='defaultChecked'  labelName=""  inline={true}>
                        <Checkbox colors="info" name="agree"/>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Demo3;