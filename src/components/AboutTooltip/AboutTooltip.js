import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip/Tooltip';
import Icon from '../Icon/Icon';

const AboutTooltip = props => (
  <Tooltip
    text={props.text}
    borderColor={props.color}
  >
    <Icon
      icon="questionMark"
      className={props.className}
      size={22}
      color={props.color}
      title="about this indicator"
    />
  </Tooltip>
);

AboutTooltip.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default AboutTooltip;
