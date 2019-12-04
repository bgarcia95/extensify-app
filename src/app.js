// Default imports
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Styles
import "./styles/styles.scss";
import "normalize.css/normalize.css";

// My components and files
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water Bill",
    amount: 4500
  })
);

store.dispatch(
  addExpense({
    description: "Gas Bill",
    amount: 5000
  })
);

store.dispatch(setTextFilter("water"));
setTimeout(() => {
  store.dispatch(setTextFilter("bill"));
}, 3000);

const { expenses, filters } = store.getState();
const visibleExpenses = getVisibleExpenses(expenses, filters);

console.log(`Filtered by: ${filters.text}`, visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
