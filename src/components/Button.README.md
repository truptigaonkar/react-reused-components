# Button component

| Prop                 | Type            | Description                                                                                                                                                      | Default               |
| -------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| buttonStyle(solid)   | String, Element | btn--primary--solid / btn--secondary--solid / btn--success--solid / btn--warning--solid / btn--danger--solid / btn--info--solid / btn--dark--solid               | btn--primary--solid   |
| buttonStyle(outline) | String, Element | btn--primary--outline / btn--secondary--outline / btn--success--outline / btn--warning--outline / btn--danger--outline / btn--info--outline / btn--dark--outline | btn--primary--outline |
| buttonSize           | String          | small/large/block                                                                                                                                                | small                 |
| disabled             | Boolean         | Select disabled state.                                                                                                                                           | false                 |

## Example

Button: solid

```jsx
import React from 'react';
import { Button } from 'react-reused-components';

function App() {
  return (
    <Button buttonStyle='btn--success--solid' buttonSize='block'>
      Solid Button
    </Button>
  );
}

export default App;
```

Button: outline

```jsx
import React from 'react';
import { Button } from 'react-reused-components';

function App() {
  return (
    <Button buttonStyle='btn--success--outline' buttonSize='block'>
      Outline Button
    </Button>
  );
}

export default App;
```
