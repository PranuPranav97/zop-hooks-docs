---
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useMousePosition

The `useMousePosition` hook is a custom React hook that allows you to track the current position of the mouse cursor on the screen.

### Usage

To use the `useMousePosition` hook, follow these steps:

Import the hook into your React component:

```typescript
import { useMousePosition } from "zop-hooks";
```

Invoke the hook in your functional component:

```typescript
const mousePosition = useMousePosition();
```

The `mousePosition` object will contain the current coordinates of the mouse cursor.

### Example

Here's an example of how you can use the `useMousePosition` hook in a React component:

```typescript
import React from "react";
import { useMousePosition } from "zop-hooks";

function MousePositionComponent() {
  const mousePosition = useMousePosition();

  return (
    <div>
      <p>Mouse X: {mousePosition.x}</p>
      <p>Mouse Y: {mousePosition.y}</p>
    </div>
  );
}

export default MousePositionComponent;
```

In the above example, the MousePositionComponent component uses the `useMousePosition` hook to track the mouse position and display it on the screen.

### Implementation Details

The `useMousePosition` hook internally uses React's useState and `useEffect` hooks. It initializes the `mousePosition` state to { x: 0, y: 0 } and updates it whenever the mouse moves.

The `useEffect` hook is used to add an event listener to the mousemove event on the window object. The event listener updates the `mousePosition` state with the current mouse coordinates (e.clientX and e.clientY).

To clean up the event listener when the component unmounts or the hook dependencies change, the `useEffect` hook returns a cleanup function that removes the event listener.

Please note that this documentation assumes you have a basic understanding of React and React hooks. If you're new to React or hooks, it's recommended to read the official React documentation for more information.
