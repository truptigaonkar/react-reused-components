import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, number } from '@storybook/addon-knobs';
import Readme from './Cart.README.md';
import { addReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import Cart from './Cart';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Cart', module)
  .addParameters({
    options: {
      showPanel: true,
      panelPosition: 'bottom',
      theme: basicTheme,
    },
    readme: { sidebar: Readme, theme: {}, codeTheme: 'github' },
  })
  .addDecorator(addReadme)
  .add('Default', () => {
    return (
      <Cart
        cartLength={number('Cart lenght', '1')}
        src={select(
          'Images',
          [
            'https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg',
            'http://img5a.flixcart.com/image/tablet/e/b/d/d-link-d100-400x400-imae9fb8pcg5mwgu.jpeg'
          ],
          'https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg'
        )}
        title={text('Title', 'Tablet')}
        price={number('Price', '400')}
        quantity={number('Quantity', '4')}
        onClick={action('Button clicked')}
      />
    )
  });
