import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Readme from './Input.README.md';
import { addReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import Input from './Input';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Input', module)
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
      <Input
        type='text'
        placeholder='Enter text'
        onChange={action('Input provided')}
        label={text('Text', 'Label')}
      />
    );
  })
  ;
