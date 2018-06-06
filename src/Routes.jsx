import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, AddResults, Login, PrivateRoute, withHeader } from './components';
import routes from './constants/routes';

const Routes = () => (
  <div>
    <Switch>
      <PrivateRoute exact path={routes.home} component={withHeader(Home)} />
      <PrivateRoute exact path={routes.addResults} component={withHeader(AddResults)} />
      <Route exact path={routes.login} component={Login} />
      <Route exact path={routes.signup} component={Login} />

      <Route render={() => <h1>Page not found</h1>} />
    </Switch>
  </div>
);

export default Routes;
