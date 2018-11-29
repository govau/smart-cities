/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { LINKS } from '../../constants';
import Icon from '../Icon/Icon';
import {
  hasVisitedFeedbackPage,
  getNavigationCount,
} from '../../helpers/userBehaviour';
import style from './FeedbackButton.scss';

const PULSE_ON_NUM_NAVIGATIONS = 3;

const FeedbackButton = (props) => {
  // If user has not yet visited the feedback page, pulse every few navigations
  const shouldPulse = !hasVisitedFeedbackPage()
    && getNavigationCount() > 0
    && getNavigationCount() % PULSE_ON_NUM_NAVIGATIONS === 0;

  const buttonClassName = classNames(
    style.button,
    {
      [style.dimmed]: props.dimmed,
      [style.pulsing]: shouldPulse,
    },
  );

  return (
    <NavLink
      to={LINKS.FEEDBACK}
      className={buttonClassName}
    >
      <span className={style.buttonText}>
        Give feedback
      </span>
      <Icon
        icon="speechBubble"
        className={style.speechBubbleIcon}
        size={25}
      />
    </NavLink>
  );
};

FeedbackButton.propTypes = {
  dimmed: PropTypes.bool,
};

export default FeedbackButton;
