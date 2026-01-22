
import React, { useState, useMemo } from 'react';


const expensiveCalculationA = (num: number): number => {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
};

const expensiveCalculationB = (num: number): number => {
  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += num;
  }
  return result;
};

const Usememo: React.FC = () => {
  const [countA, setCountA] = useState<number>(0);
  const [countB, setCountB] = useState<number>(0);

  const memoizedValueA = useMemo(() => expensiveCalculationA(countA), [countA]);

  const memoizedValueB = useMemo(() => expensiveCalculationB(countB), [countB]);

  return (
    <div className='card'>
      <div className='box'>
      <h1>useMemo </h1>

      <div>
        <h4>Calculation A (Slower): {countA}</h4>
        <button onClick={() => setCountA(countA + 1)}>Increment Count A</button>
      </div>

      <div>
        <h4>Calculation B (Faster): {countB}</h4>
        <button onClick={() => setCountB(countB + 1)}>Increment Count B</button>
      </div>
    </div>
    </div>
  );
};

export default Usememo;