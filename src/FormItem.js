import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InputGroup from 'bee-input-group';
const regs = {
    email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    tel: /^1[3|4|5|7|8]\d{9}$/,
    IDCard: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,//身份证
    chinese: /^[\u4e00-\u9fa5]+?$/,//中文校验
    password: /^[0-9a-zA-Z,.!?`~#$%^&*()-=_+<>'"\[\]\{\}\\\|]{6,15}$/,//6-15位数字
};
const propTypes = {
    clsPrefix:PropTypes.string,
    className:PropTypes.string,
    isRequire:PropTypes.bool,//是否必填
    errorMessage:PropTypes.string,//错误信息
    htmlType:PropTypes.oneOf(['email','tel','IDCard','name','password',null]),//htmlType有值的时候 reg不生效
    reg:PropTypes.instanceOf(RegExp),//校验正则
    method:PropTypes.oneOf(['change','blur',null]),//校验方式
    blur:PropTypes.func,//失去焦点的回调,参数为value
    change:PropTypes.func,//值改变的回调,参数为value
    check:PropTypes.func,//验证的回调
    checkItem:PropTypes.func,
    inline:PropTypes.bool,//formItem是否行内
    labelName:PropTypes.string,//label标签文字
    inputBefore:PropTypes.element,//input之前的
    inputAfter:PropTypes.element,//input之后的
    mesClassName:PropTypes.string//提示信息样式名
};
const defaultProps = {
    clsPrefix:'u-form',
    isRequire:false,//是否必填
    errorMessage:'校验失败',//错误信息
    reg:/[/w/W]*/,
    method:'change',
    blur:()=>{},
    change:()=>{},
    isFormItem:true,
    check:()=>{},
    checkItem:()=>{},
    inline:false,
    labelName:'',
    inputBefore:'',
    inputAfter:'',
    mesClassName:''
};
class FormItem extends Component {
    constructor(props){
        super(props);
        this.state={
            hasError:false,
            value:''
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.checkNow&&(!this.props.checkNow)){
            this.checkSelf();
        }
    }
    handleBlur=()=>{
        let value=ReactDOM.findDOMNode(this.input).value;
        let name=ReactDOM.findDOMNode(this.input).name;
        let flag=this.itemCheck(value,name);
        if(this.props.method==='blur') {
            this.setState({
                hasError: !flag
            });
            this.props.checkItem(
                {
                    "name": name,
                    "verify": flag,
                    "value":value
                }
            );
        }
        this.props.blur(value);
    }
    handleChange=(selectV)=>{
        let value=selectV||ReactDOM.findDOMNode(this.input).value||this.input.props.defaultValue;
        let name=ReactDOM.findDOMNode(this.input).name||this.input.props.name;
        this.setState({
            value:value
        });
        let flag=this.itemCheck(value,name);
        if(this.props.method==='change') {
            this.setState({
                hasError: !flag
            });
            this.props.checkItem(
                {
                    "name": name,
                    "verify": flag,
                    "value":value
                }
            );
        }
        this.props.change(value);
    }
    /**
     * 校验方法
     * @param value
     * @returns {boolean}
     */
    itemCheck=(value,name)=>{
        let {isRequire,htmlType}=this.props;
        let reg=htmlType?regs[htmlType]:this.props.reg;
        let flag=reg.test(value);
        let obj={
            "name":name,
            "verify":flag,
            "value":value
        };
        if(isRequire){
            if(value){
                this.props.check(flag,obj);
                return flag;
            }else{
                this.props.check(false,obj);
                return false;
            }
        }else{
            this.props.check(true,obj);
            return true;
        }
    }
    /**
     * 触发校验
     */
    checkSelf=()=>{
        let value=ReactDOM.findDOMNode(this.input).value||this.state.value||this.input.domValue||this.input.props.defaultValue;
        let name=ReactDOM.findDOMNode(this.input).name||this.input.props.name;
        let flag=this.itemCheck(value,name);
        this.props.checkItem(
            {
                "name": name,
                "verify": flag,
                "value":value
            },true
        );
        this.setState({
            hasError:!flag
        })
    }
    render() {
        const {children,inline,errorMessage,className,clsPrefix,inputBefore,inputAfter,mesClassName}=this.props;
        let clsObj={};
        clsObj[`${clsPrefix}-item`]=true;
        className?clsObj[className]=true:'';
        let clsErrObj={};
        clsErrObj[`${clsPrefix}-error`]=true;
        if(inline){
            clsObj[`${clsPrefix}-inline`]=true;
            clsErrObj[`${clsPrefix}-error-inline`]=true;
        }
        mesClassName?clsErrObj[mesClassName]=true:'';
        if(this.state.hasError)clsErrObj['show']=true;
        let childs=[];
        React.Children.map(this.props.children,(child,index)=>{
            if(child.props.type==='text'){
                childs.push(
                    <InputGroup key={index}>
                        {inputBefore?<InputGroup.Addon>{inputBefore}</InputGroup.Addon>:''}
                        {
                            React.cloneElement(children, {
                                onBlur: this.handleBlur,
                                onChange: this.handleChange,
                                ref: (e) => {
                                    this.input = e
                                }
                            })
                        }
                        {inputAfter?<InputGroup.Addon>{inputAfter}</InputGroup.Addon>:''}
                    </InputGroup>
                )
            }else{
                childs.push(
                    React.cloneElement(children, {
                        key:{index},
                        onBlur: this.handleBlur,
                        onChange: this.handleChange,
                        ref: (e) => {
                            this.input = e
                        }
                    })
                );
            }
        });


        return (
            <div className={classnames(clsObj)}>
                {childs}
                <div className={classnames(clsErrObj)}>
                    {errorMessage}
                </div>
            </div> )
    }
};
FormItem.propTypes = propTypes;
FormItem.defaultProps = defaultProps;
export default FormItem;