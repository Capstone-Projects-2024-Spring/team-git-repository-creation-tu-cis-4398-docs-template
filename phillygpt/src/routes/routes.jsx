import React from 'react';
import { Route } from 'react-router-dom';
import RepromptPage from '../pages/reprompt.jsx';
import ResponsePage from '../pages/response.jsx';
import HomePage from '../pages/home.jsx';

const RoutePages = () => {
  return (
    <div className="display-area-container">
      <Route path="/" component={HomePage} />
      <Route path="/reprompt" component={RepromptPage} />
      <Route path="/response" component={ResponsePage} />
    </div>
  );
}

export default RoutePages;
