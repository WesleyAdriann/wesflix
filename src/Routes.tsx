import React from 'react';
import { HashRouter, Switch, Route,  } from 'react-router-dom';

import Home from './views/Home';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route component={Home} exact path='/' />
    </Switch>
  </HashRouter>
);

export default Routes;
