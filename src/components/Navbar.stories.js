import React from 'react';
import { storiesOf } from '@storybook/react';
import { text,select } from '@storybook/addon-knobs';
import Readme from './Navbar.README.md';
import { addReadme } from 'storybook-readme';
import Navbar from './Navbar';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Navbar', module)
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
      <Navbar
      navbarStyle={select(
        'Style',
        [
          'navbar--primary',
          'navbar--secondary',
          'navbar--success',
          'navbar--warning',
          'navbar--danger',
          'navbar--dark',
        ],
        'navbar--primary'
      ) 
    } 
        header={text('Header text', 'My App')}
        tab1={text('Tab1 text', 'Home')}
        tab2={text('Tab2 text', 'About')}
        tab3={text('Tab3 text', 'Portfolio')}
        tab4={text('Tab4 text', 'Contact')}
      />
    );
  });
