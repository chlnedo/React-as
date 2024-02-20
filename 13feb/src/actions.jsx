// actions.js
export const incrementByFive = () => {
    return {
      type: 'INCREMENT_BY_FIVE',
      payload: 5,
    };
  };
  
  export const decrementByThree = () => {
    return {
      type: 'DECREMENT_BY_THREE',
      payload: 3,
    };
  };
  