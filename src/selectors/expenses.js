// Timestamps -> counting in milliseconds
// January 1st 1970 (unix epoch) -> this is the value set when timestamp is set to 0
// When a positive number is set the date is forward the one when the value is set to 0 and if negative, it goes backwards
// 33400 (33.4s after the previous date), 10, -203

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;

      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      }

      // sortBy -> amount
      // put the ones with a greater amount first
    });
};
