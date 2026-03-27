import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../features/counterSlice';
import { addItem, removeItem } from '../features/items';
import { Item } from '../Item';

interface CounterState {
  value: number;
}

interface FoodItem {
  name: string;
  qty: number;
}

interface RootState {
  counter: CounterState;
  foodItems: FoodItem[];
}

export function Counter() {
  
  const count = useSelector((state: RootState) => state.counter.value);
  const items = useSelector((state: RootState) => state.foodItems);

  console.log(items)

  const dispatch = useDispatch();

  return (
    <div>
      <fieldset className='border m-5'>
        <legend className='text-center'>Basic Counter</legend>
        <div  className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-outline-success' onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span className='p-5 fs-5 fw-semibold text-secondary'>{count}</span>
        <button className='btn btn-outline-danger'  onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      </fieldset>

     <Item/>
      
    </div>
  );
}
