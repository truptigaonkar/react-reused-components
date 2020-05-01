"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Cart.styles.css");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cart = function Cart(props) {
  var src = props.src,
      title = props.title,
      price = props.price,
      quantity = props.quantity,
      cartLength = props.cartLength,
      onClick = props.onClick;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("div", null, "Cart ", /*#__PURE__*/_react.default.createElement("span", {
    className: "Badge"
  }, cartLength)), /*#__PURE__*/_react.default.createElement("div", {
    className: "Container"
  }, /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("th", null, "Image"), /*#__PURE__*/_react.default.createElement("th", null, "Title"), /*#__PURE__*/_react.default.createElement("th", null, "Price"), /*#__PURE__*/_react.default.createElement("th", null, "quantity"), /*#__PURE__*/_react.default.createElement("th", null, "Action"), /*#__PURE__*/_react.default.createElement("th", null, "Price By quantity"))), /*#__PURE__*/_react.default.createElement("tbody", null, /*#__PURE__*/_react.default.createElement("tr", null, /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("img", {
    className: "ImageCartItem",
    src: src,
    alt: "Cart Item"
  })), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement("b", null, title)), /*#__PURE__*/_react.default.createElement("td", null, price, " SEK"), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    buttonStyle: "btn--warning--solid",
    buttonSize: "btn--ex",
    onClick: onClick
  }, "+"), ' ', quantity, ' ', /*#__PURE__*/_react.default.createElement(_Button.default, {
    buttonStyle: "btn--warning--solid",
    buttonSize: "btn--ex",
    onClick: onClick
  }, "-")), /*#__PURE__*/_react.default.createElement("td", null, /*#__PURE__*/_react.default.createElement(_Button.default, {
    buttonStyle: "btn--danger--solid",
    onClick: onClick
  }, "X")), /*#__PURE__*/_react.default.createElement("td", null, price * quantity, " SEK")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: '15px'
    }
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "CartTotalPrice"
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    buttonStyle: "btn--primary--outline",
    buttonSize: "btn--md"
  }, /*#__PURE__*/_react.default.createElement("b", null, "Total : "), price * quantity)), /*#__PURE__*/_react.default.createElement(_Button.default, {
    type: "button",
    buttonStyle: "btn--danger--outline",
    buttonSize: "btn--md",
    onClick: onClick
  }, "Clear Cart"))))), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      float: 'left'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    buttonStyle: "btn--info--solid",
    onClick: onClick
  }, "Continue shopping")), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      float: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    buttonStyle: "btn--info--solid",
    onClick: onClick
  }, "proceed to checkout")));
};

var _default = Cart;
exports.default = _default;