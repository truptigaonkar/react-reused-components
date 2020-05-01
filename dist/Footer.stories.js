"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _FooterREADME = _interopRequireDefault(require("./Footer.README.md"));

var _storybookReadme = require("storybook-readme");

var _Footer = _interopRequireDefault(require("./Footer"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Footer', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _FooterREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Footer.default, {
    footerStyle: (0, _addonKnobs.select)('Style', ['footer--primary', 'footer--secondary', 'footer--success', 'footer--warning', 'footer--danger', 'footer--white', 'footer--dark'], 'footer--primary'),
    footerFixed: (0, _addonKnobs.select)('fixed-bottom', ['footer--basic', 'footer--fixed'], 'footer--basic')
  }, (0, _addonKnobs.text)('Text', ' © Copyright 2020 '));
});