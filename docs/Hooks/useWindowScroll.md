---
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useWindowScroll

The `useWindowScroll` hook is a custom React hook that allows you to get the current vertical scroll position of the window. It provides the scroll position as a single value (`scrollY`) and updates it whenever the window is scrolled.

### Usage

```typescript
import { useState, useEffect } from "react";

function useWindowScroll() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleWindowScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleWindowScroll);

    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  return scrollY;
}

export { useWindowScroll };
```

To use the `useWindowScroll` hook, follow these steps:

Import the hook and any other necessary dependencies:

```typescript
import { useWindowScroll } from "zop-hooks";
```

Invoke the `useWindowScroll` hook within a functional component:

```typescript
function MyComponent() {
  const scrollY = useWindowScroll();

  // Access the scroll position value
  // scrollY represents the vertical scroll position

  // Rest of your component code
  // ...
}
```

### Return Value

The `useWindowScroll` hook returns the current vertical scroll position (`scrollY`) as a number.

### Example

Here's an example of how you can use the `useWindowScroll` hook in a functional component:

```typescript
import { useWindowScroll } from "./path/to/useWindowScroll";

function MyComponent() {
  const scrollY = useWindowScroll();

  return (
    <div>
      <p>Scroll Y: {scrollY}px</p>
    </div>
  );
}
```

In this example, the component displays the current vertical scroll position of the window in pixels.

### Notes

- The `useWindowScroll` hook uses the `useState` and `useEffect` hooks from React to manage state and perform side effects, respectively.
- The initial scroll position is obtained when the hook is first invoked, but subsequent updates are triggered only when the window is scrolled. This optimization helps reduce unnecessary re-renders.
- The event listener for window scroll is added and removed in the `useEffect` hook's cleanup function to ensure proper handling of the event.

Remember to include the necessary import statements and adjust the file paths accordingly when using the `useWindowScroll` hook in your project.

That's it! You can now utilize the `useWindowScroll` hook to get the current vertical scroll position of the window in your React components.
