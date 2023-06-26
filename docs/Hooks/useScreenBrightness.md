---
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useScreenBrightness

The `useScreenBrightness` hook is a custom React hook that allows you to get the current screen brightness of a device. It utilizes the `window.screen` API and the devicelight event to provide the brightness value.

### Usage

To use the `useScreenBrightness` hook, follow these steps:

Import the `useScreenBrightness` hook in your React component:

```typescript
import { useScreenBrightness } from "zop-hooks";
```

Call the `useScreenBrightness` hook within your functional component to retrieve the screen brightness value:

```typescript
const brightness = useScreenBrightness();
```

The `brightness` variable will hold the current screen brightness value.

### Example

Here's an example of how you can use the `useScreenBrightness` hook in a React component:

```typescript
import React from "react";
import { useScreenBrightness } from "./useScreenBrightness";

function MyComponent() {
  const brightness = useScreenBrightness();

  return (
    <div>
      <p>Screen Brightness: {brightness}</p>
    </div>
  );
}
```

In the example above, the `MyComponent` functional component uses the `useScreenBrightness` hook to retrieve the screen brightness value. The brightness value is then displayed in the component's output.
