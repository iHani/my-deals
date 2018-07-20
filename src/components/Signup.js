import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/deals';
import createHistory from 'history/createBrowserHistory';
import Header from './Header';

const history = createHistory({ forceRefresh: true });

class Signup extends Component {

  state = {
    mobile: '',
    password: '',
    disabled: true,
  }

  handleSignup = async (event) => {
    event.preventDefault();
    try {
      const user = {
        mobile: this.state.mobile,
        password: this.state.password,
      }
      console.log("New user", user);
      const authenticate = await this.props.signup(user);
      authenticate && this.props.history.push("/");
    } catch (error) {
      console.log('Error sign up:', error);
    }
  }

  handleToggleCheck = () => this.setState(prevState => ({ disabled: !prevState.disabled }));

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div>
        <Header />
        <div className="offset-sm-4 col-sm-4 py-4">
          <form onSubmit={this.handleSignup.bind(this)}>
            <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
            <label htmlFor="inputMobileNumber" className="sr-only">Mobile Number</label>
            <input name="mobile" type="text"
              value={this.state.mobile}
              onChange={this.handleInputChange}
              id="inputMobileNumber"
              className="form-control m-2"
              placeholder="+966 Saudi mobile number"
              required autoFocus
            />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input name="password" type="password"
              value={this.state.password}
              onChange={this.handleInputChange}
              id="inputPassword"
              className="form-control m-2"
              placeholder="Password"
              required
            />
            <div className="checkbox mb-3">
              <label className="m-2">
                <input name="agreement" type="checkbox" onChange={this.handleToggleCheck}/> Agreement
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block m-2" type="submit" disabled={this.state.disabled}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
})

export default connect(undefined, mapDispatchToProps)(Signup);
