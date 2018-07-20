import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import Header from './Header';
import { login } from '../utils/DealsAPI';
import { userAuthenticated } from '../actions/deals'
class Login extends Component {

  state = {
    mobile: '',
    password: '',
    redirectToReferrer: false,
  };

  handleLogin = async (event) => {
    event.preventDefault();
    const user = {
      mobile: this.state.mobile,
      password: this.state.password,
    }
    console.log("login user", user);
    console.log("this.props", this.props);
    login(user)
    .then(({ isAuthenticated }) => {
      console.log('res', isAuthenticated);
      if (isAuthenticated) {
        this.props.userAuthenticated()
        this.props.history.push("/");
      }
    })

    // .then(({ isAuthenticated }) => isAuthenticated && dispatch(userAuthenticated()))
    .catch(error => console.log('Error login:', error))


  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { mobile, password, redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from.pathname} />;
    }

    return (
      <div>
        <Header />
        <div className="offset-sm-4 col-sm-4 py-4">
          <form onSubmit={this.handleLogin.bind(this)}>
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <label htmlFor="inputMobileNumber" className="sr-only">Mobile Number</label>
            <input name="mobile" type="text"
              value={mobile}
              onChange={this.handleInputChange}
              id="inputMobileNumber"
              className="form-control m-2"
              placeholder="+966 Saudi mobile number"
              required autoFocus
            />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input name="password" type="password"
              value={password}
              onChange={this.handleInputChange}
              id="inputPassword"
              className="form-control m-2"
              placeholder="Password"
              required
            />
            <div className="checkbox mb-3">
              <label className="m-2">
                <input type="checkbox" value="remember-me"/> Remember Me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block m-2" type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  userAuthenticated: () => dispatch(userAuthenticated()),
})

export default connect(undefined, mapDispatchToProps)(Login);
