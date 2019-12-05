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
    createdAt: 1000
  })
);

store.dispatch(
  addExpense({
    description: "Rent",
    amount: 109500
  })
);

// const { expenses, filters } = store.getState();
// const visibleExpenses = getVisibleExpenses(expenses, filters);

// console.log(`Filtered by: ${filters.text}`, visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
