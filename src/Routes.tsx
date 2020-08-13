import React from 'react';
import { BrowserRouter, Switch, Route,  } from 'react-router-dom';

import Home from './views/Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} exact path='/' />
    </Switch>
  </BrowserRouter>
);

export default Routes;
