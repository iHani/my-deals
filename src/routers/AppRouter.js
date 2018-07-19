import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { HomePage, NotFoundPage, AddNewDeal, Login, Signup } from '../components';

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
              path='/new-deal'
              component={AddNewDeal}
            />
            <Route
              exact
              path='/login'
              component={Login}
            />
            <Route
              exact
              path='/signup'
              component={Signup}
            />
            {/* <Route
              exact
              path='/:category'
              component={CategoryPage}
            /> */}
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;
