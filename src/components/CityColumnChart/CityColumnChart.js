import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import kebabCase from 'lodash/kebabCase';
import merge from 'lodash/merge';
import numeral from 'numeral';
import Tooltip from '../Tooltip/Tooltip';
import Legend from '../Legend/Legend';
import Icon from '../Icon/Icon';
import baseChartConfig from '../../helpers/baseChartConfig';
import getColorRange from '../../helpers/getColorRange';
import getColorVariant from '../../helpers/getColorVariant';
import {
  COLOR_NAMES,
  STRINGS,
  INDICATORS,
} from '../../constants';
import style from './CityColumnChart.scss';

const classnames = require('classnames/bind').bind(style);

function getSeriesDataForIndicator(cities, indicator, mainCity) {
  return cities.map((city) => {
    if (indicator in city.indicators) {
      const val = city.indicators[indicator];

      // If we are on a city page, and this is neither the main city
      // nor one of the cities selected by the user for comparison,
      // then make the column grey.
      if (mainCity && !city.selected && mainCity.id !== city.id) {
        return { y: val, color: getColorVariant('GREY', '200') };
      }

      return val;
    }

    return null;
  });
}

// Column charts are always sorted by descending value
// if there is more than one indicator the first is used
function sortAndFilterChartData(props) {
  const firstIndicator = props.chart.indicatorIds[0];
  let sortedCities = props.cities.slice(); // clone so we're not mutating state

  if (INDICATORS[firstIndicator].hideForWesternSydney) {
    sortedCities = sortedCities.filter(city => city.id !== 'western-sydney');
  }

  // ensure nulls go last
  const indicatorOrZero = city => Number(city.indicators[firstIndicator]) || 0;

  sortedCities.sort((a, b) => indicatorOrZero(b) - indicatorOrZero(a));

  return sortedCities;
}

function getSeries(props) {
  const chartColors = props.chart.indicatorIds.length === 1
    ? [getColorVariant(props.colorBase, 300)]
    : getColorRange(props.colorBase);

  const sortedCities = sortAndFilterChartData(props);

  return props.chart.indicatorIds.map((indicatorId, i) => ({
    index: props.chart.indicatorIds.length - i, // reverse sort series (to counteract Highcharts)
    name: INDICATORS[indicatorId].legendText,
    color: chartColors[i],
    data: getSeriesDataForIndicator(sortedCities, indicatorId, props.city),
  }));
}

function getPlotBands(cities, city, color) {
  if (city) {
    const idx = cities.findIndex(el => el.name === city.name);

    return [{
      color,
      from: idx - 0.5,
      to: idx + 0.5,
    }];
  }

  return [];
}

