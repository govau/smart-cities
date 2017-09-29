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
        color: COLORS.GREY_700,
      },
    },
  },
  yAxis: {
    gridLineColor: COLORS.GRID,
    labels: {
      y: 20,
      style: {
        fontSize: 10,
        color: COLORS.GREY_700,
      },
    },
    title: {
      y: 15,
      style: {
        color: COLORS.GREY_700,
        fontWeight: 700,
      },
    },
  },
};
