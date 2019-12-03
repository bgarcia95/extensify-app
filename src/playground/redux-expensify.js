import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      // Filter is similar to map, it returns individual objects (or items) from an array, that's wny accessed to the object's id with -> (object) expense.id (object's property)
      // We can also go further and destructure 'expense' object by using the following syntax -> return state.filter(({id}) => id !== action.id);
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            // Here we will override all the properties we are passing down (in this case will be only the amount)
            ...action.updates
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

// Store Creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

// Adding expenses
const expenseOne = store.dispatch(
  addExpense({
    description: "Rent",
    amount: 100
  })
);

const expenseTwo = store.dispatch(
  addExpense({
    description: "Coffee",
    amount: 300
  })
);

// Removing Expenses
store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// Editing Expenses
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

store.dispatch(setTextFilter("rent"));

const demoState = {
  expenses: [
    {
      id: "fasdfasfas",
      description: "January Rent",
      note: "This was the final paymant for that address",
      amount: 54500, // pennies $ currency (value actually $545.00)
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

// const user = {
//   name: "Jen",
//   age: 24
// };

// console.log({
//   ...user,
//   location: "Santa Ana",
//   age: 27
// });
