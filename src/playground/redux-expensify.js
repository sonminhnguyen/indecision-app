import { createStore, combineReducers } from 'redux';

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id , { amount: 500 }))

store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());










// const demoState = {
//   expenses: [{
//     id: 'poijasdfhwer',
//     desciption: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// }


const user = {
   name: 'Jen',
   age: 24
};

console.log({
  ...user,
  location: 'Philadelphia',
  age: 27
})