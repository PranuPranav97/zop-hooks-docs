---
sidebar_position: 1
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

# useCountdownTimer

The `useCountdownTimer` hook is a custom React hook that creates a countdown timer.

### Usage

To use the `useCountdownTimer` hook, follow these steps:
Import the hook:

```typescript
import { useCountdownTimer } from "./useCountdownTimer";
```

Call the `useCountdownTimer` hook within your functional component, passing the `duration` prop as an object:

```typescript
const { remainingTime, formattedTime } = useCountdownTimer({ duration: 60 });
```

You can access the `remainingTime` and `formattedTime` variables returned by the hook:

- `remainingTime` (number): The remaining time in seconds.
- `formattedTime` (string): The remaining time formatted as "HH:MM:SS".

### Example

Here's an example of how you can use the `useCountdownTimer` hook in a React component:

```typescript
import React from "react";
import { useCountdownTimer } from "./useCountdownTimer";

const CountdownTimerComponent = () => {
  const { remainingTime, formattedTime } = useCountdownTimer({ duration: 120 });

  return (
    <div>
      <p>Remaining Time: {formattedTime}</p>
      <p>Seconds Left: {remainingTime}</p>
    </div>
  );
};

export default CountdownTimerComponent;
```

In the example above, the `CountdownTimer` component uses the `useCountdownTimer` hook to create a countdown timer with a duration of 120 seconds. The remaining time and formatted time are displayed in the component.

### Customization

You can customize the `formatTime` function within the `useCountdownTimer` hook to modify the time format according to your requirements.

Make sure to import the `useCountdownTimer` hook correctly based on your project structure.

I hope this documentation helps! Let me know if you have any further questions.
