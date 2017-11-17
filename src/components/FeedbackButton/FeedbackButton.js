import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { LINKS } from '../../constants';
import Icon from '../Icon/Icon';
import style from './FeedbackButton.scss';

const FeedbackButton = (props) => {
  const buttonClassName = classNames(
    style.button,
    {
      [style.dimmed]: props.dimmed,
    },
  );

  return (
    <div className={style.buttonWrapper}>
      <NavLink to={LINKS.FEEDBACK}>
        <div className={buttonClassName}>
          <Icon
            icon="speechBubble"
            className={style.speechBubbleIcon}
            size={25}
          />
          Feedback
        </div>
      </NavLink>
    </div>
  );
};

FeedbackButton.propTypes = {
  dimmed: PropTypes.bool,
};

export default FeedbackButton;
