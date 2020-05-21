"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _TextfieldREADME = _interopRequireDefault(require("./Textfield.README.md"));

var _storybookReadme = require("storybook-readme");

var _addonActions = require("@storybook/addon-actions");

var _Textfield = _interopRequireDefault(require("./Textfield"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Textfield', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _TextfieldREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Text', function () {
  return /*#__PURE__*/_react.default.createElement(_Textfield.default, {
    type: "text",
    placeholder: "Enter text",
    onChange: (0, _addonActions.action)('Textfield provided'),
    label: (0, _addonKnobs.text)('Text', 'Label')
  });
});