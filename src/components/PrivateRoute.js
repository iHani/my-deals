import React from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Redirect,
} from 'react-router-dom';
import { fakeAuth } from '../utils/fakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log('PrivateRoute', rest);
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}
const mapStateToProps = (state) => ({
  state,
  // isAuthenticated: true || state.isAuthenticated,
 });


export default connect(mapStateToProps)(PrivateRoute);
