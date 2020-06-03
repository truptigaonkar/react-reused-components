"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _BreadcrumbsREADME = _interopRequireDefault(require("./Breadcrumbs.README.md"));

var _storybookReadme = require("storybook-readme");

var _theming = require("@storybook/theming");

var _Breadcrumbs = _interopRequireDefault(require("./Breadcrumbs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Breadcrumbs', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _BreadcrumbsREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Breadcrumbs.default, {
    Tab1: (0, _addonKnobs.text)('Tab1 text', 'Tab1'),
    Tab2: (0, _addonKnobs.text)('Tab2 text', 'Tab2'),
    Tab3: (0, _addonKnobs.text)('Tab3 text', 'Tab3'),
    Tab4: (0, _addonKnobs.text)('Tab4 text', 'Tab4'),
    Tab5: (0, _addonKnobs.text)('Tab5 text', 'Tab5'),
    Tab6: (0, _addonKnobs.text)('Tab6 text', 'Tab6'),
    Tab7: (0, _addonKnobs.text)('Tab7 text', 'Tab7'),
    Tab8: (0, _addonKnobs.text)('Tab8 text', 'Tab8'),
    Tab9: (0, _addonKnobs.text)('Tab9 text', 'Tab9'),
    Tab10: (0, _addonKnobs.text)('Tab10 text', 'Tab10')
  });
});