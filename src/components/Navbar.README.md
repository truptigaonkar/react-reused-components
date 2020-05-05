# Navbar component

### Props

| Prop        | Type            | Description                                                                                                             | Default         |
| ----------- | --------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------- |
| text        | String          | Provide message                                                                                                         | null            |
| footerStyle | String, Element | footer--primary / footer--secondary / footer--success / footer--warning / footer--danger / footer--white / footer--dark | footer--primary |
| footerFixed | String, Element | footer--basic / footer--fixed                                                                                           | footer--basic   |

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

footer: normal

```jsx
import React from 'react';
import { Footer } from 'react-reused-components';

function App() {
  return <Footer footerStyle='footer--success'>© Copyright 2020 adfd</Footer>;
}

export default App;
```

footer: fixed-bottom

```jsx
import React from 'react';
import { Footer } from 'react-reused-components';

function App() {
  return (
    <Footer footerStyle='footer--success' footerFixed='footer--fixed'>
      © Copyright 2020 adfd
    </Footer>
  );
}

export default App;
```
