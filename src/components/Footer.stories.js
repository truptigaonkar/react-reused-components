import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Readme from './Footer.README.md';
import { addReadme } from 'storybook-readme';
import Footer from './Footer';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Footer', module)
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
    return <Footer
    footerStyle={select(
        'Style',
        [
          'footer--primary',
          'footer--secondary',
          'footer--success',
          'footer--warning',
          'footer--danger',
        ],
        'footer--primary'
      )}
    >{text('Text', ' © Copyright 2020 ')}</Footer>;
  });
