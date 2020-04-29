# Header component

### Props

| Prop        | Type   | Description          | Default |
| ----------- | ------ | -------------------- | ------- |
| src         | String | Image                | null    |
| heading     | String | Provide heading      | null    |
| mainHeading | String | Provide main heading | null    |
| description | String | Provide description  | null    |
| Button      | props  | Button               | null    |

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
import { Header } from 'react-reused-components';

function App() {
  return (
    <Header
      src='https://res.cloudinary.com/de8cuyd0n/image/upload/v1520412561/E-commerce%20landing%20page/header/header-image_3x.jpg'
      heading='Electronic collection 2020'
      mainHeading='welcome to brandy unique store'
      description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    >
      shop now
    </Header>
  );
}

export default App;
```
