import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Readme from './Textfield.README.md';
import { addReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import Textfield from './Textfield';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Textfield', module)
  .addParameters({
    options: {
      showPanel: true,
      panelPosition: 'bottom',
      theme: basicTheme,
    },
    readme: { sidebar: Readme, theme: {}, codeTheme: 'github' },
  })
  .addDecorator(addReadme)
  .add('Text', () => {
    return (
      <Textfield
        type='text'
        placeholder='Enter text'
        onChange={action('Textfield provided')}
        label={text('Text', 'Label')}
      />
    );
  })
  ;