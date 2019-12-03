import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "fasdfasfas",
      description: "January Rent",
      note: "This was the final paymant for that address",
      amount: 54500, // pennies $ currency
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
