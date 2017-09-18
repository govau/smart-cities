
import React from 'react';
import {Link} from 'react-router-dom';

// TODO (davidg): style this page
const NoMatchPage = ({location}) => (
  <div className="container">
    <div className="row">
      <div className="col-xs-8 offset-xs-2 pt-5 pb-5">

        <h1 className="h2 mb-3">Page not found</h1>

        <p className="card-text">We couldn't find that route, <code>{location.pathname}</code></p>

        <br/>
        <br/>
        <Link to="/" className="uikit-link">&lt; Back to Home</Link>
      </div>
    </div>
  </div>
);

export default NoMatchPage;
