import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import map from 'lodash/map';
import routes from './routes';
import Page from './app/Page';

const AppRoot = () => (
  <Page>
    <Switch>
      {map(routes, route => <Route key={route.path} {...route} />)}
    </Switch>
  </Page>
);

export default AppRoot;
