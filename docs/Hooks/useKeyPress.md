---
sidebar_position: 2
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useKeyPress

A custom React hook that allows you to detect if a specific key is currently pressed.

### Usage

Import the `useKeyPress` hook and `KeyboardCharacter` enum into your component:

```typescript
import { useKeyPress, KeyboardCharacter } from "zop-hooks";
```

Implement the hook in your functional component:

```typescript
import { useKeyPress,KeyboardCharacter } from "zop-hooks";
function MyComponent() {
  const isKeyPressed = useKeyPress(KeyboardCharacter.TargetKey);

  // Use the isKeyPressed value in your component logic...

  return (
    // JSX code here...
  );
}

```

Replace `KeyboardCharacter.TargetKey` with the specific keyboard key you want to detect. You can use the values defined in the `KeyboardCharacter` enum.

You can access the `isKeyPressed` value in your component logic and use it to conditionally render components, trigger actions, or perform any other desired functionality based on the key press state.

Make sure to provide the correct `KeyboardCharacter` value as the targetKey when using the `useKeyPress` hook.

You can use the enum provided by the `zop-hooks` to specify the keys.
The enum declaration is:

```typescript
enum KeyboardCharacter {
  A = "a",
  B = "b",
  C = "c",
  D = "d",
  E = "e",
  F = "f",
  G = "g",
  H = "h",
  I = "i",
  J = "j",
  K = "k",
  L = "l",
  M = "m",
  N = "n",
  O = "o",
  P = "p",
  Q = "q",
  R = "r",
  S = "s",
  T = "t",
  U = "u",
  V = "v",
  W = "w",
  X = "x",
  Y = "y",
  Z = "z",
  Zero = "0",
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4",
  Five = "5",
  Six = "6",
  Seven = "7",
  Eight = "8",
  Nine = "9",
  Space = " ",
  Enter = "Enter",
  Tab = "Tab",
  Escape = "Escape",
  Backspace = "Backspace",
  ArrowUp = "ArrowUp",
  ArrowDown = "ArrowDown",
  ArrowLeft = "ArrowLeft",
  ArrowRight = "ArrowRight",
  Shift = "Shift",
  Control = "Control",
  Alt = "Alt",
  Meta = "Meta",
  CapsLock = "CapsLock",
  F1 = "F1",
  F2 = "F2",
  F3 = "F3",
  F4 = "F4",
  F5 = "F5",
  F6 = "F6",
  F7 = "F7",
  F8 = "F8",
  F9 = "F9",
  F10 = "F10",
  F11 = "F11",
  F12 = "F12",
}
```

### Return Value

The useKeyPress hook returns a boolean value indicating whether the specified key is currently pressed (`true`) or not pressed (`false`).

Feel free to modify and adapt this documentation according to your project's needs. Let me know if you need any further assistance!
