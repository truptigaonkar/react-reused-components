"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Card.styles.css");

var _Button = require("./Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Card = function Card(props) {
  var productTitle = props.productTitle,
      productPrice = props.productPrice,
      src = props.src,
      alt = props.alt,
      children = props.children,
      onClick = props.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "product"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    className: "product-image",
    src: src,
    alt: alt
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-title"
  }, productTitle), /*#__PURE__*/_react.default.createElement("div", {
    className: "product-price"
  }, productPrice, " SEK"), /*#__PURE__*/_react.default.createElement(_Button.Button, {
    buttonStyle: "btn--dark--solid",
    buttonSize: "block",
    onClick: onClick
  }, children));
};

var _default = Card;
exports.default = _default;