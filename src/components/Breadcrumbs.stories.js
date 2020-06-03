import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Readme from './Breadcrumbs.README.md';
import { addReadme } from 'storybook-readme';
import { create } from '@storybook/theming';
import Breadcrumbs from './Breadcrumbs';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Breadcrumbs', module)
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
      <Breadcrumbs 
      Tab1={text('Tab1 text', 'Tab1')}
      Tab2={text('Tab2 text', 'Tab2')}
      Tab3={text('Tab3 text', 'Tab3')}
      Tab4={text('Tab4 text', 'Tab4')}
      Tab5={text('Tab5 text', 'Tab5')}
      Tab6={text('Tab6 text', 'Tab6')}
      Tab7={text('Tab7 text', 'Tab7')}
      Tab8={text('Tab8 text', 'Tab8')}
      Tab9={text('Tab9 text', 'Tab9')}
      Tab10={text('Tab10 text', 'Tab10')}
      />
    )
  });
