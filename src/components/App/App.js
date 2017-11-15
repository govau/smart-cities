import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
import AllCitiesOverviewContainer from '../AllCitiesOverviewContainer/AllCitiesOverviewContainer';
import CityOverviewContainer from '../CityOverviewContainer/CityOverviewContainer';
import AllCitiesCategoryContainer from '../AllCitiesCategoryContainer/AllCitiesCategoryContainer';
import CityCategoryContainer from '../CityCategoryContainer/CityCategoryContainer';
import StyleGuide from '../StyleGuide/StyleGuide';
import AdditionalInfoPage from '../AdditionalInfoPage/AdditionalInfoPage';
import FeedbackPage from '../FeedbackPage/FeedbackPage';
import ScrollToTopOnRouteChange from '../ScrollToTopOnRouteChange/ScrollToTopOnRouteChange';
import './_normalize.scss';
import './_globalStyles.scss';
import {
  NO_CATEGORY,
  NO_CITY,
} from '../../constants';

const App = () => (
  <BrowserRouter>
    <ScrollToTopOnRouteChange>
      <Switch>
        <Route path={`/${NO_CITY}/${NO_CATEGORY}`} component={AllCitiesOverviewContainer} />
        <Route path={`/:cityId/${NO_CATEGORY}`} component={CityOverviewContainer} />
        <Route path={`/${NO_CITY}/:categoryId`} component={AllCitiesCategoryContainer} />
        <Route path="/:cityId/:categoryId" component={CityCategoryContainer} />

        <Route path="/additional-information" component={AdditionalInfoPage} />
        <Route path="/feedback" component={FeedbackPage} />

        <Route path="/style-guide" component={StyleGuide} />
        <Redirect from="/styleguide" to="/style-guide" />

        <Redirect to={`/${NO_CITY}/${NO_CATEGORY}`} />
      </Switch>
    </ScrollToTopOnRouteChange>
  </BrowserRouter>
);

export default App;
