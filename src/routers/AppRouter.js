import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, AnotherPage, NotFoundPage } from '../components';

class AppRouter extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route
              exact
              path='/'
              component={HomePage}
            />
            <Route
              exact
              path='/another-page'
              component={AnotherPage}
            />
            <Route
              exact
              path='/another-page/:id'
              component={AnotherPage}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
