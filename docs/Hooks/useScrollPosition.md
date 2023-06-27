---
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useScrollPosition

The `useScrollPosition` hook is a custom React hook that allows you to get the current scroll position of the window. It provides the x and y coordinates of the scroll position and updates them whenever the window is scrolled.

### Usage

Import the hook and any other necessary dependencies:

```typescript
import { useScrollPosition } from "zop-hooks";
```

Invoke the `useScrollPosition` hook within a functional component:

```typescript
function MyComponent() {
  const scrollPosition = useScrollPosition();

  // Access the scroll position values
  const scrollX = scrollPosition.x;
  const scrollY = scrollPosition.y;

  // Rest of your component code
  // ...
}
```

### Return Value

The `useScrollPosition` hook returns an object containing the current scroll position:

-`x` (number): The current horizontal scroll position in pixels.

-`y` (number): The current vertical scroll position in pixels.

### Example

Here's an example of how you can use the `useScrollPosition` hook in a functional component:

```typescript
import { useScrollPosition } from "zop-hooks";

function MyComponent() {
  const scrollPosition = useScrollPosition();

  // Access the scroll position values
  const scrollX = scrollPosition.x;
  const scrollY = scrollPosition.y;

  return (
    <div>
      <p>Scroll X: {scrollX}px</p>
      <p>Scroll Y: {scrollY}px</p>
    </div>
  );
}
```

In this example, the component displays the current horizontal and vertical scroll positions in pixels.

### Notes

- The `useScrollPosition` hook uses the `useState` and `useEffect` hooks from React to manage state and perform side effects respectively.
- The initial scroll position is obtained when the hook is first invoked, but subsequent updates are triggered only when the window is scrolled. This optimization helps reduce unnecessary re-renders.
- The event listener for window scroll is added and removed in the `useEffect` hook's cleanup function to ensure proper handling of the event.

Remember to include the necessary import statements and adjust the file paths accordingly when using the `useScrollPosition` hook in your project.

That's it! You can now utilize the `useScrollPosition` hook to get the current scroll position in your React components.
