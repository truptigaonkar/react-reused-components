"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Modal.styles.css");

var _Button = _interopRequireDefault(require("./Button"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
  var closeModal = props.closeModal;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      float: 'right'
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    buttonStyle: "btn--dark--outline",
    onClick: closeModal
  }, "X")), props.children));
};

var _default = Modal;
exports.default = _default;