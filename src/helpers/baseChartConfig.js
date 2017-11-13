import COLORS from '../style/_colors.scss';

export default {
  chart: {
    backgroundColor: 'transparent',
  },
  xAxis: {
    lineColor: COLORS.GRID,
    tickLength: 0,
    labels: {
      style: {
        fontSize: 11,
        color: COLORS.GREY_500,
      },
    },
  },
  yAxis: {
    gridLineColor: COLORS.GRID,
    labels: {
      y: 20,
      style: {
        fontSize: 11,
        color: COLORS.GREY_500,
      },
    },
    title: {
      y: 15,
      style: {
        color: COLORS.GREY_500,
        fontWeight: 700,
      },
    },
  },
};
