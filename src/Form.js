import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from 'bee-button';
import FormGroup from 'bee-form-group';
import Label from 'bee-label';
const propTypes = {
    clsPrefix:PropTypes.string,
    className:PropTypes.string,
    submitCallBack:PropTypes.func,//form验证的回调
    submitAreaClassName:PropTypes.string,//提交区域className
    submitBtnClassName:PropTypes.string,//提交按钮className
    beforeSubmitBtn:PropTypes.element,//提交按钮之前的dom
    afterSubmitBtn:PropTypes.element,//提交按钮之后的dom
};
const defaultProps = {
    clsPrefix:'u-form',
    className:'',
    submitCallBack:()=>{},//form验证失败的回调
    submitAreaClassName:'',
    submitBtnClassName:'',
    beforeSubmitBtn:'',
    afterSubmitBtn:'',
};
class Form extends Component {
    constructor(props){
        super(props);
        this.state= {
            items: [],//验证结果对象
            checkNow:false//是否立刻验证，提交按钮
        }
    }
    componentDidMount(){
        this.getFormItems();
    }
    checkItem=(obj,flag)=>{
        let items=this.state.items;
        items.forEach(item=>{
            if(item.name===obj.name){
                item.verify=obj.verify;
                item.value=obj.value||'';
            }
        });
        this.setState({
            items:items
        });
        if(flag&&(items[items.length-1]&&items[items.length-1].name===obj.name)){
            this.submit(items);
        }
    }
    getFormItems=()=>{
        let items=[];
        if(this.props.children.length){
            this.props.children.map(item=>{
                if(item.props.isFormItem){
                    items.push({
                        'name':item.props.children.props.name,
                        'verify':true,
                        'value':''
                    });
                }
            })
        }else{
            let item=this.props.children;
            if(item.props.isFormItem){
                items.push({
                    'name':item.props.children.props.name,
                    'verify':true,
                    'value':''
                });
            }
        }
        this.setState({
            items:items
        });
    }
    checkNow=()=>{
        this.setState({
            checkNow:true
        });
    }
    submit=(items)=>{
        let flag=true;
        items.forEach(item=>{
            if(!item.verify){
                flag=false;
            }
        });
        this.setState({
            checkNow:false
        });
        this.props.submitCallBack(flag,this.state.items);
    }

    render() {
        const {className,submitAreaClassName,submitBtnClassName,beforeSubmitBtn,afterSubmitBtn,clsPrefix}=this.props;
        let childs=[];
        React.Children.map(this.props.children,(child,index)=>{
            if(child.props.isFormItem){
                childs.push(<FormGroup key={index}>
                    <Label>{child.props.labelName}</Label>
                    {
                        React.cloneElement(child,
                            {
                                checkItem:this.checkItem,
                                checkNow:this.state.checkNow
                            })
                    }
                </FormGroup>);

            }else{
                childs.push(React.cloneElement(child));
            }
        })
        return (
            <form className={`${clsPrefix} ${className}`} onSubmit={this.checkNow}>
                {childs}
                <div className={`${clsPrefix}-submit ${submitAreaClassName}`}>
                    {beforeSubmitBtn}
                    <Button onClick={this.checkNow} colors="primary" className={`${clsPrefix}-submit-btn ${submitBtnClassName}`}>提交</Button>
                    {afterSubmitBtn}
                </div>
            </form>
        )
    }
}
;
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
export default Form;