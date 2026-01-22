
import React, { useState, useMemo } from 'react';


const expensiveCalculationA = (num: number): number => {
  console.log('Calculating expensive A...');
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += num;
  }
  return result;
};

const expensiveCalculationB = (num: number): number => {
  console.log('Calculating expensive B...');

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
    <div className='box'>
      <h1>useMemo </h1>

      <div>
        <h2>Calculation A (Slower)</h2>
        <p>Current Count A: {countA}</p>
        <button onClick={() => setCountA(countA + 1)}>Increment Count A</button>
      </div>

      <div>
        <h2>Calculation B (Faster)</h2>
        <p>Current Count B: {countB}</p>
        <button onClick={() => setCountB(countB + 1)}>Increment Count B</button>
      </div>
    </div>
  );
};

export default Usememo;