'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _beeInputGroup = require('bee-input-group');

var _beeInputGroup2 = _interopRequireDefault(_beeInputGroup);

var _beeLabel = require('bee-label');

var _beeLabel2 = _interopRequireDefault(_beeLabel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var regs = {
    email: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
    tel: /^1[3|4|5|7|8]\d{9}$/,
    IDCard: /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/, //身份证
    chinese: /^[\u4e00-\u9fa5]+?$/, //中文校验
    password: /^[0-9a-zA-Z,.!?`~#$%^&*()-=_+<>'"\[\]\{\}\\\|]{6,15}$/ //6-15位数字英文符号
};
var propTypes = {
    clsPrefix: _propTypes2["default"].string,
    className: _propTypes2["default"].string,
    isRequire: _propTypes2["default"].bool, //是否必填
    errorMessage: _propTypes2["default"].node, //错误信息
    htmlType: _propTypes2["default"].oneOf(['email', 'tel', 'IDCard', 'chinese', 'password', null]), //htmlType有值的时候 reg不生效
    reg: _propTypes2["default"].instanceOf(RegExp), //校验正则
    method: _propTypes2["default"].oneOf(['change', 'blur', null]), //校验方式
    blur: _propTypes2["default"].func, //失去焦点的回调,参数为value
    change: _propTypes2["default"].func, //值改变的回调,参数为value
    check: _propTypes2["default"].func, //验证的回调
    checkItem: _propTypes2["default"].func,
    useRow: _propTypes2["default"].func,
    inline: _propTypes2["default"].bool, //formItem是否行内
    labelName: _propTypes2["default"].node, //label标签文字或dom
    labelClassName: _propTypes2["default"].string, //label样式名
    inputBefore: _propTypes2["default"].node, //input之前的
    inputAfter: _propTypes2["default"].node, //input之后的
    mesClassName: _propTypes2["default"].string, //提示信息样式名
    checkInitialValue: _propTypes2["default"].bool, //是否校验初始值，未开放 ...col.propTypes
    showMast: _propTypes2["default"].bool, //是否显示必填项的 *
    xs: _propTypes2["default"].number, //xs显示列数
    sm: _propTypes2["default"].number, //sm显示列数
    md: _propTypes2["default"].number, //md显示列数
    lg: _propTypes2["default"].number, //lg显示列数
    xsOffset: _propTypes2["default"].number, //xs偏移列数
    smOffset: _propTypes2["default"].number, //sm偏移列数
    mdOffset: _propTypes2["default"].number, //md偏移列数
    lgOffset: _propTypes2["default"].number, //lg偏移列数
    xsPush: _propTypes2["default"].number, //xs右偏移列数
    smPush: _propTypes2["default"].number, //sm右偏移列数
    mdPush: _propTypes2["default"].number, //md右偏移列数
    lgPush: _propTypes2["default"].number, //lg右偏移列数
    xsPull: _propTypes2["default"].number, //xs左偏移列数
    smPull: _propTypes2["default"].number, //sm左偏移列数`
    mdPull: _propTypes2["default"].number, //md左偏移列数
    lgPull: _propTypes2["default"].number, //lg左偏移列数
    labelXs: _propTypes2["default"].number,
    labelSm: _propTypes2["default"].number,
    labelMd: _propTypes2["default"].number,
    labelLg: _propTypes2["default"].number,
    labelXsOffset: _propTypes2["default"].number,
    labelSmOffset: _propTypes2["default"].number,
    labelMdOffset: _propTypes2["default"].number,
    labelLgOffset: _propTypes2["default"].number,
    labelXsPush: _propTypes2["default"].number,
    labelSmPush: _propTypes2["default"].number,
    labelMdPush: _propTypes2["default"].number,
    labelLgPush: _propTypes2["default"].number,
    labelXsPull: _propTypes2["default"].number,
    labelSmPull: _propTypes2["default"].number,
    labelMdPull: _propTypes2["default"].number,
    labelLgPull: _propTypes2["default"].number
};
var defaultProps = {
    clsPrefix: 'u-form',
    isRequire: false, //是否必填
    errorMessage: '校验失败', //错误信息
    reg: /[/w/W]*/,
    method: 'change',
    blur: function blur() {},
    change: function change() {},
    isFormItem: true,
    check: function check() {},
    checkItem: function checkItem() {},
    inline: false,
    labelName: '',
    labelClassName: '',
    inputBefore: '',
    inputAfter: '',
    mesClassName: '',
    checkInitialValue: false,
    useRow: false,
    showMast: false
};

var FormItem = function (_Component) {
    _inherits(FormItem, _Component);

    function FormItem(props) {
        _classCallCheck(this, FormItem);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.handleBlur = function () {
            var value = _reactDom2["default"].findDOMNode(_this.input).value;
            var name = _reactDom2["default"].findDOMNode(_this.input).name;
            if (_this.props.method === 'blur') {
                var flag = _this.itemCheck(value, name);
                _this.setState({
                    hasError: !flag
                });
                _this.props.checkItem({
                    "name": name,
                    "verify": flag,
                    "value": value
                });
            }
            _this.props.blur(value);
            _this.props.children.props.onBlur && _this.props.children.props.onBlur(value);
        };

        _this.handleChange = function (selectV) {
            var value = selectV || _reactDom2["default"].findDOMNode(_this.input).value || _this.input.props.defaultValue || _this.input.selectedValue;
            if (_this.input.props && _this.input.props.defaultChecked != undefined) {
                //checkbox
                value = selectV;
            }
            var name = _reactDom2["default"].findDOMNode(_this.input).name || _this.input.props.name;
            _this.setState({
                value: value
            });
            if (_this.props.method === 'change') {
                var flag = _this.itemCheck(value, name);
                _this.setState({
                    hasError: !flag
                });
                _this.props.checkItem({
                    "name": name,
                    "verify": flag,
                    "value": value
                });
            }
            _this.props.change(value);
            _this.props.children.props.onChange && _this.props.children.props.onChange(value);
        };

        _this.itemCheck = function (value, name) {
            var _this$props = _this.props,
                isRequire = _this$props.isRequire,
                htmlType = _this$props.htmlType;

            var reg = htmlType ? regs[htmlType] : _this.props.reg;
            var flag = reg.test(value);
            var obj = {
                "name": name,
                "verify": flag,
                "value": value === undefined ? '' : value
            };
            if (isRequire) {
                if (value) {
                    _this.props.check(flag, obj);
                    return flag;
                } else {
                    _this.props.check(false, obj);
                    return false;
                }
            } else {
                _this.props.check(true, obj);
                return true;
            }
        };

        _this.checkSelf = function () {
            //this.input.props.defaultValue select
            //this.input.props.selectedValue radio
            //this.input.props.value datapick
            var value = _reactDom2["default"].findDOMNode(_this.input).value || _this.state.value || _this.input.domValue || _this.input.props && _this.input.props.defaultValue || _this.input.props && _this.input.props.selectedValue || _this.input.props && _this.input.props.value;
            if (_this.input.props && _this.input.props.defaultChecked != undefined) {
                //checkbox
                value = !!_this.state.value;
            }
            var name = _reactDom2["default"].findDOMNode(_this.input).name || _this.input.props.name;
            var flag = _this.itemCheck(value, name);
            _this.props.checkItem({
                "name": name,
                "verify": flag,
                "value": value
            }, true);
            _this.setState({
                hasError: !flag
            });
        };

        _this.state = {
            hasError: false,
            value: _this.props.children.props.value || '',
            width: 0,
            maxWidth: '100%'
        };
        return _this;
    }

    FormItem.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        if (nextProps.checkNow && !this.props.checkNow) {
            this.checkSelf();
        }
    };

    FormItem.prototype.componentDidMount = function componentDidMount() {
        if (this.props.inline) {
            var outerWidth = _reactDom2["default"].findDOMNode(this.refs.outer) ? _reactDom2["default"].findDOMNode(this.refs.outer).clientWidth || _reactDom2["default"].findDOMNode(this.refs.outer).offsetWidth : 0;
            var width = _reactDom2["default"].findDOMNode(this.refs.label) ? _reactDom2["default"].findDOMNode(this.refs.label).clientWidth || _reactDom2["default"].findDOMNode(this.refs.label).offsetWidth : 0;
            this.setState({
                width: width,
                maxWidth: outerWidth ? outerWidth - width - 10 : '100%'
            });
        }
    };
    /**
     * 校验方法
     * @param value
     * @returns {boolean}
     */

    /**
     * 触发校验
     */


    FormItem.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            showMast = _props.showMast,
            useRow = _props.useRow,
            children = _props.children,
            inline = _props.inline,
            errorMessage = _props.errorMessage,
            className = _props.className,
            clsPrefix = _props.clsPrefix,
            inputBefore = _props.inputBefore,
            inputAfter = _props.inputAfter,
            mesClassName = _props.mesClassName,
            labelName = _props.labelName,
            labelClassName = _props.labelClassName;

        var clsObj = {};
        clsObj[clsPrefix + '-item'] = true;
        className ? clsObj[className] = true : '';
        var clsErrObj = {};
        clsErrObj[clsPrefix + '-error'] = true;
        if (inline) {
            clsObj[clsPrefix + '-inline'] = true;
            clsErrObj[clsPrefix + '-error-inline'] = true;
        }
        mesClassName ? clsErrObj[mesClassName] = true : '';
        if (this.state.hasError) clsErrObj['show'] = true;
        var childs = [];
        _react2["default"].Children.map(this.props.children, function (child, index) {
            if (child.props.type === 'text' || child.props.type === 'password') {
                childs.push(_react2["default"].createElement(
                    'div',
                    { ref: 'outer', key: index },
                    useRow ? '' : _react2["default"].createElement(
                        _beeLabel2["default"],
                        { ref: 'label', className: labelClassName ? labelClassName : '' },
                        showMast ? _react2["default"].createElement(
                            'span',
                            { className: 'u-mast' },
                            '*'
                        ) : '',
                        labelName
                    ),
                    _react2["default"].createElement(
                        'span',
                        { className: 'u-input-group-outer', style: { 'maxWidth': _this2.state.maxWidth } },
                        _react2["default"].createElement(
                            _beeInputGroup2["default"],
                            { key: index },
                            inputBefore ? _react2["default"].createElement(
                                _beeInputGroup2["default"].Addon,
                                null,
                                inputBefore
                            ) : '',
                            _react2["default"].cloneElement(children, {
                                onBlur: _this2.handleBlur,
                                onChange: _this2.handleChange,
                                ref: function ref(e) {
                                    _this2.input = e;
                                },
                                value: _this2.state.value
                            }),
                            inputAfter ? _react2["default"].createElement(
                                _beeInputGroup2["default"].Addon,
                                null,
                                inputAfter
                            ) : ''
                        )
                    )
                ));
            } else {
                childs.push(_react2["default"].createElement(
                    'div',
                    { ref: 'outer', key: index },
                    useRow ? '' : _react2["default"].createElement(
                        _beeLabel2["default"],
                        { ref: 'label', className: labelClassName ? labelClassName : '' },
                        showMast ? _react2["default"].createElement(
                            'span',
                            { className: 'u-mast' },
                            '*'
                        ) : '',
                        labelName
                    ),
                    _react2["default"].createElement(
                        'span',
                        { className: 'u-input-group-outer', style: { 'maxWidth': _this2.state.maxWidth } },
                        _react2["default"].createElement(
                            _beeInputGroup2["default"],
                            null,
                            inputBefore ? _react2["default"].createElement(
                                _beeInputGroup2["default"].Addon,
                                null,
                                inputBefore
                            ) : '',
                            _react2["default"].cloneElement(children, {
                                key: { index: index },
                                onBlur: _this2.handleBlur,
                                onChange: _this2.handleChange,
                                ref: function ref(e) {
                                    _this2.input = e;
                                }
                            }),
                            inputAfter ? _react2["default"].createElement(
                                _beeInputGroup2["default"].Addon,
                                null,
                                inputAfter
                            ) : ''
                        )
                    )
                ));
            }
        });
        return _react2["default"].createElement(
            'div',
            { className: (0, _classnames2["default"])(clsObj) },
            childs,
            _react2["default"].createElement(
                'div',
                { className: (0, _classnames2["default"])(clsErrObj), style: { 'marginLeft': this.state.width } },
                errorMessage
            )
        );
    };

    return FormItem;
}(_react.Component);

;
FormItem.propTypes = propTypes;
FormItem.defaultProps = defaultProps;
exports["default"] = FormItem;
module.exports = exports['default'];