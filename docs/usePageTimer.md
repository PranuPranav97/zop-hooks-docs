---
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## usePageTimer

The `usePageTimer` hook is a custom React hook that allows you to measure the time spent on a page. It returns the amount of time in seconds that has elapsed since the component using the hook was mounted.

### Usage

To use the `usePageTimer` hook, follow these steps:

Import the hook:

```typescript
import { usePageTimer } from "zop-hooks";
```

Use the hooks in your component like:

```typescript
import React from "react";
import { usePageTimer } from "./usePageTimer";

function MyComponent() {
  const timeSpent = usePageTimer();

  // Render the time spent on the page
  return <div>Time spent: {timeSpent} seconds</div>;
}
```

### Example

```typescript
import React from "react";
import { usePageTimer } from "./usePageTimer";

function MyComponent() {
  const timeSpent = usePageTimer();

  return <div>Time spent on this page: {timeSpent} seconds</div>;
}
```

In this example, the `timeSpent` value returned by the `usePageTimer` hook is rendered in a `div` element to display the time spent on the page.

That's it! You can now use the `usePageTimer` hook to measure the time spent on a page in your React components.
