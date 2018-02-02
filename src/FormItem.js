import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import InputGroup from 'bee-input-group';
import Label from 'bee-label';
import isEqual from 'lodash.isequal';
const regs = {
    email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    tel: /^1\d{10}$/,
    IDCard: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,//身份证
    chinese: /^[\u4e00-\u9fa5]+?$/,//中文校验
    password: /^[0-9a-zA-Z,.!?`~#$%^&*()-=_+<>'"\[\]\{\}\\\|]{6,15}$/,//6-15位数字英文符号
    number:/^\d*$/
};
const propTypes = {
    clsPrefix: PropTypes.string,
    className: PropTypes.string,
    isRequire: PropTypes.bool,//是否必填
    errorMessage: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.array
    ]),//错误信息
    htmlType: PropTypes.oneOf(['email', 'tel', 'IDCard', 'chinese', 'password', null]),//htmlType有值的时候 reg不生效
    reg: PropTypes.oneOfType([
        PropTypes.instanceOf(RegExp),
        PropTypes.array
    ]),//校验正则,可传字符串或者数组，如果是数组，需要和errorMessage数组一一对应
    method: PropTypes.oneOf(['change', 'blur', null]),//校验方式
    blur: PropTypes.func,//失去焦点的回调,参数为value
    change: PropTypes.func,//值改变的回调,参数为value当地售后地址
    check: PropTypes.func,//验证的回调
    checkItem: PropTypes.func,
    useRow: PropTypes.bool,
    inline: PropTypes.bool,//formItem是否行内
    labelName: PropTypes.node,//label标签文字或dom
    labelClassName: PropTypes.string,//label样式名
    inputBefore: PropTypes.node,//input之前的
    inputAfter: PropTypes.node,//input之后的
    // inputBeforeSimple:PropTypes.node,//input之前的(参考输入框组的inputGroup.Button，和inputBefore不能同时使用)
    // inputAfterSimple:PropTypes.node,//input之后的(参考输入框组的inputGroup.Button，和inputAfter不能同时使用)
    mesClassName: PropTypes.string,//提示信息样式名
    checkInitialValue: PropTypes.bool,//是否校验初始值，未开放 ...col.propTypes
    showMast: PropTypes.bool,//是否显示必填项的 *
    asyncCheck: PropTypes.func,//自定义校验，返回true则校验成功，false或无返回值则校验失败。参数为{name:xxx,value:xxx}

    valuePropsName: PropTypes.string,//默认值的props属性key。默认为'defaultValue'
    // valuePropsName: PropTypes.string,//当前值的props属性key。默认为'value'

    xs: PropTypes.number,//xs显示列数
    sm: PropTypes.number,//sm显示列数
    md: PropTypes.number,//md显示列数
    lg: PropTypes.number,//lg显示列数
    xsOffset: PropTypes.number,//xs偏移列数
    smOffset: PropTypes.number,//sm偏移列数
    mdOffset: PropTypes.number,//md偏移列数
    lgOffset: PropTypes.number,//lg偏移列数
    xsPush: PropTypes.number,//xs右偏移列数
    smPush: PropTypes.number,//sm右偏移列数
    mdPush: PropTypes.number,//md右偏移列数
    lgPush: PropTypes.number,//lg右偏移列数
    xsPull: PropTypes.number,//xs左偏移列数
    smPull: PropTypes.number,//sm左偏移列数`
    mdPull: PropTypes.number,//md左偏移列数
    lgPull: PropTypes.number,//lg左偏移列数
    labelXs: PropTypes.number,
    labelSm: PropTypes.number,
    labelMd: PropTypes.number,
    labelLg: PropTypes.number,
    labelXsOffset: PropTypes.number,
    labelSmOffset: PropTypes.number,
    labelMdOffset: PropTypes.number,
    labelLgOffset: PropTypes.number,
    labelXsPush: PropTypes.number,
    labelSmPush: PropTypes.number,
    labelMdPush: PropTypes.number,
    labelLgPush: PropTypes.number,
    labelXsPull: PropTypes.number,
    labelSmPull: PropTypes.number,
    labelMdPull: PropTypes.number,
    labelLgPull: PropTypes.number,
};
const defaultProps = {
    clsPrefix: 'u-form',
    isRequire: false,//是否必填
    errorMessage: '校验失败',//错误信息
    reg: /[/w/W]*/,
    method: 'change',
    blur: () => { },
    change: () => { },
    isFormItem: true,
    check: () => { },
    checkItem: () => { },
    inline: false,
    labelName: '',
    labelClassName: '',
    inputBefore: '',
    inputAfter: '',
    // inputBeforeSimple:'',
    // inputAfterSimple:'',
    mesClassName: '',
    checkInitialValue: false,
    useRow: false,
    showMast: false,
    valuePropsName: 'defaultValue',
};
class FormItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            width: 0,
            valueNow:props.children.props[props.valuePropsName],
            maxWidth: '100%',
            errorMessage: typeof props.errorMessage == 'string' ? props.errorMessage : props.errorMessage[0],
            childrenWidth:'100%'
        }
    }
     getNowValueName=(item)=> {
        return {
            value: this.state.valueNow,
            name: item.props.name//item.localName 例如textarea原生元素
        }
    }
    getWidth=(key)=>{
        return ReactDOM.findDOMNode(this.refs[key]) ? (ReactDOM.findDOMNode(this.refs[key]).clientWidth || ReactDOM.findDOMNode(this.refs[key]).offsetWidth) : 0;
    }
    shouldComponentUpdate(nextProps,nextState){
        if(isEqual(this.props,nextProps)&&isEqual(this.state,nextState)){
            return false;
        }else{
            return true;
        }
    }
    componentWillReceiveProps(nextProps) {
        let thisValue=this.props.children.props[this.props.valuePropsName];
        let nextValue=nextProps.children.props[this.props.valuePropsName];
        if(!isEqual(thisValue,nextValue)){
            this.checkSelf(nextValue,true);
            this.setState({
                valueNow:nextValue
            })
        }
        if (nextProps.checkNow && (!this.props.checkNow)) {
            this.checkSelf();
        }
    }
    setWidth=()=>{
        let outerWidth = this.getWidth('outer');
        let width = this.getWidth('label');
        let maxWidth=outerWidth ? outerWidth - width - 10 : '100%';
        if (this.props.inline) {
            this.setState({
                width,
                maxWidth
            })
        }
        let before=this.getWidth('before');
        let after=this.getWidth('after');
        this.setState({
            childrenWidth:maxWidth-before-after-2
        })

    }
    componentDidMount() {
        this.setWidth();
        window.addEventListener('resize',this.setWidth);
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.setWidth);
    }
    handleBlur = () => {
        let { value, name } = this.getNowValueName(this.props.children);
        if (this.props.method === 'blur') {
            let flag = this.itemCheck(value, name);
            this.setState({
                hasError: !flag
            });
            this.props.checkItem(
                {
                    "verify": flag,
                    "name": name,
                    "value": value
                }
            );
        }
        this.props.blur(value);
        this.props.children.props.onBlur && this.props.children.props.onBlur(value);
    }
    handleChange = (selectV) => {
        let value = selectV;
        this.setState({
            valueNow:selectV
        })
        let name = this.getNowValueName(this.props.children).name;
        if (this.props.method === 'change') {
            let flag = this.itemCheck(value, name);
            this.setState({
                hasError: !flag,
                value
            });
            this.props.checkItem(
                {
                    "verify": flag,
                    "name": name,
                    "value": value
                }
            );
        }
        this.props.change(value);
        this.props.children.props.onChange && this.props.children.props.onChange(value);
    }
    /**
     * 校验方法
     * @param value
     * @returns {boolean}
     */
    itemCheck = (value, name) => {
        let { isRequire, htmlType, check, asyncCheck, errorMessage } = this.props;
        let reg = htmlType ? regs[htmlType] : this.props.reg;
        let obj = {
            "name": name,
            "value": value === undefined ? '' : value
        };
        if (typeof asyncCheck == 'function') {
            let flag = !!asyncCheck(obj);
            obj.verify = flag;
            check(flag, obj);
            return flag;
        } else {
            if (reg.length) {
                let flag = true;
                for (let i = 0; i < reg.length; i++) {
                    if (!reg[i].test(value)) {
                        this.setState({
                            errorMessage: errorMessage[i]
                        });
                        flag = false;
                        break;
                    }
                }
                obj.verify = flag;
                if (isRequire) {
                    if ((value != undefined) && (value !== '')) {
                        check(flag, obj);
                        return flag;
                    } else {
                        check(false, obj);
                        return false;
                    }
                } else {
                    if ((value != undefined) && (value !== '')) {
                        check(flag, obj);
                        return flag;
                    } else {
                        check(true, obj);
                        return true;
                    }
                }
            } else {
                let flag = reg.test(value);
                obj.verify = flag;
                if (isRequire) {
                    if ((value != undefined) && (value !== '')) {
                        check(flag, obj);
                        return flag;
                    } else {
                        check(false, obj);
                        return false;
                    }
                } else {
                    if ((value != undefined) && (value !== '')) {
                        check(flag, obj);
                        return flag;
                    } else {
                        check(true, obj);
                        return true;
                    }
                }
            }

        }
    }
    /**
     * 触发校验
     */
    checkSelf = (v,checkFlag) => {
        let value = v==undefined?this.getNowValueName(this.props.children).value:v;
        let name = this.getNowValueName(this.props.children).name;
        let flag = this.itemCheck(value, name);
        this.props.checkItem(
            {
                "verify": flag,
                "name": name,
                "value": value
            },checkFlag?false:true
        );
        this.setState({
            hasError: !flag
        })
    }
    render() {
        const { showMast, useRow, children, inline, className, clsPrefix, inputBefore, inputAfter, mesClassName, labelName, labelClassName } = this.props;
        let clsObj = {};
        clsObj[`${clsPrefix}-item`] = true;
        className ? clsObj[className] = true : '';
        let clsErrObj = {};
        clsErrObj[`${clsPrefix}-error`] = true;
        if (inline) {
            clsObj[`${clsPrefix}-inline`] = true;
            clsErrObj[`${clsPrefix}-error-inline`] = true;
        }
        mesClassName ? clsErrObj[mesClassName] = true : '';
        if (this.state.hasError) clsErrObj['show'] = true;
        let childs = [];
        let childrenStyles=this.props.children.props.style?this.props.children.props.style:{};
        let appendObj={
            onBlur: this.handleBlur,
            onChange: this.handleChange,
        }
        if(this.props.children.props.clsPrefix&&(this.props.children.props.clsPrefix.indexOf('u-form-control')!=-1)){
            appendObj.style={'width':this.state.childrenWidth,...childrenStyles}
        }
        React.Children.map(this.props.children, (child, index) => {
            childs.push(
                <div ref="outer" key={index}>
                    {
                        useRow ? '' : <Label ref="label" className={labelClassName ? labelClassName : ''} >
                            {showMast ? (<span className="u-mast">*</span>) : ''}
                            {labelName}
                        </Label>
                    }
                    <span className="u-input-group-outer" style={{ 'maxWidth': this.state.maxWidth }}>
                        <InputGroup key={index} >
                            {inputBefore?(<span className='u-input-before' ref='before'>{inputBefore}</span>):''}
                            <span className='u-input-inner'>
                            {
                                React.cloneElement(children, appendObj)
                            }
                            </span>
                            {inputAfter?(<span className='u-input-after' ref='after'>{inputAfter}</span>):''}
                        </InputGroup>
                    </span>
                </div>
            )
        });
        return (
            <div className={classnames(clsObj)}>
                {childs}
                <div className={classnames(clsErrObj)} style={{ 'marginLeft': this.state.width }}>
                    {this.state.errorMessage}
                </div>
            </div>)
    }
};
FormItem.propTypes = propTypes;
FormItem.defaultProps = defaultProps;
export default FormItem;