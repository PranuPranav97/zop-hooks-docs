---
sidebar_position: 1
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

# useClipboard

A custom React hook that allows you to retrieve the content from the user's clipboard.

### Usage

Import the useClipboard hook into your component:

```typescript
import { useClipboard } from "zop-hooks";
```

### Implement the hook in your functional component:

```typescript
import { useClipboard } from "zop-hooks";

function MyComponent() {
  const clipboardContent = useClipboard();

  // Use the clipboardContent in your component logic...

  return (
    // JSX code here...
  );
}
```

The clipboardContent variable will contain the text content of the user's clipboard.

### Return Value

The `useClipboard` hook returns the content of the clipboard as a string, or undefined if the clipboard is empty or if the browser does not support the Clipboard API.

### Example

Here's an example of how you can use the `useClipboard` hook:

```typescript
import { useState, useEffect } from "react";

function useClipboard() {
  const [clipboardContent, setClipboardContent] = useState<
    string | undefined
  >();

  useEffect(() => {
    async function getClipboardContent() {
      try {
        const clipboardContent = await navigator.clipboard.readText();
        setClipboardContent(clipboardContent);
      } catch (error) {
        console.error(error);
      }
    }

    if ("clipboard" in navigator) {
      getClipboardContent();
    }
  }, []);

  return clipboardContent;
}

export { useClipboard };
```

In the above example, the hook uses the useState and useEffect hooks from React to manage the state of the clipboard content and retrieve it asynchronously. The getClipboardContent function is called only once when the component mounts (empty dependency array []), and it checks if the browser supports the Clipboard API before attempting to read the clipboard's content.

Please note that this hook requires the user's explicit permission to access the clipboard. Additionally, it relies on the availability of the Clipboard API, which may not be supported in all browsers or environments.

Feel free to modify and adapt this documentation according to your project's needs. Let me know if you need any further assistance!
