import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import Readme from './Modal.README.md';
import { addReadme } from 'storybook-readme';
import Modal from './Modal';
import { create } from '@storybook/theming';
import Button from './Button';

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
    const [status, setStatus] = useState(false);
    return (
      <div>
        {status && (
          <Modal closeModal={() => setStatus(false)}>
            <p>{text('Modal content', 'The content of the modal')}</p>
          </Modal>
        )}
        <div className='container'>
          <Button onClick={() => setStatus(true)}>{text('Button text', 'Open Modal')}</Button>
        </div>
      </div>
    );
  });
