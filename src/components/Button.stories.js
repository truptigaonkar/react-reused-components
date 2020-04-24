import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, boolean } from '@storybook/addon-knobs';
import Readme from './README.md';
import { addReadme } from 'storybook-readme';
import { action } from '@storybook/addon-actions';
import Button from './Button';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Button', module)
  .addParameters({
    options: {
      showPanel: true,
      panelPosition: 'bottom',
      theme: basicTheme,
    },
    readme: { sidebar: Readme, theme: {}, codeTheme: 'github' },
  })
  .addDecorator(addReadme)
  .add('Solid Button', () => {
    return (
      <Button
        onClick={action('Solid Button clicked')}
        buttonStyle={select(
          'Style',
          [
            'btn--primary--solid',
            'btn--secondary--solid',
            'btn--success--solid',
            'btn--warning--solid',
            'btn--danger--solid',
          ],
          'btn--primary--solid'
        )}
        buttonSize={select(
          'Size',
          [
            'small',
            'large',
            'block'
          ],
          'small'
        )}
        disabled={boolean('Disabled', false)}
      >
        {text('Text', 'button')}
      </Button>
    );
  })
  .add('Outline Button', () => {
    return (
      <Button
        onClick={action('Button clicked')}
        buttonStyle={select(
          'Style',
          [
            'btn--primary--outline',
            'btn--secondary--outline',
            'btn--success--outline',
            'btn--warning--outline',
            'btn--danger--outline',
          ],
          'btn--primary--outline'
        )}
        buttonSize={select(
          'Size',
          [
            'small',
            'large',
            'block'
          ],
          'small'
        )}
        disabled={boolean('Disabled', false)}
      >
        {text('Text', 'button')}
      </Button>
    );
  });


