"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _AlertREADME = _interopRequireDefault(require("./Alert.README.md"));

var _storybookReadme = require("storybook-readme");

var _Alert = _interopRequireDefault(require("./Alert"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Alert', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _AlertREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Alert.default, {
    alertStyle: (0, _addonKnobs.select)('Style', ['alert--primary', 'alert--secondary', 'alert--success', 'alert--warning', 'alert--danger', 'alert--info', 'alert--white', 'alert--dark'], 'alert--primary')
  }, (0, _addonKnobs.text)('Text', ' Alert text '));
});