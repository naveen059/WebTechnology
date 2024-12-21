import React, { useState } from 'react';

const StateManagement = () => {
  // useState example

  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>State Management</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default StateManagement;