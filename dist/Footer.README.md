# Input component

### Props

| Prop  | Type            | Description                                                                      | Default         |
| ----- | --------------- | -------------------------------------------------------------------------------- | --------------- |
| text  | String          | Provide message                                                                  | null            |
| style | String, Element | footer--primary/footer--secondary/footer--success/footer--warning/footer--danger | footer--primary |

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
import { Footer } from 'react-reused-components';

function App() {
  return <Footer style='btn--success--solid'>© Copyright 2020</Footer>;
}

export default App;
```
