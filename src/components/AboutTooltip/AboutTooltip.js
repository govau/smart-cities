import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from '@atlaskit/tooltip';
import questionIcon from './Question.svg';
import style from './AboutTooltip.scss';

const AboutTooltip = props => (
  <Tooltip
    description={props.description}
    position={props.position}
  >
    <img
      className={style.icon}
      width={props.size}
      height={props.size}
      src={questionIcon}
      alt="about this indicator"
    />
  </Tooltip>
);

AboutTooltip.propTypes = {
  description: PropTypes.string.isRequired,
  position: PropTypes.oneOf([ // defined by atlaskit/tooltip
    'left',
    'right',
    'top',
    'bottom',
  ]),
  size: PropTypes.number,
};

AboutTooltip.defaultProps = {
  position: 'left',
  size: 16,
};

export default AboutTooltip;
