"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Breadcrumbs.styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function Breadcrumbs(props) {
  var Tab1 = props.Tab1,
      Tab2 = props.Tab2,
      Tab3 = props.Tab3,
      Tab4 = props.Tab4,
      Tab5 = props.Tab5,
      Tab6 = props.Tab6,
      Tab7 = props.Tab7,
      Tab8 = props.Tab8,
      Tab9 = props.Tab9,
      Tab10 = props.Tab10;
  return /*#__PURE__*/_react.default.createElement("ul", {
    className: "breadcrumb"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, "Home")), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab1)
  }, Tab1)), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab2)
  }, Tab2)), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab3)
  }, Tab3)), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab4)
  }, Tab4)), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab5)
  }, Tab5)), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab6)
  }, Tab6)), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab7)
  }, Tab7)), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab8)
  }, Tab8)), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "".concat(Tab9)
  }, Tab9)), "\xA0 / \xA0", /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", null, Tab10)));
};

var _default = Breadcrumbs;
exports.default = _default;