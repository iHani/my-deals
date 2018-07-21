import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { HomePage, NotFoundPage, AddNewDeal, Login, Signup, EditDeal } from '../components';
import { checkAuthUser } from '../actions/deals';

class AppRouter extends Component {

  componentDidMount () {
    this.props.checkAuthUser()
  }

  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/new-deal' component={AddNewDeal} />
            <Route exact path='/edit/deal/:id' component={EditDeal} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
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
