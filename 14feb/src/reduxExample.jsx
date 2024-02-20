// reduxExample.js

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Initial state
const initialState = {
  count: 0,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + action.payload };
    case DECREMENT:
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

// Action creators
const incrementAction = (amount) => ({
  type: INCREMENT,
  payload: amount,
});

const decrementAction = (amount) => ({
  type: DECREMENT,
  payload: amount,
});

// Redux store
const { createStore } = require('redux');
const store = createStore(counterReducer);

// Subscribe to store changes
store.subscribe(() => {
  console.log('Current state:', store.getState());
});

// Dispatch actions
store.dispatch(incrementAction(5));
store.dispatch(decrementAction(3));
