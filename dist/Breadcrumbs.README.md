# Breadcrumbs component

### Props

| Prop                | Type   | Description          | Default |
| ------------------- | ------ | -------------------- | ------- |
| tab1/tab2/tab3/tab4 | String | tabs name            | null    |


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
import { Breadcrumbs } from 'react-reused-components';

function App() {
  return (
    <Breadcrumbs
      tab1='About'
      tab2='Portfolio'
      tab3='Contact'
    />
  );
}

export default App;
```
