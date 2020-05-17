"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _InputREADME = _interopRequireDefault(require("./Input.README.md"));

var _storybookReadme = require("storybook-readme");

var _addonActions = require("@storybook/addon-actions");

var _Input = _interopRequireDefault(require("./Input"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
}).addDecorator(_storybookReadme.addReadme).add('Text', function () {
  return /*#__PURE__*/_react.default.createElement(_Input.default, {
    type: "text",
    placeholder: "Enter text",
    onChange: (0, _addonActions.action)('Input provided'),
    label: (0, _addonKnobs.text)('Text', 'Label')
  });
});