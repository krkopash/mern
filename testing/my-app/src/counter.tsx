import { useState } from 'react';

const SimpleCounter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h2>Counter Value: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default SimpleCounter;
