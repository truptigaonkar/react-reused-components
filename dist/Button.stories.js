"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _README = _interopRequireDefault(require("./README.md"));

var _storybookReadme = require("storybook-readme");

var _addonActions = require("@storybook/addon-actions");

var _Button = _interopRequireDefault(require("./Button"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Button', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _README.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Solid Button', function () {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('Solid Button clicked'),
    buttonStyle: (0, _addonKnobs.select)('Style', ['btn--primary--solid', 'btn--secondary--solid', 'btn--success--solid', 'btn--warning--solid', 'btn--danger--solid'], 'btn--primary--solid'),
    buttonSize: (0, _addonKnobs.select)('Size', ['small', 'large', 'block'], 'small'),
    disabled: (0, _addonKnobs.boolean)('Disabled', false)
  }, (0, _addonKnobs.text)('Text', 'button'));
}).add('Outline Button', function () {
  return /*#__PURE__*/_react.default.createElement(_Button.default, {
    onClick: (0, _addonActions.action)('Button clicked'),
    buttonStyle: (0, _addonKnobs.select)('Style', ['btn--primary--outline', 'btn--secondary--outline', 'btn--success--outline', 'btn--warning--outline', 'btn--danger--outline'], 'btn--primary--outline'),
    buttonSize: (0, _addonKnobs.select)('Size', ['small', 'large', 'block'], 'small'),
    disabled: (0, _addonKnobs.boolean)('Disabled', false)
  }, (0, _addonKnobs.text)('Text', 'button'));
});