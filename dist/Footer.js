"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Footer.styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var children = props.children,
      footerStyle = props.footerStyle;
  var STYLES = ['footer--primary', 'footer--secondary', 'footer--warning', 'footer--danger', 'footer--success'];
  var checkFooterStyle = STYLES.includes(footerStyle) ? footerStyle : STYLES[0];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer ".concat(checkFooterStyle)
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "FooterText"
  }, children)));
};

var _default = Footer;
exports.default = _default;