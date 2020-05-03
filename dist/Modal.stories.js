"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _ModalREADME = _interopRequireDefault(require("./Modal.README.md"));

var _storybookReadme = require("storybook-readme");

var _Modal = _interopRequireDefault(require("./Modal"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Modal', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _ModalREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Modal.default, {
    content: (0, _addonKnobs.text)('Modal Text', 'This is the modal content')
  }, (0, _addonKnobs.text)('Button text', 'Open modal'));
});