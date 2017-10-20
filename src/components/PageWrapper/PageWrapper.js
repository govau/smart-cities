import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import style from './PageWrapper.scss';
import blockScroll from '../../helpers/blockScroll';
import {
  NO_CATEGORY,
  NO_CITY,
} from '../../constants';

class PageWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { navIsOpen: false };

    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  componentWillUnmount() {
    // If the nav is open and a route changes, the whole page is re-rendered
    // So we ensure scroll is unblocked before unmounting
    blockScroll(false);
  }

  setNavState(navIsOpen) {
    this.setState({ navIsOpen });
    blockScroll(navIsOpen);

    // bind these events on the next tick so that they don't capture the current click
    // (because React delegates events)
    window.setTimeout(() => {
      if (navIsOpen) {
        window.addEventListener('click', this.handleWindowClick, false);
      } else {
        window.removeEventListener('click', this.handleWindowClick, false);
      }
    });
  }

  handleWindowClick(e) {
    // if the user clicks, and the click is outside the nav, close it
    if (this.sideBarEl && !this.sideBarEl.contains(e.target)) {
      this.setNavState(false);
    }
  }

  render() {
    return (
      <div className={style.pageWrapper}>
        <div ref={(el) => { this.sideBarEl = el; }}>
          <SideBar
            closeNav={() => this.setNavState(false)}
            isOpen={this.state.navIsOpen}
            categoryId={this.props.categoryId}
            cityId={this.props.cityId}
            categoryIconId={this.props.categoryIconId}
          />
        </div>

        <div>
          <Header
            openNav={() => this.setNavState(true)}
            cityId={this.props.cityId}
            categoryId={this.props.categoryId}
            cityName={this.props.cityName}
            categoryColorName={this.props.categoryColorName}
            categoryIconId={this.props.categoryIconId}
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
  cityName: PropTypes.string,
  categoryColorName: PropTypes.string,
  categoryIconId: PropTypes.string,
};

PageWrapper.defaultProps = {
  categoryId: NO_CATEGORY,
  cityId: NO_CITY,
};

export default PageWrapper;
