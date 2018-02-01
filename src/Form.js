import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'bee-button';
import { Con, Row, Col } from 'bee-layout';
import Label from 'bee-label';
const propTypes = {
    clsPrefix: PropTypes.string,
    className: PropTypes.string,
    submitCallBack: PropTypes.func,//form验证的回调
    submitAreaClassName: PropTypes.string,//提交区域className
    submitBtnClassName: PropTypes.string,//提交按钮className
    beforeSubmitBtn: PropTypes.node,//提交按钮之前的dom
    afterSubmitBtn: PropTypes.node,//提交按钮之后的dom
    useRow: PropTypes.bool,//是否使用栅格布局
    checkFormNow: PropTypes.bool,//现在就校验（主动校验参数）
    showSubmit: PropTypes.bool,//是否显示提交按钮
};
const defaultProps = {
    clsPrefix: 'u-form',
    className: '',
    submitCallBack: () => {
    },//form验证的回调
    submitAreaClassName: '',
    submitBtnClassName: '',
    beforeSubmitBtn: '',
    afterSubmitBtn: '',
    useRow: false,
    checkFormNow: false,
    showSubmit: true
};
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],//验证结果对象
            checkNow: false//是否立刻验证，提交按钮
        }
    }
    componentDidMount() {
        this.getFormItems();
    }
    checkItem = (obj, flag) => {
        let items = this.state.items;
        items.forEach(item => {
            if (item.name === obj.name) {
                item.verify = obj.verify;
                item.value = obj.value === undefined ? '' : obj.value;
            }
        });
        this.setState({
            items: items
        });
        if (flag && (items[items.length - 1] && items[items.length - 1].name === obj.name)) {
            this.submit(items);
        }
    }
    getFormItems = () => {
        let items = [];
        if (this.props.children.length) {
            this.props.children.map(item => {
                if (item.props.isFormItem) {
                    items.push({
                        'name': item.props.children.props.name,
                        'verify': true,
                        'value': ''
                    });
                }
            })
        } else {
            let item = this.props.children;
            if (item.props.isFormItem) {
                items.push({
                    'name': item.props.children.props.name,
                    'verify': true,
                    'value': ''
                });
            }
        }
        this.setState({
            items: items
        });
    }
    checkNow = (onClickFn) => {
        this.setState({
            checkNow: true
        });
        typeof onClickFn === 'function' ? onClickFn() : '';
    }
    btnCheck = (onClickFn) => {
        let self = this;
        return function () {
            self.checkNow(onClickFn);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.checkFormNow) {
            this.checkNow();
        }
    }
    submit = (items) => {
        let flag = true;
        items.forEach(item => {
            if (!item.verify) {
                flag = false;
            }
        });
        this.setState({
            checkNow: false
        });
        this.props.submitCallBack(flag, this.state.items);
    }
    render() {
        const { className, showSubmit, useRow, submitAreaClassName, submitBtnClassName, beforeSubmitBtn, afterSubmitBtn, clsPrefix } = this.props;
        let childs = [];
        React.Children.map(this.props.children, (child, index) => {
            let {
                labelName, labelClassName, xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset, xsPush, smPush, mdPush, lgPush, xsPull, smPull, mdPull, lgPull,
                labelXs, labelSm, labelMd, labelLg, labelXsOffset, labelSmOffset, labelMdOffset, labelLgOffset, labelXsPush, labelSmPush, labelMdPush, labelLgPush,
                labelXsPull, labelSmPull, labelMdPull, labelLgPull, showMast, isSubmit
            } = child.props;
            if (child.props.isFormItem) {
                if (useRow) {
                    childs.push(
                        <span className={child.props.className} key={index} style={child.props.style}>
                            <Col key={'label' + index} xs={labelXs} sm={labelSm} md={labelMd} lg={labelLg} xsOffset={labelXsOffset} smOffset={labelSmOffset}
                                mdOffset={labelMdOffset} lgOffset={labelLgOffset} xsPush={labelXsPush} smPush={labelSmPush} mdPush={labelMdPush} lgPush={labelLgPush}
                                xsPull={labelXsPull} smPull={labelSmPull} mdPull={labelMdPull} lgPull={labelLgPull}>
                                <Label className={labelClassName ? labelClassName : ''}>
                                    {showMast ? (<span className="u-mast">*</span>) : ''}
                                    {labelName}</Label>
                            </Col>
                            <Col key={'fromGroup' + index} xs={xs} sm={sm} md={md} lg={lg} xsOffset={xsOffset} smOffset={smOffset} mdOffset={mdOffset}
                                lgOffset={lgOffset} xsPush={xsPush} smPush={smPush} mdPush={mdPush} lgPush={lgPush}
                                xsPull={xsPull} smPull={smPull} mdPull={mdPull} lgPull={lgPull}>
                                {
                                    React.cloneElement(child,
                                        {
                                            useRow: useRow,
                                            checkItem: this.checkItem,
                                            checkNow: this.state.checkNow,
                                            className: child.props.className? child.props.className + '-item':'',
                                            style: child.props.style
                                        })
                                }
                            </Col>
                        </span>
                    );
                } else {
                    childs.push(
                        <span key={index} className={child.props.className} >
                            {
                                React.cloneElement(child,
                                    {
                                        useRow: useRow,
                                        checkItem: this.checkItem,
                                        checkNow: this.state.checkNow,
                                        className: child.props.className? child.props.className + '-item':'',
                                        style: child.props.style
                                    })
                            }
                        </span>
                    )
                }
            } else if (child.props.isSubmit) {
                childs.push(
                    <span key={index}>
                        {
                            React.cloneElement(child,
                                {
                                    onClick: this.btnCheck(child.props.onClick)
                                })
                        }
                    </span>
                )
            } else {
                childs.push(React.cloneElement(child));
            }
        })
        return (
            <form className={`${clsPrefix} ${className}`} onSubmit={this.checkNow}>
                {useRow ? (
                    <Row>
                        {childs}
                    </Row>
                ) : childs}
                {
                    showSubmit ? (
                        <div className={`${clsPrefix}-submit ${submitAreaClassName}`}>
                            {beforeSubmitBtn}
                            <Button onClick={this.checkNow} colors="primary" className={`${clsPrefix}-submit-btn ${submitBtnClassName}`}>提交</Button>
                            {afterSubmitBtn}
                        </div>
                    ) : ''
                }

            </form>
        )
    }
};
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
export default Form;