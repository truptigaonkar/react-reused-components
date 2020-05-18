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
      Tab1 = props.Tab1,
      Tab2 = props.Tab2,
      Tab3 = props.Tab3,
      Tab4 = props.Tab4,
      navbarStyle = props.navbarStyle;
  var STYLES = ['navbar--primary', 'navbar--secondary', 'navbar--success', 'navbar--warning', 'navbar--danger', 'navbar--dark'];
  var checkNavbarStyle = STYLES.includes(navbarStyle) ? navbarStyle : STYLES[0];
  return /*#__PURE__*/_react.default.createElement("header", {
    className: "alert ".concat(checkNavbarStyle, " header")
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, header)), /*#__PURE__*/_react.default.createElement("ul", {
    className: "main-nav"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab1)
  }, Tab1)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab2)
  }, Tab2)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab3)
  }, Tab3)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab4)
  }, Tab4))));
};

var _default = Navbar;
exports.default = _default;