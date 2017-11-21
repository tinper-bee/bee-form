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
        console.log('check');
        console.log(flag);
        console.log(obj);
    }
    
    render() {
        
        return (
            <div className="demo3">
                    <FormItem showMast={true} check={this.checkForm} 
                      labelName="邮箱:" isRequire={true} method="blur" 
                      inline={true} errorMessage={['错误1','错误2']}  
                      reg={[/^\d+$/,/[\d\D]{3}/]}>
                        <FormControl name="email"  placeholder="请输入邮箱" />
                    </FormItem>
            </div>
        )
    }
}
export default Demo3;