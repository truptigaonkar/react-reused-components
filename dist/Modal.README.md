# Modal component

### Props

| Prop     | Type   | Description          | Default |
| -------- | ------ | -------------------- | ------- |
| content  | String | Content of the modal | null    |
| children | String | Text of the button   | null    |

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
import { Modal } from 'react-reused-components';

function App() {
  return <Modal content='This is the modal content'>Open modal</Modal>;
}

export default App;
```
