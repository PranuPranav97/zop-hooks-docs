---
sidebar_position: 3
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

# useDeviceType

A custom React hook that allows you to determine the type of device based on the user agent.

### Usage

Import the useDeviceType hook and the DeviceType enum into your component:

```typescript
import { useDeviceType, DeviceType } from "zop-hooks";
```

Implement the hook in your functional component:

```typescript
function MyComponent() {
  const deviceType = useDeviceType();

  // Use the deviceType in your component logic...

  return (
    // JSX code here...
  );
}

```

The deviceType variable will contain the determined device type as a string based on the user agent.

### Return Value

The useDeviceType hook returns the determined device type as a string. The possible device types are defined in the DeviceType enum.

### DeviceType Enum

The DeviceType enum provides the following device type values:

- Android: Represents an Android device.
- WebOs: Represents a webOS device.
- Iphone: Represents an iPhone device.
- Ipad: Represents an iPad device.
- Ipod: Represents an iPod device.
- BlackBerry: Represents a BlackBerry device.
- WindowsPhone: Represents a Windows Phone device.
- Desktop: Represents a desktop device.

You can use the `DeviceType` enum to compare the returned `deviceType` value and perform specific actions based on the device type.

### Example

Here's an example of how you can use the `useDeviceType` hook and the `DeviceType` enum:

```typescript
import { useState, useEffect } from "react";

enum DeviceType {
  Android = "Android",
  WebOs = "webOS",
  Iphone = "iPhone",
  Ipad = "iPad",
  Ipod = "iPod",
  BlackBerry = "BlackBerry",
  WindowsPhone = "Windows Phone",
  Desktop = "Desktop",
}

function useDeviceType() {
  const [deviceType, setDeviceType] = useState<string>("");

  useEffect(() => {
    const userAgent = navigator.userAgent;
    if (userAgent.match(/Android/i)) {
      setDeviceType(DeviceType.Android);
    } else if (userAgent.match(/webOS/i)) {
      setDeviceType(DeviceType.WebOs);
    } else if (userAgent.match(/iPhone/i)) {
      setDeviceType(DeviceType.Iphone);
    } else if (userAgent.match(/iPad/i)) {
      setDeviceType(DeviceType.Ipad);
    } else if (userAgent.match(/iPod/i)) {
      setDeviceType(DeviceType.Ipod);
    } else if (userAgent.match(/BlackBerry/i)) {
      setDeviceType(DeviceType.BlackBerry);
    } else if (userAgent.match(/Windows Phone/i)) {
      setDeviceType(DeviceType.WindowsPhone);
    } else {
      setDeviceType(DeviceType.Desktop);
    }
  }, []);

  return deviceType;
}

export { useDeviceType, DeviceType };
```

In the above example, the useDeviceType hook determines the device type by checking the user agent string using regular expressions. The device type is set using the useState hook and updated in the `useEffect` hook when the component mounts (empty dependency array `[]`).

You can access the determined device type using the `deviceType` variable in your component logic and utilize it as needed.

Feel free to modify and adapt this documentation according to your project's needs. Let me know if you need any further assistance!