function getChartConfig(props) {
  const isMultiple = props.chart.indicatorIds.length > 1;
  const colorLight = getColorVariant(props.highlightColorLight);
  const colorDark = getColorVariant(props.colorBase, '900');

  // The indicator data contains things like titles and descriptions. But these can
  // also be passed in explicitly (e.g. for charts where there are more than one indicator)
  // so here we take the passed in value, or the value from the first indicator otherwise.
  const firstIndicator = INDICATORS[props.chart.indicatorIds[0]];
  const sortedCities = sortAndFilterChartData(props);
  const plotBands = getPlotBands(sortedCities, props.city, colorLight);
  const series = getSeries(props);

  let ceiling = null;
  if ('max' in props.chart) ceiling = props.chart.max;
  if (props.chart.stacked) ceiling = 1;

  const floor = 'min' in props.chart ? props.chart.min : null;

  const columnChartConfig = {
    series,
    chart: {
      animation: false,
      type: 'column',
      height: 500,
      spacingRight: 0,
      style: {
        fontFamily: 'inherit', // to pick up the body font
      },
    },
    plotOptions: {
      series: {
        animation: false,
        stacking: props.chart.stacked ? 'normal' : null,
        pointWidth: props.isHero ? 11 : 7, // includes border
        borderRadius: props.isHero ? 5 : 3,
        borderWidth: 1,
        groupPadding: 0.85,
        states: {
          hover: {
            color: null,
            brightness: 0,
          },
        },
      },
    },
    xAxis: {
      type: 'category',
      categories: sortedCities.map(city => city.name),
      labels: {
        rotation: -90,
        style: {
          fontSize: '11px',
        },
        formatter() {
          // on the city page, show the current city name in bold
          if (props.city && this.value === props.city.name) {
            return `<span style="font-weight: 700; font-size: 12px">${this.value}</span>`;
          }

          return this.value;
        },
      },
      plotBands,
      crosshair: {
        color: colorLight,
      },
    },
    yAxis: {
      ceiling,
      floor,
      labels: {
        padding: 0,
        x: 0,
        y: 3,
        formatter() {
          // format the number using the indicator's defined format, if available
          return numeral(this.value).format(firstIndicator.format);
        },
      },
      title: {
        text: null,
      },
      gridZIndex: 4, // magic highcharts value to position grid lines in front of the bars: http://api.highcharts.com/highcharts/yAxis.gridZIndex
    },
    title: {
      text: null,
    },
    credits: {
      enabled: false,
    },
    tooltip: {
      backgroundColor: '#fff',
      borderColor: colorDark,
      borderRadius: 4,
      // shared puts multiple series in the same tooltip
      // but also means you can hover anywhere on the chart to get the tooltip
      // (even for single series)
      shared: true,
      useHTML: true,
      headerFormat: '<div class="cityColumnChartTooltipHeader">{point.key}</div>',
      pointFormatter() {
        const formattedValue = numeral(this.y).format(firstIndicator.format);
        const seriesName = isMultiple ? `<span>${this.series.name}</span>` : '';

        return `
            <div class="cityColumnChartTooltipRow">
              <span class="cityColumnChartTooltipDot" style="background: ${this.color}"></span>
              
              ${seriesName}
              
              <span class="cityColumnChartTooltipValue">${formattedValue}</span>
            </div>
          `;
      },
      style: {
        fontFamily: 'inherit',
        color: 'inherit',
      },
    },
    legend: {
      enabled: false,
    },
    responsive: {
      rules: [{
        condition: {
          maxWidth: 450,
        },
        chartOptions: {
          chart: {
            height: 400,
            spacingLeft: 10,
          },
          plotOptions: {
            series: {
              pointWidth: 4,
              borderRadius: 2,
              borderWidth: 1,
              groupPadding: 0.85,
            },
          },
          xAxis: {
            labels: {
              padding: 0,
              style: {
                fontSize: '9px',
              },
            },
          },
        },
      }],
    },
  };

  return merge({}, baseChartConfig, columnChartConfig);
}

// If the timeout is too low, React won't update everything before rendering the charts
// E.g. try setting it to 1 and navigating between cities,
// the nav will only update once the charts are re-rendered
const UPDATE_TIMEOUT = 100;

class CityColumnChart extends Component {
  constructor(props) {
    super(props);

    this.chartDivId = kebabCase(`${props.chart.indicatorIds[0]}-chart`);
    this.chart = null;
    this.timer = null;
  }

  componentDidMount() {
    // We let the component mount first, to allow React to finish its render cycle
    // This means immediate transition between pages
    this.timer = window.setTimeout(() => {
      this.chart = Highcharts.chart(this.chartDivId, getChartConfig(this.props));
    }, UPDATE_TIMEOUT);
  }

