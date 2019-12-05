import moment from "moment";

// Timestamps -> counting in milliseconds
// January 1st 1970 (unix epoch) -> this is the value set when timestamp is set to 0
// When a positive number is set the date is forward the one when the value is set to 0 and if negative, it goes backwards
// 33400 (33.4s after the previous date), 10, -203

// Get visible expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      // same or before
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      // same or after
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;

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
