import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Highcharts from 'highcharts';
import kebabCase from 'lodash/kebabCase';
import merge from 'lodash/merge';
import numeral from 'numeral';
import Tooltip from '../Tooltip/Tooltip';
import Legend from '../Legend/Legend';
import Icon from '../Icon/Icon';
import IndicatorIcon from '../IndicatorIcon/IndicatorIcon';
import ChartTable from './ChartTable/ChartTable';
import baseChartConfig from '../../helpers/baseChartConfig';
import getColorRange from '../../helpers/getColorRange';
import getColorVariant from '../../helpers/getColorVariant';
import {
  COLOR_NAMES,
  INDICATORS,
} from '../../constants';
import COLORS from '../../style/_colors.scss';
import style from './CityColumnChart.scss';

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
  const firstIndicatorId = props.chart.indicatorIds[0];
  const firstIndicator = INDICATORS[firstIndicatorId];
  let sortedCities = props.cities.slice(); // clone so we're not mutating state

  // SC-140 for one chart, we don't show Western Sydney
  if (firstIndicator.hideForCities) {
    sortedCities = sortedCities.filter(city => (
      !firstIndicator.hideForCities.includes(city.id)
    ));
  }

  // ensure nulls go last
  const indicatorOrZero = city => Number(city.indicators[firstIndicatorId]) || 0;

  sortedCities.sort((a, b) => indicatorOrZero(b) - indicatorOrZero(a));

  return sortedCities;
}

function getFill(chartColors, pos, props) {
  return props.showChartPatterns ? `url(#${props.svgPatternBase}-${pos})` : chartColors[pos];
}

function getSeries(props) {
  const isMultiple = props.chart.indicatorIds.length > 1;
  const chartColors = getColorRange(props.colorBase); // only used for multiple-series charts
  const sortedCities = sortAndFilterChartData(props);

  return props.chart.indicatorIds.map((indicatorId, i) => ({
    index: props.chart.indicatorIds.length - i, // reverse sort series (to counteract Highcharts)
    name: INDICATORS[indicatorId].legendText,
    color: isMultiple ? getFill(chartColors, i, props) : getColorVariant(props.colorBase, 300),
    data: getSeriesDataForIndicator(sortedCities, indicatorId, props.city),
  }));
}

function getPlotBands(cities, pageCity, cityColor, indicatorIds) {
  const bands = cities.map((city, idx) => {
    // Need to check all indicators (to handle grouped/stacked charts)
    if (!indicatorIds.some(indicatorId => city.indicators[indicatorId])) {
      return {
        color: COLORS.GREY_200,
        from: idx - 0.45,
        to: idx + 0.45,
        label: {
          text: 'No data',
          rotation: 270,
          verticalAlign: 'middle',
          x: 4,
          y: 5,
          style: {
            color: COLORS.GREY_700,
            fontWeight: 600,
          },
        },
      };
    }

    return null; // sugar for eslint :/
  }).filter(band => band);

  if (pageCity) {
    const idx = cities.findIndex(el => el.name === pageCity.name);

    bands.push({
      color: cityColor,
      from: idx - 0.5,
      to: idx + 0.5,
    });
  }

  return bands;
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
  const series = getSeries(props);
  const plotBands = getPlotBands(sortedCities, props.city, colorLight, props.chart.indicatorIds);

  let ceiling = null;
  if ('max' in props.chart) ceiling = props.chart.max;
  if (props.chart.stacked) ceiling = 1;

  const floor = 'min' in props.chart ? props.chart.min : null;

  let pointWidthLarge = 7;
  let pointWidthSmall = 4;

  // For readability, we fatten the bars when showing patterns
  if (props.showChartPatterns) {
    if (isMultiple && !props.chart.stacked) { // grouped charts
      pointWidthLarge += 2;
      pointWidthSmall += 1;
    } else {
      pointWidthLarge += 5;
      pointWidthSmall += 5;
    }
  } else if (props.isHero) {
    pointWidthLarge += 4;
    pointWidthSmall += 0;
  }

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
        pointWidth: pointWidthLarge,
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
              <svg width="12" height="12" class="cityColumnChartTooltipDot">
                <circle cx="6" cy="6" r="6" fill=${this.color} />
              </svg>

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
              pointWidth: pointWidthSmall,
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
const UPDATE_TIMEOUT = 300;

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
    const isMultiple = props.chart.indicatorIds.length > 1;
    const colorMedium = getColorVariant(props.highlightColorDark);

    // The indicator data contains things like titles and descriptions. But these can
    // also be passed in explicitly (e.g. for charts where there are more than one indicator)
    // so here we take the passed in value, or the value from the first indicator otherwise.
    const firstIndicator = INDICATORS[props.chart.indicatorIds[0]];

    const className = classnames(
      style.wrapper,
      props.className,
    );

    return (
      <article className={className}>
        <ChartTable
          // <ChartTable> is for screen readers
          className={style.table}
          chart={props.chart}
          cities={props.cities}
        />

        <div aria-hidden="true">
          <header className={style.titleWrapper}>
            <h1 className={style.title}>
              {props.chart.name}
            </h1>

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
          </header>

          <div className={style.metaWrapper}>
            <IndicatorIcon
              className={style.indicatorTypeMark}
              color={getColorVariant(props.colorBase, '500')}
              contextual={firstIndicator.contextual}
            />

            {firstIndicator.lastUpdated && `Reference period ${firstIndicator.lastUpdated}`}
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
            <div id={this.chartDivId} />
          </div>
        </div>
      </article>
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
  }).isRequired,
  cities: PropTypes.arrayOf(cityType).isRequired,
  city: cityType,
  className: PropTypes.string,
  colorBase: PropTypes.oneOf(Object.values(COLOR_NAMES)).isRequired,
  highlightColorLight: PropTypes.string.isRequired,
  highlightColorDark: PropTypes.string.isRequired,
  isHero: PropTypes.bool,
  showChartPatterns: PropTypes.bool.isRequired,
  svgPatternBase: PropTypes.string.isRequired,
};

export default CityColumnChart;
