"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _InputREADME = _interopRequireDefault(require("./Input.README.md"));

var _storybookReadme = require("storybook-readme");

var _addonActions = require("@storybook/addon-actions");

var _Input = _interopRequireDefault(require("./Input"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { select, text, boolean } from '@storybook/addon-knobs';
var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Input', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _InputREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Input', function () {
  return /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "textarea",
    value: "value",
    placeholder: "Input placeholder",
    onChange: (0, _addonActions.action)('Input provided')
  });
});