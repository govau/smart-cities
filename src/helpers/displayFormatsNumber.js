
import numeral from 'numeral';


export const formatBigNumber = number => {
  if (Number(number) < 1000) {
    return number;
  }
  return numeral(number).format('0.00a');
};

