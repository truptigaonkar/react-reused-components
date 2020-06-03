"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Breadcrumbs.styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function Breadcrumbs(props) {
  var children = props.children,
      alertStyle = props.alertStyle;
  var STYLES = ['alert--primary', 'alert--secondary', 'alert--success', 'alert--warning', 'alert--danger', 'alert--info', 'alert--white', 'alert--dark'];
  var checkAlertStyle = STYLES.includes(alertStyle) ? alertStyle : STYLES[0];
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "alert ".concat(checkAlertStyle)
  }, children));
};

var _default = Breadcrumbs;
exports.default = _default;