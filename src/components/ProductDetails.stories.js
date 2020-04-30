import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Readme from './Footer.README.md';
import { addReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import ProductDetails from './ProductDetails';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Product Details', module)
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
        <ProductDetails 
            src={select(
              'Images',
              [
                'https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg',
                'http://img5a.flixcart.com/image/tablet/e/b/d/d-link-d100-400x400-imae9fb8pcg5mwgu.jpeg'
              ],
              'https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg'
            )}
            productTitle={text('Title', 'Tablet')}
            productPrice={text('Price', '150 SEK')}
            description={text('Description', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')}
            defaultValue={1}
            min={1}
            max={100}
            onClick={action('Button clicked')}
        >
        </ProductDetails>
    );
  });

