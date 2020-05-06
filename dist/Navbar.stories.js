"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _NavbarREADME = _interopRequireDefault(require("./Navbar.README.md"));

var _storybookReadme = require("storybook-readme");

var _Navbar = _interopRequireDefault(require("./Navbar"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Navbar', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _NavbarREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Navbar.default, {
    navbarStyle: (0, _addonKnobs.select)('Style', ['navbar--primary', 'navbar--secondary', 'navbar--success', 'navbar--warning', 'navbar--danger', 'navbar--dark'], 'navbar--primary'),
    header: (0, _addonKnobs.text)('Header text', 'My App'),
    tab1: (0, _addonKnobs.text)('Tab1 text', 'Home'),
    tab2: (0, _addonKnobs.text)('Tab2 text', 'About'),
    tab3: (0, _addonKnobs.text)('Tab3 text', 'Portfolio'),
    tab4: (0, _addonKnobs.text)('Tab4 text', 'Contact')
  });
});