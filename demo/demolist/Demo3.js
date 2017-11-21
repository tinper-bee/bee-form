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
                    <FormItem showMast={true}  labelName="用户名:" isRequire={true}  errorMessage="请输入用户名" method="blur"  inline={true}>
                        <FormControl name="username"  placeholder="请输入用户名"/>
                    </FormItem>
                    <FormItem showMast={true}  labelName="密码:" isRequire={true} method="blur" errorMessage="请输入密码"   inline={true}>
                        <FormControl name="password1" type="password" placeholder="请输入密码" />
                    </FormItem>
                    <FormItem showMast={true}  labelName="再次输入密码:" isRequire={true} method="blur" errorMessage="请再次输入密码"  inline={true}>
                        <FormControl name="password2" type="password" placeholder="请再次输入密码" />
                    </FormItem>
                    <FormItem showMast={true}  showMast={true}   labelName="邮箱:" isRequire={true} method="blur" htmlType="email" errorMessage="邮箱格式错误"  inline={true}>
                        <FormControl name="email"  placeholder="请输入邮箱" />
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Demo3;