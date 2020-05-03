import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Readme from './Modal.README.md';
import { addReadme } from 'storybook-readme';
import Modal from './Modal';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Modal', module)
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
     <Modal 
        content={text('Modal Text', 'This is the modal content')}     
     >
      {text('Button text', 'Open modal')} 
     </Modal> 
    );
  });
