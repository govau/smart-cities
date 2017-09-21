import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import style from './PageWrapper.scss';
import {
  NO_CATEGORY,
  NO_CITY,
} from '../../constants';

class PageWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };

    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  handleWindowClick(e) {
    // if the user clicks, and the click is outside the nav, close it
    if (!this.sideBarEl.contains(e.target)) {
      this.toggleNav(false);
    }
  }

  toggleNav(isOpen) {
    this.setState({ isOpen });

    // bind these events on the next tick so that they don't capture the current click
    // (because React delegates events)
    window.setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', this.handleWindowClick, false);
      } else {
        window.removeEventListener('click', this.handleWindowClick, false);
      }
    });
  }

  render() {
    return (
      <div>
        <div ref={(el) => { this.sideBarEl = el; }}>
          <SideBar
            closeNav={() => this.toggleNav(false)}
            isOpen={this.state.isOpen}
            categoryId={this.props.categoryId}
            cityId={this.props.cityId}
          />
        </div>

        <div className={style.wrapper}>
          <Header
            openNav={() => this.toggleNav(true)}
            cityId={this.props.cityId}
            categoryId={this.props.categoryId}
          />

          <main className={style.main}>
            {this.props.children}
          </main>

          <Footer />
        </div>
      </div>
    );
  }
}

PageWrapper.propTypes = {
  categoryId: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  cityId: PropTypes.string,
};

PageWrapper.defaultProps = {
  categoryId: NO_CATEGORY,
  cityId: NO_CITY,
};

export default PageWrapper;
