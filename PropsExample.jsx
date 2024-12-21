import React from 'react';

const ChildComponent = ({ message }) => <h2>{message}</h2>;

const PropsExample = () => {
  return (
    <div>
      <h1>Props Example</h1>
      <ChildComponent message="Hello from Props!" />
    </div>
  );
};

export default PropsExample;