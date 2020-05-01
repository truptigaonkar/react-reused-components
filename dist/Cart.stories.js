"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _CartREADME = _interopRequireDefault(require("./Cart.README.md"));

var _storybookReadme = require("storybook-readme");

var _addonActions = require("@storybook/addon-actions");

var _Cart = _interopRequireDefault(require("./Cart"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Cart', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _CartREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_Cart.default, {
    cartLength: (0, _addonKnobs.number)('Cart lenght', '1'),
    src: (0, _addonKnobs.select)('Images', ['https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg', 'http://img5a.flixcart.com/image/tablet/e/b/d/d-link-d100-400x400-imae9fb8pcg5mwgu.jpeg'], 'https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg'),
    title: (0, _addonKnobs.text)('Title', 'Tablet'),
    price: (0, _addonKnobs.number)('Price', '400'),
    quantity: (0, _addonKnobs.number)('Quantity', '4'),
    onClick: (0, _addonActions.action)('Button clicked')
  });
});