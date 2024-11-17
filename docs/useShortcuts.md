# `useShortcuts`

The `useShortcuts` hook provides an easy way to detect and respond to custom keyboard shortcuts in your React application. It listens for a specified combination of keys and executes a callback function when the combination is triggered.

---

## Features

- Detects key combinations (e.g., `Ctrl+S`, `Shift+Alt+X`).
- Case-insensitive key matching.
- Prevents default browser behavior for custom shortcuts.
- Cleans up event listeners and internal state on component unmount.
- Works seamlessly with React functional components.

---

## Basic Example

Detect and respond to a Ctrl+S shortcut:

```typescript
import React from "react";
import { useShortcuts, KeyboardCharacter } from "zop-hooks";

const MyComponent = () => {
  useShortcuts([KeyboardCharacter.Control, KeyboardCharacter.S], () => {
    alert("Ctrl+S was pressed!");
  });

  return <div>Press Ctrl+S to save.</div>;
};

export default MyComponent;
```

## Complex Example

Handling multiple shortcuts in the same component:

```typescript
import React from "react";
import { useShortcuts, KeyboardCharacter } from "zop-hooks";

const MultiShortcutComponent = () => {
  useShortcuts([KeyboardCharacter.Control, KeyboardCharacter.S], () => {
    alert("Save triggered!");
  });

  useShortcuts([KeyboardCharacter.Control, KeyboardCharacter.P], () => {
    alert("Print triggered!");
  });

  return (
    <div>
      <p>Press Ctrl+S to save.</p>
      <p>Press Ctrl+P to print.</p>
    </div>
  );
};

export default MultiShortcutComponent;
```

### API

```typescript
useShortcuts(KeyboardCharacter[]], callback);
```

#### Returns

`null`: The hook does not return a value.

### Key Behavior

1. Key Matching: Detects keys regardless of case (e.g., Shift, SHIFT, shift are equivalent).
2. Event Prevention: Uses event.preventDefault() to block default browser behavior for shortcuts like Ctrl+S.
3. State Management: Tracks active keys internally using a Set. Resets the state after the callback executes.

### Troubleshooting

#### Callback Not Triggering

1. Ensure the keys array contains all required keys in the correct order.
2. Verify that the keys are correctly spelled (case-insensitivity applies).

#### Shortcut Conflict

Browser shortcuts like Ctrl+S may interfere. useShortcuts prevents the default behavior, but conflicts might arise with other libraries or browser extensions.

#### Missing Cleanup

Ensure the component using useShortcuts unmounts properly. The hook automatically cleans up event listeners.

### Testing Your Shortcuts

To verify your shortcuts, add a `console.log` inside the callback function to confirm detection:

```typescript
useShortcuts(["Shift", "A"], () => {
  console.log("Shift+A detected");
});
```
