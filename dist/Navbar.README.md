# Navbar component

### Props

| Prop                | Type   | Description          | Default |
| ------------------- | ------ | -------------------- | ------- |
| header              | String | Header of the navbar | null    |
| tab1/tab2/tab3/tab4 | String | tabs name            | null    |

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
import { Navbar } from 'react-reused-components';

function App() {
  return (
    <Navbar
      navbarStyle='navbar--dark'
      header='My App'
      tab1='Home'
      tab2='About'
      tab3='Portfolio'
      tab4='Contact'
    />
  );
}

export default App;
```
