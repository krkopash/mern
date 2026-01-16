import {useReducer} from 'react';

interface State {
   count: number
};

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };

function stateReducer(state: State, action: CounterAction): State {
  switch (action.type) {
    case "reset":
      return initialState;
    case "setCount":
      return { ...state, count: action.value };
    default:
      throw new Error("Unknown action");
  }
}

export default function Counterapp() {
  const [state, dispatch] = useReducer(stateReducer, initialState);

  const Increment = () => dispatch({ type: "setCount", value: state.count + 1 });
  const Decrement = () => dispatch({ type: "setCount", value: state.count - 1});
  const reset = () => dispatch({ type: "reset" });

  return (
    <div>
      <h1>Counter App</h1>

      <p>Count: {state.count}</p>
      <button onClick={Increment}>Increment</button><br></br><br></br>
      <button onClick={Decrement}>Decrement</button><br></br><br></br>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
