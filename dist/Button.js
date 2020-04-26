"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Button.styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLES = ['btn--primary--solid', 'btn--secondary--solid', 'btn--warning--solid', 'btn--danger--solid', 'btn--success--solid', 'btn--primary--outline', 'btn--secondary--outline', 'btn--warning--outline', 'btn--danger--outline', 'btn--success--outline'];
var SIZES = ['small', 'large', 'block'];

var Button = function Button(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      type = _ref.type,
      onClick = _ref.onClick,
      buttonStyle = _ref.buttonStyle,
      buttonSize = _ref.buttonSize;
  var checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
  var checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "btn ".concat(checkButtonStyle, " ").concat(checkButtonSize),
    onClick: onClick,
    type: type,
    disabled: disabled
  }, children);
};

exports.Button = Button;
var _default = Button;
exports.default = _default;