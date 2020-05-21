import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
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
        label={text('Text', 'Label')}
        type='text'
        placeholder='This is the placeholder'
        onChange={action('Input provided')}
        disabled={boolean('Disabled', false)}	
      />
    );
  })
  .add('Textarea', () => {
    return (
      <Input
        label={text('Text', 'Label')}
        type='textarea'
        placeholder='This is the placeholder'
        onChange={action('Input provided')}
        disabled={boolean('Disabled', false)}	
      />
    );
  })
  .add('Number', () => {
    return (
      <Input
        type='number'
        onChange={action('Input provided')}
        defaultValue='1'
        min='1'
        max='100'
        disabled={boolean('Disabled', false)}
      />
    );
  });
