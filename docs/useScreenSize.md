---
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useScreenSize

The `useScreenSize` hook is a custom React hook that allows you to get the current width and height of the screen dynamically. It automatically updates the screen size whenever the window is resized.

### Usage

```typescript
import { useState, useEffect } from "react";

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
}

export { useScreenSize };
```

To use the `useScreenSize` hook, follow these steps:

Import the hook and any other necessary dependencies:

```typescript
import { useScreenSize } from "zop-hooks";
```

Invoke the `useScreenSize` hook within a functional component:

```typescript
function MyComponent() {
  const screenSize = useScreenSize();

  // Access the screen size values
  const width = screenSize.width;
  const height = screenSize.height;

  // Rest of your component code
  // ...
}
```

### Return Value

The `useScreenSize` hook returns an object containing the current screen size:

- width (number): The current width of the screen in pixels.
- height (number): The current height of the screen in pixels.

### Example

Here's an example of how you can use the useScreenSize hook in a functional component:

```typescript
import { useScreenSize } from "zop-hooks";

function MyComponent() {
  const screenSize = useScreenSize();

  // Access the screen size values
  const width = screenSize.width;
  const height = screenSize.height;

  return (
    <div>
      <p>Screen Width: {width}px</p>
      <p>Screen Height: {height}px</p>
    </div>
  );
}
```

In this example, the component displays the current screen width and height in pixels.

### Notes

- The `useScreenSize` hook uses the `useState` and `useEffect` hooks from React to manage state and perform side effects respectively.
- The initial screen size is obtained when the hook is first invoked, but subsequent updates are triggered only when the window is resized. This optimization helps reduce unnecessary re-renders.
- The event listener for window resize is added and removed in the useEffect hook's cleanup function to ensure proper handling of the event.

Remember to include the necessary import statements and adjust the file paths accordingly when using the `useScreenSize` hook in your project.

That's it! You can now utilize the `useScreenSize` hook to get the current screen size in your React components.
