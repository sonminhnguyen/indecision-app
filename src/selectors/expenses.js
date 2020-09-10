import moment from 'moment';
//Get visible expense
// const getVisibleExpenses = (expenses, filters) => {
//   return expenses;
// }

//timestamps
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment) : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if(sortBy === 'amount') {
      return a.expense < b.expense ? 1 : -1;
    }
  });
};

export default getVisibleExpenses;