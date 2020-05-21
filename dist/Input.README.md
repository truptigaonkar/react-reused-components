# Input component

| Prop        | Type                 | Description                     | Default |
| ----------- | -------------------- | ------------------------------- | ------- |
| type        | text/textarea/number | Input type text/textarea/number | null    |
| placeholder | String               | Input text/textarea placeholder | null    |
| label       | String               | Input text/textarea label       | null    |
| disabled    | Boolean              | Select disabled state.          | false   |

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

Input: text

```jsx
import React from 'react';
import { Input } from 'react-reused-components';

function App() {
  return <Input label='label' type='text' placeholder='placeholder' />;
}

export default App;
```

Input: textarea

```jsx
import React from 'react';
import { Input } from 'react-reused-components';

function App() {
  return <Input label='label' type='textarea' placeholder='placeholder' />;
}

export default App;
```

Input: number

```jsx
import React from 'react';
import { Input } from 'react-reused-components';

function App() {
  return <Input type='number' defaultValue='1' min='1' max='100' />;
}

export default App;
```
