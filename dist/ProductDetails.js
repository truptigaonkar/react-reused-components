"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./ProductDetails.styles.css");

var _Input = _interopRequireDefault(require("./Input"));

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var productDetails = function productDetails(props) {
  var src = props.src,
      productTitle = props.productTitle,
      productPrice = props.productPrice,
      description = props.description,
      defaultValue = props.defaultValue,
      min = props.min,
      max = props.max;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "Wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("img", {
    className: "ProductImg",
    src: src,
    alt: "product details"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "ProductInfo"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "ProductText"
  }, /*#__PURE__*/_react.default.createElement("h1", null, productTitle), /*#__PURE__*/_react.default.createElement("h2", null, productPrice), /*#__PURE__*/_react.default.createElement("p", null, description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "ProductButtons"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginRight: '7px'
    }
  }, /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "number",
    defaultValue: defaultValue,
    min: min,
    max: max
  })), /*#__PURE__*/_react.default.createElement(_Button.default, {
    buttonStyle: "btn--danger--outline",
    buttonSize: "large"
  }, "buy now"))));
};

var _default = productDetails;
exports.default = _default;