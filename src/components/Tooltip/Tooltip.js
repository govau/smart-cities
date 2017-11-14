import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Portal from '../Portal/Portal';
import styles from './Tooltip.scss';

class Tooltip extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  showTooltip() {
    const SPACE = 8;
    const WIDTH = 256;

    const style = {
      width: WIDTH,
      borderColor: this.props.borderColor,
    };
    const dimensions = this.el.getBoundingClientRect();

    // center align the tooltip by taking both the target and tooltip widths into account
    style.left = (dimensions.left + (dimensions.width / 2)) - (WIDTH / 2);
    // make sure it doesn't stick off the left side of the page
    style.left = Math.max(SPACE, style.left);
    // or off the right ...
    style.left = Math.min(style.left, document.body.clientWidth - WIDTH - SPACE);

    if (dimensions.top < window.innerHeight / 2) { // the top half of the page
      // on the top half of the page, position the top of the tooltip
      // just below the target (it will stretch downwards)
      style.top = dimensions.top + dimensions.height + SPACE;
    } else {
      // on the bottom half, set the bottom of the tooltip
      // just above the top of the target (it will stretch upwards)
      style.bottom = (window.innerHeight - dimensions.top) + SPACE;
    }

    this.setState({
      visible: true,
      style,
    });

    window.addEventListener('scroll', this.hideTooltip, false);
  }

  hideTooltip() {
    this.setState({ visible: false });
    window.removeEventListener('scroll', this.hideTooltip, false);
  }

  render() {
    const { props, state } = this;

    return (
      <span // a span so it's valid HTML no matter where it's used
        onMouseOver={this.showTooltip}
        onMouseOut={this.hideTooltip}
        className={classnames(props.className, styles.tooltipTarget)}
        ref={(el) => { this.el = el; }}
      >
        {props.children}

        {state.visible && (
          <Portal>
            <div // this <div> isn't actually inside the <span> above. Magic portal.
              className={styles.tooltipWrapper}
              style={state.style}
            >
              {props.text}
            </div>
          </Portal>
        )}
      </span>
    );
  }
}

Tooltip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  borderColor: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Tooltip;
