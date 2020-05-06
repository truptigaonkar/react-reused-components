"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Navbar.styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */
var Navbar = function Navbar(props) {
  var header = props.header,
      tab1 = props.tab1,
      tab2 = props.tab2,
      tab3 = props.tab3,
      tab4 = props.tab4,
      navbarStyle = props.navbarStyle;
  var STYLES = ['navbar--primary', 'navbar--secondary', 'navbar--success', 'navbar--warning', 'navbar--danger', 'navbar--dark'];
  var checkNavbarStyle = STYLES.includes(navbarStyle) ? navbarStyle : STYLES[0];
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "alert ".concat(checkNavbarStyle, " header")
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, header)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "main-nav"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab1)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab2)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab3)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab4))));
};

var _default = Navbar;
exports.default = _default;