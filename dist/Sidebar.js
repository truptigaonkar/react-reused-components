"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Sidebar.styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */
var Sidebar = function Sidebar(props) {
  var header = props.header,
      tab1 = props.tab1,
      tab2 = props.tab2,
      tab3 = props.tab3,
      tab4 = props.tab4,
      tab5 = props.tab5,
      tab6 = props.tab6,
      tab7 = props.tab7;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", {
    type: "checkbox",
    id: "check"
  }), /*#__PURE__*/_react.default.createElement("label", {
    for: "check"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "btn"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "hamburger"
  }, " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "hamburger"
  }, " "), /*#__PURE__*/_react.default.createElement("div", {
    className: "hamburger"
  }, " ")), /*#__PURE__*/_react.default.createElement("div", {
    id: "cancel"
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    class: "sidebar"
  }, /*#__PURE__*/_react.default.createElement("header", null, header), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab1)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab2)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab3)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab4)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab5)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab6)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "#"
  }, tab7)))), /*#__PURE__*/_react.default.createElement("section", null));
};

var _default = Sidebar;
exports.default = _default;