import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
  withRouter
} from "react-router-dom";
import { HomePage, NotFoundPage, AddNewDeal, Login, Signup, PrivateRoute } from '../components';
import { checkAuthUser } from '../actions/deals';

const token = localStorage.token || undefined

class AppRouter extends Component {
  componentDidMount () {
    // token &&
    this.props.checkAuthUser()
  }
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/new-deal' component={AddNewDeal} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            {/* <PrivateRoute path='/new-deal' component={AddNewDeal} /> */}
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.deals.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuthUser: () => dispatch(checkAuthUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
