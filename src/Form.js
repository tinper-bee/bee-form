import classNames from 'classnames';
<<<<<<< HEAD
import React, { Component } from 'react';
import FormGroup from 'bee-form-group';
import { Row, Col } from 'bee-layout';
import Button from 'bee-button';
import Radio from 'bee-radio';
import Select from 'bee-select';
import Checkbox from 'bee-checkbox';
import Icon from 'bee-icon';
import PropTypes from 'prop-types';
import DatePicker from 'bee-datepicker';
import CitySelect from 'bee-city-select';
=======
import React , {  Component }  from 'react';
import PropTypes from 'prop-types';

>>>>>>> 24e2a0579b465b5c4f8961bfc274c915220aaef1
const propTypes = {
  horizontal: PropTypes.bool,
  inline: PropTypes.bool,
  componentClass: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
};
const ALLREG = {
  emailReg: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  telReg: /^1[3|4|5|7|8]\d{9}$/,
  IDReg: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/,
  nameReg: /^[\u4e00-\u9fa5]{2,4}$/,
  nickNameReg: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
  flagReg: /^([\u4e00-\u9fa5]|[a-zA-Z])+$/,
  passReg: /^[0-9a-zA-Z,.!?`~#$%^&*()-=_+<>'"\[\]\{\}\\\|]{6,15}$/,
  codeReg: /^\d{4}/,
  emailCodeReg: /^\d{6}$/,
  birthdayReg: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,
  cityInfoReg: /^\w\W$/,
  sexReg: /^orange||apple$/,
};
const defaultProps = {
  horizontal: false,
  inline: false,
  componentClass: 'form',
  clsPrefix: 'u-form'
};
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // 点击提交
  handleSubmit = (e) => {
    console.log(this.props)
  }
  render() {
    const {
      horizontal,
      inline,
      componentClass: Component,
      className,
      clsPrefix,
      type,
      ...others
    } = this.props;

    const classes = {};

    if (inline) {
      classes[`${clsPrefix}-inline`] = true;
    }
    if (horizontal) {
      classes[`${clsPrefix}-horizontal`] = true;
    }
    let classnames = classNames(classes, clsPrefix);
    return (
      <Component
        {...others}
        className={classNames(className, classnames)}
      />
    );
  }

}
class FormItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      iserror: '',
      isnull: '',
      isallerror: {},
      tagValue: '',
      isshowpass: 'show',
    })
  }
  // 正则判断
  regTest = (tag, value) => {
    console.log(tag,value);
    let data = tag.props,
      type = data.regtype,
      val = value.trim(),
      reg = '',
      tips = '',
      keyval = {},
      must = data.must;
    switch (type) {
      case 'phone':
        reg = 'telReg';
        tips = '手机号';
        break;
      case 'pass':
        reg = 'passReg';
        tips = '密码';
        break;
      case 'confirmpass':
        reg = 'passReg';
        tips = '密码';
        break;
      case 'email':
        reg = 'emailReg'
        tips = "邮箱";
        break;
      case 'code':
        reg = 'codeReg';
        tips = '验证码'
        break;
      case 'name':
        reg = 'nameReg';
        tips = '姓名'
        break;
      case 'birthday':
        reg = 'birthdayReg';
        tips = '生日'
        break;
      case 'sex':
        reg = 'sexReg';
        tips = '性别'
        break;
      case 'milecode':
        reg = 'emailCodeReg';
        tips = '邮编'
        break;
      case 'nickname':
        reg = 'nickNameReg';
        tips = '昵称';
        break;
    }
    keyval[reg] = val;
    if (!must) {
      return (keyval);
    }
    if (ALLREG[reg].test(val)) {
      this.setState({
        iserror: ''
      })
    } else if (val === '') {
      this.setState({
        iserror: tips + '不能为空'
      }, () => {
        return false;
      })
    } else {
      this.setState({
        iserror: tips + '输入错误'
      }, () => {
        return false;
      })
    }
    return (keyval);
  }
  // 输入框变化
  handleChange = (e, type) => {
    type ? type : '';
    switch (type) {
      case 'sex':
        break;
      default:
        let val = (e.target.value);
        this.setState({
          tagValue: val
        })
    }

  }
  // 输入框获取焦点
  handleFocus = (e) => {
    this.setState({
      iserror: '',
      isnull: ''
    })
  }
  // 输入框失去焦点
  handleBlur = (e) => {
    let val = (e.target.value);
    this.regTest(this, val);
  }
  // 性别切换
  sexChange = (e) => {
    this.setState({ tagValue: e });
  }
  // 显示密码
  showPassWord = (e) => {
    let tag = e.target,
      password = tag.parentNode.firstChild,
      type = this.state.isshowpass;
    if (type == 'hide') {
      this.setState({
        isshowpass: 'show'
      })
      password.setAttribute('type', 'password');
    } else {
      this.setState({
        isshowpass: 'hide'
      })
      password.setAttribute('type', 'text');
    }

  }
  // 获取生日
  handleGetDate=(e)=>{
    console.log(e);
  }
  // 判断显示元素
  renderDom = (type) => {
    let data = this.props,
      classname = data.classname ? data.classname : 'b-f',
      texttype = data.type ? data.type : 'text';
    switch (type) {
      case 'birthday':
        return (<DatePicker
          className={'u-form-input ' + classname}
          format={"YYYY-MM-DD"}
          placeholder={'选择日期时间'}
          onChange={this.handleGetDate} />)
        break;
      case 'sex':
        return (<div className="u-form-sex">
          <Radio.RadioGroup
            name="fruit"
            selectedValue={this.state.tagValue}
            onChange={this.sexChange.bind(this)}
            value={this.state.tagValue}>
            <Radio value="apple" >男</Radio>
            <Radio value="orange" >女</Radio>
          </Radio.RadioGroup>
        </div>)
        break;
      case 'city':
        return (<div>
          <CitySelect className="u-form-city" />
          <input className={'u-form-input u-form-info ' + classname} placeholder={data.placeholder} type="text" />
        </div>);
        break;
      default:
        let show = this.state.isshowpass;
        return (<div className="u-form-pass"><input className={'u-form-input ' + classname}
          type={texttype}
          placeholder={data.placeholder}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onFocus={this.handleFocus}
          value={this.state.tagValue} />
          {texttype == 'password' ?
            show == 'show' ?
              <Icon className="u-form-show" type="uf-eye" onClick={this.showPassWord} /> :
              <Icon className="u-form-show" type="uf-eye-o" onClick={this.showPassWord} />
            : ""}
        </div>)
    }
  }
  render() {
    let data = this.props,
      istype = data.regtype,
      dom = this.renderDom(istype);
    return (
      <div >
        <div className="u-form-input-parent">
          <span className="u-form-name">{data.title ? data.title : ''}</span>
          {dom}
          {this.state.iserror ? <div className="u-form-error shake animated">{this.state.iserror}</div> : ''}
          <i className="u-form-oh"></i>
        </div>
      </div>
    )
  }
}
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
Form.FormItem = FormItem;

export default Form;
