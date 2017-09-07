import React, {Component} from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';

// import NoMatchPage from '../../noMatch';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
// import routesMap from '../../routesMap';

import style from './AppLayout.scss';

class AppLayout extends Component {
  constructor(props) {
    super(props);

    this.state = {isOpen: false};

    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  handleWindowClick(e) {
    // if the user clicks, and the click is outside the nav, close it
    if (!this.sideBarEl.contains(e.target)) {
      this.toggleNav(false);
    }
  }

  toggleNav(isOpen) {
    this.setState({isOpen});

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
      <BrowserRouter>
        <div>
          <div ref={el => { this.sideBarEl = el }}>
            <SideBar closeNav={() => this.toggleNav(false)} isOpen={this.state.isOpen} />
          </div>

          <div className={style.AppLayout}>
            <Header openNav={() => this.toggleNav(true)}/>

            <main className={style.AppLayout__body}>
              {/*<Switch>*/}

                {/*<Redirect from="/" to={routesMap.projectsOverview} exact/>*/}

                {/*<Route path={routesMap.projects} component={ProjectsRoute}/>*/}

                {/*<Route path={routesMap.portfolios} component={PortfoliosRoute}/>*/}

                {/*<Route component={NoMatchPage}/>*/}

              {/*</Switch>*/}

            </main>

            <Footer/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppLayout;
