# Modal component

### Props

| Prop       | Type            | Description                                                                                                                   | Default        |
| ---------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------- | -------------- |
| text       | String          | Provide message                                                                                                               | null           |
| alertStyle | String, Element | alert--primary / alert--secondary / alert--success / alert--warning / alert--danger / alert--info /alert--white / alert--dark | alert--primary |

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
  return (
    <Modal>Modal body</Modal>
  );
}

export default App;
```