  componentWillReceiveProps(nextProps) {
    // The component may have mounted, but not rendered the chart yet
    // when the user changes to a new city. So we want to cancel
    // that timeout before setting a new one.
    if (this.timer) window.clearTimeout(this.timer);

    this.timer = window.setTimeout(() => {
      // There is a bug in highcharts where the responsive rules are not applied
      // after this.chart.update(getChartConfig(nextProps)); is called,
      // so we destroy and re-create instead
      // Let the record show that this is 30% slower than .update()
      if (this.chart) this.chart.destroy();

      this.chart = Highcharts.chart(this.chartDivId, getChartConfig(nextProps));
    }, UPDATE_TIMEOUT);
  }

  componentWillUnmount() {
    // If the chart is waiting to update/mount, we want to clear that timeout
    if (this.timer) window.clearTimeout(this.timer);
    // Make sure Highcharts cleans up listeners etc. before removing the DOM
    // If navigating quickly (< UPDATE_TIMEOUT) from one tab to the next, this may
    // fire before the chart is mounted, so test for this.chart first
    if (this.chart) this.chart.destroy();
  }

  render() {
    const { props } = this;

    // The indicator data contains things like titles and descriptions. But these can
    // also be passed in explicitly (e.g. for charts where there are more than one indicator)
    // so here we take the passed in value, or the value from the first indicator otherwise.
    const firstIndicator = INDICATORS[props.chart.indicatorIds[0]];

    const hideChart = (
      firstIndicator.hideForWesternSydney &&
      props.city &&
      props.city.id === 'western-sydney'
    );

    const isMultiple = props.chart.indicatorIds.length > 1;
    const colorMedium = getColorVariant(props.highlightColorDark);
    const colorDark = getColorVariant(props.colorBase, '900');

    const className = classnames(
      style.wrapper,
      props.className,
      { hideChart },
    );

    return (
      <div className={className}>
        <div className={style.titleWrapper}>
          <h4 className={style.title}>
            {props.chart.name}
          </h4>

          <Tooltip
            text={props.chart.description}
            borderColor={colorMedium}
          >
            <Icon
              icon="questionMark"
              className={style.aboutChartIcon}
              size={22}
              color={colorMedium}
              title=""
            />
          </Tooltip>
        </div>

        <div className={style.metaWrapper}>
          <Tooltip
            borderColor={colorMedium}
            text={firstIndicator.contextual
              ? STRINGS.CONTEXTUAL_DEFINITION
              : STRINGS.PERFORMANCE_DEFINITION
            }
          >
            <Icon
              className={style.indicatorTypeMark}
              color={colorDark}
              icon={firstIndicator.contextual ? 'contextualIndicator' : 'performanceIndicator'}
              size={14}
              title=""
            />
          </Tooltip>

          {firstIndicator.lastUpdated && `Last updated ${firstIndicator.lastUpdated}`}
        </div>

        {isMultiple && (
          <Legend
            // Legend is our own HTML so we can style and position it with CSS
            className={style.legendWrapper}
            series={getSeries(props)}
          />
        )}

        <div className={style.axisTitle}>
          {props.chart.axisTitle}
        </div>

        <div className={style.chartWrapper}>
          <div
            ref={(el) => { this.chartDivEl = el; }}
            id={this.chartDivId}
          />
        </div>
      </div>
    );
  }
}

const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  indicators: PropTypes.object.isRequired,
});

CityColumnChart.propTypes = {
  chart: PropTypes.shape({
    indicatorIds: PropTypes.arrayOf(
      PropTypes.oneOf(Object.keys(INDICATORS)),
    ).isRequired,
    description: PropTypes.string,
    axisTitle: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    name: PropTypes.string,
    stacked: PropTypes.bool,
    hideCitiesWithNoData: PropTypes.bool,
  }).isRequired,
  cities: PropTypes.arrayOf(cityType).isRequired,
  city: cityType,
  className: PropTypes.string,
  colorBase: PropTypes.oneOf(Object.values(COLOR_NAMES)).isRequired,
  highlightColorLight: PropTypes.string.isRequired,
  highlightColorDark: PropTypes.string.isRequired,
  isHero: PropTypes.bool,
};

export default CityColumnChart;
