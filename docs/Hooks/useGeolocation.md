---
sidebar_position: 4
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

## useGeolocation Hook

The `useGeolocation` hook is a custom React hook that allows you to retrieve the current geolocation of the user. It utilizes the browser's `Geolocation` API to fetch the latitude, longitude, accuracy, and timestamp of the user's location.

## Return Type

The hook returns a geolocation object of type `Geolocation` if the geolocation data is available. The `Geolocation` interface defines the structure of the geolocation object, including the following properties:

- `latitude`: The latitude coordinate of the user's location.
- `longitude`: The longitude coordinate of the user's location.
- `accuracy`: The accuracy level, in meters, of the geolocation coordinates.
- `timestamp`: The timestamp indicating when the geolocation data was retrieved.

If the geolocation API is not supported by the user's browser or the user denies the permission to access their location, the hook returns `undefined`.

### Usage:

To use the `useGeolocation` hook, import it from the appropriate module, along with the Geolocation interface. Then, call the hook within your React component to obtain the geolocation data. You can use the retrieved geolocation object to display the user's location or perform any other necessary operations in your component.

Import the `useGeolocation` hook and the `Geolocation` interface from the module:

```typescript
import { useGeolocation, Geolocation } from "zop-hooks";
```

Use the `useGeolocation` hook in your component to access the geolocation:

```typescript
function MyComponent() {
  // Call the useGeolocation hook to get the current geolocation
  const geolocation: Geolocation | undefined = useGeolocation();

  // Use the geolocation data in your component
  // ...

  return (
    // JSX for your component
  );
}

```

It's important to consider the potential privacy concerns and browser compatibility issues when using the geolocation feature. Ensure that you handle cases where the geolocation data is unavailable or when the user denies permission to access their location.

Feel free to modify and adapt this documentation according to your project's needs. Let me know if you need any further assistance!
