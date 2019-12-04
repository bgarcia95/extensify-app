// install -> import -> use
import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.scss";
import "normalize.css/normalize.css";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";

const store = configureStore();

store.dispatch(
  addExpense({
    description: "Water Bill",
    note: "Bill paid",
    amount: 10000,
    createdAt: 0
  })
);

store.dispatch(
  addExpense({
    description: "Gas Bill",
    note: "Bill paid",
    amount: 20000,
    createdAt: 0
  })
);

store.dispatch(setTextFilter("water"));

const { expenses, filters } = store.getState();
const visibleExpenses = getVisibleExpenses(expenses, filters);

console.log(`Filtered by: ${filters.text}`, visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
