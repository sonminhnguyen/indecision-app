import { createStore } from 'redux';

// Action generators - functions that return action object

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count = 101 } = {}) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
})

//Reducers
// 1. Reducer are pure functions: output determined by only the input not interacting with outside code
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT': 
      // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy: 1;
      return {
        // count: state.count + incrementBy
        count: state.count + action.incrementBy
      };
      case 'DECREMENT':
        return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default: return state;
  }
};
const store = createStore(countReducer);


// show log after each changing state
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(decrementCount());

store.dispatch(setCount());
  


//Actions- an object that gets sent to the store
// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// unsubscribe();

// store.dispatch({
//   type: 'DECREMENT'
// });

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 10
// });