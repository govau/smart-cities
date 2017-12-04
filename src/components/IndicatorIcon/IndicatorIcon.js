import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '../Tooltip/Tooltip';
import Icon from '../Icon/Icon';
import { STRINGS } from '../../constants';

const SIZE = 14;

const IndicatorIcon = props => (
  <Tooltip
    borderColor={props.color}
    text={props.contextual ? STRINGS.CONTEXTUAL_DEFINITION : STRINGS.PERFORMANCE_DEFINITION}
    className={props.className}
    style={{ fontSize: SIZE }}
  >
    <Icon
      color={props.color}
      icon={props.contextual ? 'contextualIndicator' : 'performanceIndicator'}
      size={SIZE}
      title=""
    />
  </Tooltip>
);

IndicatorIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  contextual: PropTypes.bool.isRequired,
};

export default IndicatorIcon;
