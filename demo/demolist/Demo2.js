/**
 *
 * @title 基本form校验
 * @description 登录示例
 */
import React, {Component} from 'react';
import Form from '../../src/Form';
const FormItem = Form.FormItem;
import FormControl from 'bee-form-control';
import Button from 'bee-button';

class Demo2 extends Component {
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
            <div className="demo2">
                <Form showSubmit={false} submitCallBack={this.checkForm} afterSubmitBtn={cancel()}>
                    <FormItem showMast={true}  labelName="用户名:" isRequire={true}  errorMessage="请输入用户名" method="blur"  inline={true}>
                        <FormControl name="username"  placeholder="请输入用户名" value=""/>
                    </FormItem>
                    <FormItem showMast={true}  labelName="密码:" isRequire={true} method="blur" errorMessage="请输入密码"   inline={true}>
                        <FormControl name="password" type="password" placeholder="请输入密码" />
                    </FormItem>
                    <Button  colors="primary" isSubmit={true}>提交</Button>
                </Form>
            </div>
        )
    }
}
export default Demo2;