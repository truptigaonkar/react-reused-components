# React Reused Components

React reusable components is a React component library that can be used multiple times in your application. Repository set up using react, storybook.
You can also try `React Reused Components` live on [demo](https://truptigaonkar.github.io/react-reused-components-usage/).

- Alert
- Button
- Card
- Cart
- Footer
- Header
- Input
- Modal
- Product Details
- Sidebar
- Navbar

## Install and Run

```
npm install
npm start / npm run start / npm run storybook
```

## Usage

`React Reused Components` are served as an [npm package](https://www.npmjs.com/package/react-reused-components).

How to Install as an NPM module

```
npm install react-reused-components
```

### Example

Button: solid

```jsx
import React from 'react';
import { Button } from 'react-reused-components';

function App() {
  return (
    <Button buttonStyle='btn--primary--solid' buttonSize='block'>
      Solid Button
    </Button>
  );
}

export default App;
```

Button: outline

```jsx
import React from 'react';
import { Button } from 'react-reused-components';

function App() {
  return (
    <Button buttonStyle='btn--secondary--outline' buttonSize='block'>
      Outline Button
    </Button>
  );
}

export default App;
```
