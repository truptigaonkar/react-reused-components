"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Header.styles.css");

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var children = props.children,
      src = props.src,
      alt = props.alt,
      heading = props.heading,
      description = props.description,
      mainHeading = props.mainHeading,
      onClick = props.onClick;
  return /*#__PURE__*/_react.default.createElement("header", null, /*#__PURE__*/_react.default.createElement("img", {
    className: "header-bg",
    src: src,
    alt: alt
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "header-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "heading"
  }, heading), /*#__PURE__*/_react.default.createElement("h1", {
    className: "main-heading"
  }, mainHeading), /*#__PURE__*/_react.default.createElement("div", {
    className: "description"
  }, description), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    buttonStyle: "btn--danger--solid",
    buttonSize: "large",
    onClick: onClick
  }, children)));
};

var _default = Header;
exports.default = _default;