
const format = require('date-fns/format');


export const formatShortDateMonthYear = (date) => {
  return format(new Date(date), 'D MMM YYYY');
};

export const formatDatetimeShortDateMonthYear = (date) => {
  return format(new Date(date), 'YYYY-MM-DD');
};

export const getTimestamp = (date) => {
  return new Date(date).getTime();
};
