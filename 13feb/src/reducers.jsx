// reducers.js
const initialState = {
    count: 0,
  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'INCREMENT_BY_FIVE':
        return { count: state.count + action.payload };
      case 'DECREMENT_BY_THREE':
        return { count: state.count - action.payload };
      default:
        return state;
    }
  };
  
  export default counterReducer;
  