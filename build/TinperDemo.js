'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Form = require('../../src/Form');

var _Form2 = _interopRequireDefault(_Form);

var _beeFormControl = require('bee-form-control');

var _beeFormControl2 = _interopRequireDefault(_beeFormControl);

var _beeSelect = require('bee-select');

var _beeSelect2 = _interopRequireDefault(_beeSelect);

var _beeRadio = require('bee-radio');

var _beeRadio2 = _interopRequireDefault(_beeRadio);

var _beeDatepicker = require('bee-datepicker');

var _beeDatepicker2 = _interopRequireDefault(_beeDatepicker);

var _zh_CN = require('rc-calendar/lib/locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _beeCheckbox = require('bee-checkbox');

var _beeCheckbox2 = _interopRequireDefault(_beeCheckbox);

var _beeSwitch = require('bee-switch');

var _beeSwitch2 = _interopRequireDefault(_beeSwitch);

var _beeSlider = require('bee-slider');

var _beeSlider2 = _interopRequireDefault(_beeSlider);

var _beeInputNumber = require('bee-input-number');

var _beeInputNumber2 = _interopRequireDefault(_beeInputNumber);

var _beeRate = require('bee-rate');

var _beeRate2 = _interopRequireDefault(_beeRate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @title 使用tinper例子
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var FormItem = _Form2["default"].FormItem;
var Option = _beeSelect2["default"].Option;
var format = 'YYYY-MM-DD HH:mm:ss';
var dateInputPlaceholder = '选择日期';

var Demo4 = function (_Component) {
    _inherits(Demo4, _Component);

    function Demo4(props) {
        _classCallCheck(this, Demo4);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props));

        _this.checkForm = function (flag, obj) {
            console.log(flag);
            console.log(obj);
        };

        _this.radioChange = function (value) {
            _this.setState({
                radioValue: value
            });
        };

        _this.numChange = function (value) {
            _this.setState({
                num: value
            });
        };

        _this.textareaChange = function (value) {
            _this.setState({
                remark: value
            });
        };

        _this.change = function (v) {
            console.log(v);
        };

        _this.inputChange = function () {
            _this.setState({
                name: _reactDom2["default"].findDOMNode(_this.refs.name).value,
                age: _reactDom2["default"].findDOMNode(_this.refs.age).value,
                remark: _reactDom2["default"].findDOMNode(_this.refs.remark).value,
                num: _reactDom2["default"].findDOMNode(_this.refs.num).value
            });
        };

        _this.rateChange = function (value) {
            _this.setState({
                rate: value
            });
        };

        _this.state = {
            radioValue: 'apple',
            name: '',
            age: '',
            remark: '',
            num: 123,
            rate: 0
        };
        return _this;
    }

    Demo4.prototype.render = function render() {

        return _react2["default"].createElement(
            _Form2["default"],
            { submitCallBack: this.checkForm },
            _react2["default"].createElement(
                FormItem,
                { labelName: '\u59D3\u540D', isRequire: true, htmlType: 'chinese',
                    errorMessage: '\u59D3\u540D\u683C\u5F0F\u9519\u8BEF', method: 'blur', valuePropsName: 'value' },
                _react2["default"].createElement(_beeFormControl2["default"], { name: 'name', ref: 'name', placeholder: '\u53EA\u80FD\u8F93\u5165\u4E2D\u6587',
                    value: this.state.name, onChange: this.inputChange })
            ),
            _react2["default"].createElement(
                FormItem,
                { labelName: '\u5E74\u9F84', isRequire: true, method: 'blur',
                    errorMessage: '\u5E74\u9F84\u683C\u5F0F\u9519\u8BEF', reg: /^[0-9]+$/, valuePropsName: 'value' },
                _react2["default"].createElement(_beeFormControl2["default"], { name: 'age', ref: 'age', placeholder: '\u53EA\u80FD\u8F93\u5165\u6570\u5B57', value: this.state.age, onChange: this.inputChange })
            ),
            _react2["default"].createElement(
                FormItem,
                { labelName: '\u6027\u522B', method: 'change' },
                _react2["default"].createElement(
                    _beeSelect2["default"],
                    { name: 'select', defaultValue: 'woman' },
                    _react2["default"].createElement(
                        Option,
                        { value: 'man' },
                        '\u7537'
                    ),
                    _react2["default"].createElement(
                        Option,
                        { value: 'woman' },
                        '\u5973'
                    )
                )
            ),
            _react2["default"].createElement(
                FormItem,
                { inline: true, labelName: '\u559C\u597D', valuePropsName: 'selectedValue', method: 'change', change: this.radioChange },
                _react2["default"].createElement(
                    _beeRadio2["default"].RadioGroup,
                    {
                        selectedValue: this.state.radioValue,
                        name: 'fruit' },
                    _react2["default"].createElement(
                        _beeRadio2["default"],
                        { value: 'apple' },
                        '\u82F9\u679C'
                    ),
                    _react2["default"].createElement(
                        _beeRadio2["default"],
                        { value: 'orange' },
                        '\u6A58\u5B50'
                    ),
                    _react2["default"].createElement(
                        _beeRadio2["default"],
                        { value: 'lemon' },
                        '\u67E0\u6AAC'
                    )
                )
            ),
            _react2["default"].createElement(
                FormItem,
                { labelName: '\u65F6\u95F4', method: 'change', change: this.change },
                _react2["default"].createElement(_beeDatepicker2["default"], {
                    name: 'time',
                    format: format,
                    locale: _zh_CN2["default"],
                    defaultValue: (0, _moment2["default"])(),
                    placeholder: dateInputPlaceholder
                })
            ),
            _react2["default"].createElement(
                FormItem,
                { inline: true, labelName: '\u5B8C\u6210', valuePropsName: 'defaultChecked', method: 'change', Change: this.change },
                _react2["default"].createElement(_beeCheckbox2["default"], { colors: 'info', name: 'checkbox' })
            ),
            _react2["default"].createElement(
                FormItem,
                { inline: true, labelName: '\u542F\u7528', valuePropsName: 'defaultChecked', method: 'change', Change: this.change },
                _react2["default"].createElement(_beeSwitch2["default"], { name: 'switch' })
            ),
            _react2["default"].createElement(
                FormItem,
                { labelName: '\u6ED1\u5757', method: 'change' },
                _react2["default"].createElement(_beeSlider2["default"], { defaultValue: 20, onChange: this.change, style: { 'width': '500px' }, name: 'slider' })
            ),
            _react2["default"].createElement(
                FormItem,
                { labelName: '\u6570\u5B57', method: 'change', valuePropsName: 'value' },
                _react2["default"].createElement(_beeInputNumber2["default"], { name: 'num', precision: 2, min: 0, value: this.state.num, onChange: this.numChange })
            ),
            _react2["default"].createElement(
                FormItem,
                { labelName: '\u8BC4\u7EA7', method: 'change', valuePropsName: 'value' },
                _react2["default"].createElement(_beeRate2["default"], { name: 'rate', value: this.state.rate, onChange: this.rateChange })
            ),
            _react2["default"].createElement(
                FormItem,
                { labelName: '\u5907\u6CE8' },
                _react2["default"].createElement(_beeFormControl2["default"], { componentClass: 'textarea', name: 'remark', ref: 'remark', value: this.state.remark, onChange: this.textareaChange })
            )
        );
    };

    return Demo4;
}(_react.Component);

exports["default"] = Demo4;
module.exports = exports['default'];