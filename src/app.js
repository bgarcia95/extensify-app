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
    description: "Water Bill"
  })
);

store.dispatch(
  addExpense({
    description: "Gas Bill"
  })
);

store.dispatch(setTextFilter("water"));

const { expenses, filters } = store.getState();
const visibleExpenses = getVisibleExpenses(expenses, filters);

console.log(`Filtered by: ${filters.text}`, visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
