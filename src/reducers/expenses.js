// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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
            // Here we will override all the properties we are passing down
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
