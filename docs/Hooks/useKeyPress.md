---
sidebar_position: 2
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useKeyPress

A custom React hook that allows you to detect if a specific key is currently pressed.

### Usage

Import the `useKeyPress` hook into your component:

```typescript
import { useKeyPress } from "zop-hooks";
```

Implement the hook in your functional component:

```typescript
import { useKeyPress } from "zop-hooks";
function MyComponent() {
  const isKeyPressed = useKeyPress(targetKey);

  // Use the isKeyPressed value in your component logic...

  return (
    // JSX code here...
  );
}
```

Replace `targetKey` with the key you want to detect. The key can be specified as a string or one of the key constants provided by the KeyboardEvent interface (e.g., 'Enter', 'Escape', 'ArrowUp', etc.).
