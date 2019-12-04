import React from "react";
import { connect } from "react-redux";

import selectExpenses from "../selectors/expenses";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length > 0 ? (
      props.expenses.map(expense => (
        <ExpenseListItem key={expense.id} {...expense} />
      ))
    ) : (
      <h3>There are no expenses added yet.</h3>
    )}
  </div>
);

// HOC
const mapStateToProps = state => {
  return {
    // This will be a prop  to our ExpenseList
    expenses: selectExpenses(state.expenses, state.filters)
  };
};
export default connect(mapStateToProps)(ExpenseList); // <- Here we set the component we will render;
