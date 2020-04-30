"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _addonKnobs = require("@storybook/addon-knobs");

var _FooterREADME = _interopRequireDefault(require("./Footer.README.md"));

var _storybookReadme = require("storybook-readme");

var _ProductDetails = _interopRequireDefault(require("./ProductDetails"));

var _theming = require("@storybook/theming");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var basicTheme = (0, _theming.create)({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null
});
(0, _react2.storiesOf)('Product Details', module).addParameters({
  options: {
    showPanel: true,
    panelPosition: 'bottom',
    theme: basicTheme
  },
  readme: {
    sidebar: _FooterREADME.default,
    theme: {},
    codeTheme: 'github'
  }
}).addDecorator(_storybookReadme.addReadme).add('Default', function () {
  return /*#__PURE__*/_react.default.createElement(_ProductDetails.default, {
    src: (0, _addonKnobs.select)('Images', ['https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg', 'http://img5a.flixcart.com/image/tablet/e/b/d/d-link-d100-400x400-imae9fb8pcg5mwgu.jpeg'], 'https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg'),
    productTitle: (0, _addonKnobs.text)('Title', 'Tablet'),
    productPrice: (0, _addonKnobs.text)('Price', '150 SEK'),
    description: (0, _addonKnobs.text)('Description', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'),
    defaultValue: 1,
    min: 1,
    max: 100
  });
});