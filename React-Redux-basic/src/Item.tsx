import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './features/counterSlice';
import { addItem, removeItem } from './features/items';
import NavBar from './components/NavBar';
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

export function Item() {
  
  const items = useSelector((state: RootState) => state.foodItems);

  const dispatch = useDispatch();


  const handleAddItem = (name: string) => {
    dispatch(addItem({ name }));
  };

  const handleRemoveItem = (name: string) => {
    dispatch(removeItem({ name }));
  };

  return (
    <div>
      
      <fieldset className='border m-5'>
        <legend className='text-center'>Multi-State Counter</legend>
        <div className='d-flex justify-content-center'>
        <div className="row">
          
          <div className="col">
              {items && items.length > 0 ? (
                items.map((item) => (
                      <div className='card p-3 my-2 text-center' style={{"width":"350px"}} key={item.name}>
                        <div className="row">
                          <div className="col-3">
                          <span className=''>{item.name}: </span>
                          </div>
                        
                        <div className="col">
                        <button className='btn btn-sm btn-outline-success mx-2' onClick={() => handleAddItem(item.name)}>Add</button>
                        <span className='mx-2'>{item.qty}</span>
                        <button className='btn btn-sm btn-outline-danger mx-2' onClick={() => handleRemoveItem(item.name)}>Remove</button>
                        </div>
                        
                        </div>
                      </div>
                        
                  
                ))
              ) : (
                <p></p>
              )}
              </div>
        </div>
      </div>
      </fieldset>
      
      
    </div>
  );
}
