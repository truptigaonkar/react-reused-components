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
      Tab5 = props.Tab5,
      Tab6 = props.Tab6,
      Tab7 = props.Tab7,
      Tab8 = props.Tab8,
      Tab9 = props.Tab9,
      Tab10 = props.Tab10,
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
  }, Tab4)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab5)
  }, Tab5)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab6)
  }, Tab6)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab7)
  }, Tab7)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab8)
  }, Tab8)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab9)
  }, Tab9)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab10)
  }, Tab10))));
};

var _default = Navbar;
exports.default = _default;