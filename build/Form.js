'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _beeButton = require('bee-button');

var _beeButton2 = _interopRequireDefault(_beeButton);

var _beeFormGroup = require('bee-form-group');

var _beeFormGroup2 = _interopRequireDefault(_beeFormGroup);

var _beeLabel = require('bee-label');

var _beeLabel2 = _interopRequireDefault(_beeLabel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
    clsPrefix: _propTypes2["default"].string,
    className: _propTypes2["default"].string,
    submitError: _propTypes2["default"].func, //form验证失败的回调
    submitSuccess: _propTypes2["default"].func, //form验证成功的回调
    submitAreaClassName: _propTypes2["default"].string, //提交区域className
    submitBtnClassName: _propTypes2["default"].string, //提交按钮className
    beforeSubmitBtn: _propTypes2["default"].element, //提交按钮之前的dom
    afterSubmitBtn: _propTypes2["default"].element //提交按钮之后的dom
};
var defaultProps = {
    clsPrefix: 'u-form',
    className: '',
    submitError: function submitError() {}, //form验证失败的回调
    submitSuccess: function submitSuccess() {}, //form验证成功的回调
    submitAreaClassName: '',
    submitBtnClassName: '',
    beforeSubmitBtn: '',
    afterSubmitBtn: ''
};

var Form = function (_Component) {
    _inherits(Form, _Component);

    function Form(props) {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.checkItem = function (obj, flag) {
            var items = _this.state.items;
            items.forEach(function (item) {
                if (item.name === obj.name) {
                    item.verify = obj.verify;
                    item.value = obj.value || '';
                }
            });
            _this.setState({
                items: items
            });
            if (flag && items[items.length - 1] && items[items.length - 1].name === obj.name) {
                _this.submit(items);
            }
        };

        _this.getFormItems = function () {
            var items = [];
            if (_this.props.children.length) {
                _this.props.children.map(function (item) {
                    if (item.props.isFormItem) {
                        items.push({
                            'name': item.props.children.props.name,
                            'verify': true,
                            'value': ''
                        });
                    }
                });
            } else {
                var item = _this.props.children;
                if (item.props.isFormItem) {
                    items.push({
                        'name': item.props.children.props.name,
                        'verify': true,
                        'value': ''
                    });
                }
            }

            _this.setState({
                items: items
            });
        };

        _this.checkNow = function () {
            _this.setState({
                checkNow: true
            });
        };

        _this.submit = function (items) {
            var flag = true;
            items.forEach(function (item) {
                if (!item.verify) {
                    flag = false;
                }
            });
            if (flag) {
                _this.setState({
                    checkNow: false
                });
                _this.props.submitSuccess(_this.state.items);
            } else {
                _this.setState({
                    checkNow: false
                });
                _this.props.submitError(_this.state.items);
            }
        };

        _this.state = {
            items: [], //验证结果对象
            checkNow: false //是否立刻验证，提交按钮
        };
        return _this;
    }

    Form.prototype.componentDidMount = function componentDidMount() {
        this.getFormItems();
    };

    Form.prototype.render = function render() {
        var _this2 = this;

        var childs = [];
        _react2["default"].Children.map(this.props.children, function (child) {
            if (child.props.isFormItem) {
                childs.push(_react2["default"].createElement(
                    _beeFormGroup2["default"],
                    null,
                    _react2["default"].createElement(
                        _beeLabel2["default"],
                        null,
                        child.props.labelName
                    ),
                    child.props.inputAfore,
                    _react2["default"].cloneElement(child, {
                        checkItem: _this2.checkItem,
                        checkNow: _this2.state.checkNow
                    }),
                    child.props.inputBefore
                ));
            } else {
                childs.push(_react2["default"].cloneElement(child));
            }
        });
        var _props = this.props,
            className = _props.className,
            submitAreaClassName = _props.submitAreaClassName,
            submitBtnClassName = _props.submitBtnClassName,
            beforeSubmitBtn = _props.beforeSubmitBtn,
            afterSubmitBtn = _props.afterSubmitBtn,
            clsPrefix = _props.clsPrefix;

        return _react2["default"].createElement(
            'form',
            { className: clsPrefix + ' ' + className, onSubmit: this.checkNow },
            childs,
            _react2["default"].createElement(
                'div',
                { className: clsPrefix + '-submit ' + submitAreaClassName },
                beforeSubmitBtn,
                _react2["default"].createElement(
                    _beeButton2["default"],
                    { onClick: this.checkNow, colors: 'primary', className: clsPrefix + '-submit-btn ' + submitBtnClassName },
                    '\u63D0\u4EA4'
                ),
                afterSubmitBtn
            )
        );
    };

    return Form;
}(_react.Component);

;
Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
exports["default"] = Form;
module.exports = exports['default'];