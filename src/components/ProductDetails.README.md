# Product Details component

| Prop         | Type   | Description                         | Default |
| ------------ | ------ | ----------------------------------- | ------- |
| src          | img    | Product image souce                 | null    |
| productTitle | String | Product title                       | null    |
| productPrice | String | Product Price                       | null    |
| description  | String | Product Description                 | null    |
| defaultValue | number | Default value for input type:number | 1       |
| min          | number | minimum value for input type:number | 1       |
| max          | number | maximum value for input type:number | 100     |

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
import { ProductDetails } from 'react-reused-components';

function App() {
  return (
    <ProductDetails
      src='https://dlinkmea.com/images/product/9397-DTB-1188GN_Front.jpg'
      productTitle='Tablet'
      productPrice='1000 SEK'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book'
      defaultValue='1'
      min='1'
      max='100'
    />
  );
}

export default App;
```
