"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _SidebarREADME = _interopRequireDefault(require("./Sidebar.README.md"));

var _storybookReadme = require("storybook-readme");

var _Sidebar = _interopRequireDefault(require("./Sidebar"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Sidebar', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _SidebarREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Sidebar.default, {
    header: (0, _addonKnobs.text)('Header text', 'My App'),
    tab1: (0, _addonKnobs.text)('Tab1 text', 'Dashboard'),
    tab2: (0, _addonKnobs.text)('Tab2 text', 'Shortcuts'),
    tab3: (0, _addonKnobs.text)('Tab3 text', 'Overview'),
    tab4: (0, _addonKnobs.text)('Tab4 text', 'Events'),
    tab5: (0, _addonKnobs.text)('Tab5 text', 'About'),
    tab6: (0, _addonKnobs.text)('Tab6 text', 'Services'),
    tab7: (0, _addonKnobs.text)('Tab7 text', 'Contacts')
  });
});