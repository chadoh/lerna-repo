'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  color: #26A65B;\n'], ['\n  color: #26A65B;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactSpinkit = require('react-spinkit');

var _reactSpinkit2 = _interopRequireDefault(_reactSpinkit);

var _styledButton = require('./styles/styledButton');

var _styledButton2 = _interopRequireDefault(_styledButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var StyledSpinner = (0, _styledComponents2.default)(_reactSpinkit2.default)(_templateObject);
var Button = function Button(_ref) {
  var _ref$type = _ref.type,
      type = _ref$type === undefined ? 'button' : _ref$type,
      children = _ref.children,
      onClick = _ref.onClick,
      disabled = _ref.disabled;
  return _react2.default.createElement(
    _styledButton2.default,
    { type: type, className: 'button', onClick: onClick, disabled: disabled },
    children,
    disabled && _react2.default.createElement(StyledSpinner, { name: 'ball-pulse-sync', fadeIn: 'none', style: { margin: '1em 0' } })
  );
};

exports.default = Button;