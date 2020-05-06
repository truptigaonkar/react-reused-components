# Sidebar component

### Props

| Prop                               | Type   | Description           | Default |
| ---------------------------------- | ------ | --------------------- | ------- |
| header                             | String | Header of the sidebar | null    |
| tab1/tab2/tab3/tab4/tab5/tab6/tab7 | String | tabs name             | null    |

## Installation

#### Install package from npm (https://www.npmjs.com/package/react-reused-components)

```sh
npm i react-reused-components
```

#### Install package from GitHub

```sh
npm i https://github.com/truptigaonkar/react-reused-components
```

## Example

```jsx
import React from 'react';
import { Sidebar } from 'react-reused-components';

function App() {
  return (
    <Sidebar
      src='https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg'
      header='My App'
      tab1='Dashboard'
      tab2='Shortcuts'
      tab3='Overview'
      tab4='Events'
      tab5='About'
      tab6='Services'
      tab7='Contacts'
    />
  );
}

export default App;
```
