# Card component

### Props

| Prop         | Type          | Description         | Default |
| ------------ | ------------- | ------------------- | ------- |
| productTitle | String        | Product Title       | null    |
| productPrice | String/Number | Product Pricer      | null    |
| src          | img           | Product image souce | null    |

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
import { Card } from 'react-reused-components';

function App() {
  return (
    <Card
      productTitle='cold fashion'
      productPrice='6666'
      src='https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412550/E-commerce%20landing%20page/products-showcase/product-4-img_3x.jpg'
    >
      Buy Now
    </Card>
  );
}

export default App;
```
