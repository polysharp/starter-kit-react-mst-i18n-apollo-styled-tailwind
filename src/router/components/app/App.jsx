import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'pages/app';

import Redirector from '../shared';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirector isAuthenticated />
  </Switch>
);

export default App;
