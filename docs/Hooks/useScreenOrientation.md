---
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useScreenOrientation

The `useScreenOrientation` hook is a custom React hook that allows you to retrieve the current orientation of the screen. It utilizes the` window.screen.orientation` API and the `orientationchange` event to provide the orientation value.

### Usage

To use the `useScreenOrientation` hook, follow these steps:

Import the `useScreenOrientation` hook and the ScreenOrientation enum in your React component:

```typescript
import { useScreenOrientation, ScreenOrientation } from "zop-hooks";
```

Call the `useScreenOrientation` hook within your functional component to retrieve the screen orientation:

```typescript
const orientation = useScreenOrientation();
```

```typescript
const orientation = useScreenOrientation();
```

The orientation variable will hold the current screen orientation value, which will be one of the values from the ScreenOrientation enum.

### Example

Here's an example of how you can use the `useScreenOrientation` hook in a React component:

```typescript
import React from "react";
import { useScreenOrientation, ScreenOrientation } from "zop-hooks";

function MyComponent() {
  const orientation = useScreenOrientation();

  return (
    <div>
      <p>Screen Orientation: {orientation}</p>
    </div>
  );
}
```

In the example above, the `MyComponent` functional component uses the `useScreenOrientation` hook to retrieve the screen orientation. The orientation value is then displayed in the component's output.
