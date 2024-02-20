// index.js
import store from './store';
import { incrementByFive, decrementByThree } from './actions';

// Dispatch the actions
store.dispatch(incrementByFive());
console.log('Count after incrementing by 5:', store.getState().count);

store.dispatch(decrementByThree());
console.log('Count after decrementing by 3:', store.getState().count);
