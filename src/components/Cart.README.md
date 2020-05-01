# Cart component

### Props

| Prop         | Type   | Description         | Default |
| ------------ | ------ | ------------------- | ------- |
| cartLength   | Number | Cart lenght         | null    |
| src          | img    | Product image souce | null    |
| title | String | Product title       | null    |
| price | Number | Product Price       | null    |
| quantity  | Number | Product Description | null    |

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
import { Cart } from 'react-reused-components';

function App() {
  return (
    <Cart 
      cartLength="1"
      src="https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg"
      title="Tablet"
      price="400"
      quantity="4"
    />
  );
}

export default App;
```
