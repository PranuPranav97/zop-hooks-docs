---
sidebar_position: 2
custom_edit_url: https://github.com/PranuPranav97/zop-hooks-docs
---

# useTimer

useTimer Hook
The useTimer hook is a custom React hook that provides a timer functionality. It allows you to start, pause, reset, and retrieve the current state and time of the timer.

### 1.Import the Hook

```typescript
import { useTimer } from "zop-hooks";
```

### 2.Initialize the timer by calling the useTimer hook:

```typescript
const timer = useTimer();
```

### 3.Use the timer properties and methods in your component:

```typescript
// Access the current time and state of the timer
const currentTime = timer.time;
const currentTimerState = timer.state;

// Start the timer
const handleStart = () => {
  timer.start();
};

// Pause the timer
const handlePause = () => {
  timer.pause();
};

// Reset the timer
const handleReset = () => {
  timer.reset();
};
```

### 4.Render the timer and buttons in your component's JSX:

```typescript
return (
  <div>
    <p>Time: {currentTime}</p>
    <p>State: {currentTimerState}</p>
    <button onClick={handleStart}>Start</button>
    <button onClick={handlePause}>Pause</button>
    <button onClick={handleReset}>Reset</button>
  </div>
);
```

## API

The useTimer hook returns an object with the following properties and methods:

- time: number - The current time of the timer.
- state: TimerState - The current state of the timer. Possible values are "idle", "running", or "paused".
- start: () => void - A function to start the timer.
- pause: () => void - A function to pause the timer.
- reset: () => void - A function to reset the timer.

## Example

Here's a complete example of using the useTimer hook in a React component:

```typescript
import React from "react";
import useTimer from "zop-hooks";

const TimerComponent = () => {
  const timer = useTimer();

  const currentTime = timer.time;
  const currentTimerState = timer.state;

  const handleStart = () => {
    timer.start();
  };

  const handlePause = () => {
    timer.pause();
  };

  const handleReset = () => {
    timer.reset();
  };

  return (
    <div>
      <p>Time: {currentTime}</p>
      <p>State: {currentTimerState}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default TimerComponent;
```

That's it! You can now use the useTimer hook in your project to add timer functionality to your components.
