import React, { useState, useMemo } from 'react';

const ExpensiveCalculation = () => {
  const [number, setNumber] = useState(1);
  const [input, setInput] = useState('');

  // UseMemo Example
  const factorial = useMemo(() => {
    console.log('Calculating factorial...');
    const calculateFactorial = (n) => {
      if (n <= 1) return 1;
      return n * calculateFactorial(n - 1);
    };
    return calculateFactorial(number);
  }, [number]);

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Type something"
      />
      <p>Number: {number}</p>
      <p>Factorial: {factorial}</p>
      <button onClick={() => setNumber((prev) => prev + 1)}>Increment</button>
      <button onClick={() => setNumber((prev) => Math.max(prev - 1, 1))}>
        Decrement
      </button>
    </div>
  );
};

export default ExpensiveCalculation;
