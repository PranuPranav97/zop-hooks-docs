---
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useOnlineStatus

The `useOnlineStatus` hook is a custom React hook that allows you to track the online status of the user's browser.

### Usage

To use the `useOnlineStatus` hook, follow these steps:

1. Import the hook into your React component:

```typescript
import { useOnlineStatus } from "zop-hooks";
```

2. Invoke the hook in your functional component:

```typescript
const isOnline = useOnlineStatus();
```

The `isOnline` variable will be a boolean value indicating whether the user's browser is currently online (`true`) or offline (`false`).

### Example

Here's an example of how you can use the `useOnlineStatus` hook in a React component:

```typescript
import React from "react";
import { useOnlineStatus } from "./path/to/useOnlineStatus";

function OnlineStatusComponent() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <p>Online Status: {isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default OnlineStatusComponent;
```

In the above example, the `OnlineStatusComponent` component uses the `useOnlineStatus` hook to track the online status of the user's browser and display it on the screen.

### Implementation Details

The `useOnlineStatus` hook internally uses React's useState and `useEffect` hooks. It initializes the isOnline state to the initial value of `navigator.onLine`, which represents the current online status of the browser.

The `useEffect` hook is used to add event listeners for the `online` and `offline` events on the window object. When the browser goes online, the `handleOnline` function is called, updating the isOnline state to true. Conversely, when the browser goes `offline`, the `handleOffline` function is called, updating the `isOnline` state to `false`.

To clean up the event listeners when the component unmounts or the hook dependencies change, the `useEffect` hook returns a cleanup function that removes the event listeners.

Please note that this documentation assumes you have a basic understanding of React and React hooks. If you're new to React or hooks, it's recommended to read the official React documentation for more information.
