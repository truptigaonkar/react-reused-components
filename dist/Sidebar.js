"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

require("./Sidebar.styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable jsx-a11y/anchor-is-valid */
var Sidebar = function Sidebar(props) {
  var header = props.header,
      Tab1 = props.Tab1,
      Tab2 = props.Tab2,
      Tab3 = props.Tab3,
      Tab4 = props.Tab4,
      Tab5 = props.Tab5,
      Tab6 = props.Tab6,
      Tab7 = props.Tab7,
      src = props.src;
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
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement("header", null, header), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "".concat(Tab1)
  }, Tab1)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "".concat(Tab2)
  }, Tab2)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "".concat(Tab3)
  }, Tab3)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "".concat(Tab4)
  }, Tab4)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "".concat(Tab5)
  }, Tab5)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "".concat(Tab6)
  }, Tab6)), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "".concat(Tab7)
  }, Tab7))), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "".concat(Tab1),
    component: Tab1
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(Tab2),
    component: Tab2
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(Tab3),
    component: Tab3
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(Tab4),
    component: Tab4
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(Tab5),
    component: Tab5
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(Tab6),
    component: Tab6
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "".concat(Tab7),
    component: Tab7
  }))), /*#__PURE__*/_react.default.createElement("section", {
    style: {
      backgroundImage: "url(" + src + ")",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  }));
};

var _default = Sidebar;
exports.default = _default;