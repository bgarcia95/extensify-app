import React from "react";
import { connect } from "react-redux";

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.filters.text}
    {props.expenses.length}
  </div>
);

// HOC
const mapStateToProps = state => {
  return {
    // This will be a prop  to our ExpenseList
    expenses: state.expenses,
    filters: state.filters
  };
};
export default connect(mapStateToProps)(ExpenseList); // <- Here we set the component we will render;
