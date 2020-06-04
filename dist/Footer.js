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
      footerStyle = props.footerStyle,
      footerFixed = props.footerFixed;
  var STYLES = ['footer--primary', 'footer--secondary', 'footer--warning', 'footer--danger', 'footer--success', 'footer--white', 'footer--dark'];
  var STYLES1 = ['footer--basic', 'footer--fixed'];
  var checkFooterStyle = STYLES.includes(footerStyle) ? footerStyle : STYLES[0];
  var checkFooterFixed = STYLES1.includes(footerFixed) ? footerFixed : STYLES1[0];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer ".concat(checkFooterStyle, " footer ").concat(checkFooterFixed)
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "FooterText"
  }, children)));
};

var _default = Footer;
exports.default = _default;