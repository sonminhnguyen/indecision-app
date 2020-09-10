// import validator from 'validator'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';  
import 'react-dates/lib/css/_datepicker.css';
import { now } from 'moment';
import './firebase/firebase';

const store = configureStore();

// store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: now() }));
// store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }));

// store.dispatch(setTextFilter('water'));

// console.log(store)

const state = store.getState();
const visibleExpense = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpense)

const jsx = (
  <Provider store={store}>
   <AppRouter />
  </Provider>
);

// console.log(store.getState());

ReactDOM.render(jsx, document.getElementById('app'));