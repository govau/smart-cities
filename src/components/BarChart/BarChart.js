import React from 'react';
import PropTypes from 'prop-types';
import {AbstractWidget} from '@gov.au/datavizkit';

const BarChart = ({series, xAxisCategories, yAxisText, width = null, height = null}) => {
  const config = {
    chart: {
      type: 'bar',
      marginLeft: 250,
      width,
      height,
    },
    title: {
      text: null,
    },
    xAxis: {
      type: 'category',
      lineColor: 'transparent',
      lineWidth: 0,
      tickLength: 0,
      categories: xAxisCategories,
      marginLeft: 400,
      crosshair: false,
    },
    plotOptions: {
      bar: {
        states: {
          hover: {
            enabled: true,
            halo: false,
            brightness: -0.2,
          }
        },
        borderWidth: 0,
        events: {
          legendItemClick: false,
        },
      }
    },
    yAxis: {
      allowDecimals: false,
      min: 0,
      tickLength: 0,
      title: {
        text: yAxisText,
      }
    },
    tooltip: {
      useHTML: true,
      backgroundColor: '#F8F8F8',
      borderColor: '#A1A0A0',
      borderRadius: 6,
      padding: 0,
      style: {
        fontSize: 12,
      },
      formatter: function() {
        return '<div>Tooltip</div>';
      }
    },
    legend: {
      enabled: false,
    },

    series: series.map(s => {
      s.animation = false;
      return s;
    }),
  };

  return (
    <AbstractWidget config={config} />
  )
};

BarChart.propTypes = {
  series: PropTypes.array.isRequired,
};

export default BarChart;
