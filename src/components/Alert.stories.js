import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text } from '@storybook/addon-knobs';
import Readme from './Alert.README.md';
import { addReadme } from 'storybook-readme';
import Alert from './Alert';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Alert', module)
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
      <Alert
      alertStyle={select(
        'Style',
        [
          'alert--primary',
          'alert--secondary',
          'alert--success',
          'alert--warning',
          'alert--danger',
          'alert--info',
          'alert--white',
          'alert--dark',
        ],
        'alert--primary'
      ) 
    } 
      >
        {text('Text', ' Alert text ')}
      </Alert>
    )
  });
