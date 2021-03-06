import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';
import Readme from './Sidebar.README.md';
import { addReadme } from 'storybook-readme';
import Sidebar from './Sidebar';
import { create } from '@storybook/theming';

const basicTheme = create({
  base: 'light',
  brandUrl: 'https://github.com/tuchk4/storybook-readme',
  brandImage: null,
});

storiesOf('Sidebar', module)
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
      <Sidebar 
      src={select(
        'Background image',
        [
          "https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg",
          "https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/suit-collections/suit-collection-img_3x.jpg",
          "https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412556/E-commerce%20landing%20page/summer-collection/cold-fashion-man-women_3x.jpg"
        ],
        'https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg'
      ) 
    }
        header={text('Header text', 'My App')}
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
    );
  });
