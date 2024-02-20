// App.js

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction } from './reduxExample';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(incrementAction(5))}>Increment by 5</button>
      <button onClick={() => dispatch(decrementAction(3))}>Decrement by 3</button>
    </div>
  );
};

export default App;
