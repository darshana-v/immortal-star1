import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import App from './App';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
