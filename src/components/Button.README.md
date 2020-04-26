# Button component

| Prop        | Type            | Description                                                                                          | Default             |
| ----------- | --------------- | ---------------------------------------------------------------------------------------------------- | ------------------- |
| buttonStyle | String, Element | btn--primary--solid/btn--secondary--solid/btn--success--solid/btn--warning--solid/btn--danger--solid | btn--primary--solid |
| buttonSize  | String          | small/large/block                                                                                    | small               |

## Example

```jsx
import React from 'react';
import { Button } from 'react-reused-components';

function App() {
  return (
    <Button buttonStyle='btn--success--solid' buttonSize='block'>
      Button
    </Button>
  );
}

export default App;
```
