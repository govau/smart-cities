import React from 'react';
import PropTypes from 'prop-types';
import getColorVariant from '../../helpers/getColorVariant';
import style from './IndicatorTypeMark.scss';
import COLORS from '../../style/_colors.scss';

const classnames = require('classnames/bind').bind(style);

const SIZES = {
  SMALL: 'SMALL',
  LARGE: 'LARGE',
};

// A "P" in a circle
const IndicatorTypeMark = (props) => {
  const performanceMarkColor = getColorVariant(props.colorName, '900');

  let pColor;
  if (props.isCategoryPage) {
    pColor = COLORS.WHITE;
  } else if (props.size === SIZES.LARGE) {
    pColor = performanceMarkColor;
  } else {
    pColor = COLORS.GREY_700;
  }

  // Use a solid colour on the category pages
  // and just an outline on the overview page
  const pStyle = props.isCategoryPage
    ? {
      background: performanceMarkColor,
      color: pColor,
    }
    : {
      border: `1px solid ${performanceMarkColor}`,
      color: pColor,
    };

  const className = classnames(
    style.performanceMark,
    {
      performanceMarkSmall: props.size === SIZES.SMALL,
      performanceMarkLarge: props.size === SIZES.LARGE,
    },
    props.className,
  );

  return <div className={className} style={pStyle}>P</div>;
};

IndicatorTypeMark.propTypes = {
  className: PropTypes.string,
  colorName: PropTypes.string.isRequired,
  isCategoryPage: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(SIZES)).isRequired,
};

export default IndicatorTypeMark;
