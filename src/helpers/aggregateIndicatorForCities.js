import {
  median,
  sum,
} from 'stats-lite';
import {
  AGGREGATION_METHODS,
  INDICATORS,
} from '../constants';

export default function aggregateIndicatorForCities(indicatorId, cities) {
  const values = cities.map(city => city.indices[indicatorId]);
  const aggregationMethod = INDICATORS[indicatorId].aggregationMethod;

  if (aggregationMethod === AGGREGATION_METHODS.MEDIAN) {
    return median(values);
  } else if (aggregationMethod === AGGREGATION_METHODS.SUM) {
    return sum(values);
  }

  console.error(`${aggregationMethod} is not a valid aggregation method`);
  return NaN;
}
