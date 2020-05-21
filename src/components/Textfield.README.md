# Textfield component

| Prop        | Type          | Description                         | Default |
| ----------- | ------------- | ----------------------------------- | ------- |
| type        | text/textarea | Textfield type text/textarea        | null    |
| placeholder | String        | Textfield text/textarea placeholder | null    |
| label       | String        | Textfield text/textarea label       | null    |
| disabled    | Boolean       | Select disabled state.              | false   |

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
import { Textfield } from 'react-reused-components';

function App() {
  return <Textfield type='text' placeholder='placeholder' label='label' />;
}

export default App;
```
