'use client';

import { useState } from 'react';

export function CounterClient() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((v) => v + 1)}>Click me</button>
    </>
  );
}
