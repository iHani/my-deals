import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import FlashMessage from 'react-flash-message';
import Header from './Header';
import { login } from '../utils/DealsAPI';
import { userAuthenticated, logout } from '../actions/deals';

const Message = () => (
  <FlashMessage duration={5000}>
    <div className="alert alert-warning m-2" role="alert">
      <strong>Invalied credentials!</strong>
      <p>Incorrect mobile or password. try demo user:</p>
      <ul>
        <li>mobile: a</li>
        <li>password: a</li>
      </ul>
      <p>Or <Link to='/signup'>Sign Up</Link></p>
    </div>
  </FlashMessage>
)

class Login extends Component {

  state = {
    mobile: '',
    password: '',
    showMessage: false,
  };

  handleLogin = async (event) => {
    const self = this;
    event.preventDefault();
    const user = {
      mobile: self.state.mobile,
      password: self.state.password,
    }
    login(user)
    .then(({ isAuthenticated }) => {
      if (isAuthenticated) {
        this.props.userAuthenticated()
        self.props.history.push("/");
      } else {
        this.props.logout()
        self.setState({ showMessage: true })
      }
    })
    .catch(error => console.log('Error login:', error))
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { mobile, password, showMessage } = this.state;

    return (
      <div>
        <Header />
        <div className="offset-sm-4 col-sm-4 py-4">
          <form onSubmit={this.handleLogin.bind(this)}>
            {showMessage && <Message />}
            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <div className="form-group">
              <label>Mobile Number</label>
              <input name="mobile" type="text"
                value={mobile}
                onChange={this.handleInputChange}
                id="inputMobileNumber"
                className="form-control m-2"
                placeholder="+966 Saudi mobile number"
                required autoFocus
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input name="password" type="password"
                value={password}
                onChange={this.handleInputChange}
                id="inputPassword"
                className="form-control m-2"
                placeholder="Password"
                required
              />
            </div>
            <div className="form-group">
              <div className="checkbox mb-3">
                <label className="m-2">
                  <input type="checkbox" value="remember-me"/> Remember Me
                </label>
              </div>
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
  logout: () => dispatch(logout()),
})

export default connect(undefined, mapDispatchToProps)(Login);
