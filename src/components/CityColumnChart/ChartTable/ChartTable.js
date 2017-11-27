import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import { INDICATORS } from '../../../constants';

const ChartTable = props => (
  <table className={props.className}>
    <caption>
      Table showing {props.chart.name} for each city. {props.chart.description}
    </caption>

    <thead>
      <tr>
        <th scope="col">City</th>

        {props.chart.indicatorIds.map((indicatorId) => {
          const indicator = INDICATORS[indicatorId];

          return <th key={indicatorId} scope="col">{indicator.legendText || indicator.name}</th>;
        })}
      </tr>
    </thead>

    <tbody>
      {props.cities.map(city => (
        <tr key={city.id}>
          <th scope="row">{city.name}</th>

          {props.chart.indicatorIds.map((indicatorId) => {
            const indicator = INDICATORS[indicatorId];
            const value = city.indicators[indicatorId];
            const formattedNumber = numeral(value).format(indicator.format);

            return <td key={indicatorId}>{formattedNumber}</td>;
          })}
        </tr>
      ))}
    </tbody>
  </table>
);

ChartTable.propTypes = {
  chart: PropTypes.shape({
    description: PropTypes.string,
    indicatorIds: PropTypes.arrayOf(
      PropTypes.oneOf(Object.keys(INDICATORS)),
    ).isRequired,
    name: PropTypes.string,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    indicators: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  })),
  className: PropTypes.string,
};

export default ChartTable;
