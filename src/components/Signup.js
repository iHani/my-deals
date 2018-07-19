import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Signup extends Component {

  state = {
    disabled: true,
  }

  handleSignin (event) {
    event.preventDefault();
    const { mobile, password } = event.target;
    const newUser = {
      mobile: mobile.value,
      password: password.value,
    }
    console.log('newUser', newUser);
  }

  handleToggleCheck = () => this.setState(prevState => ({ disabled: !prevState.disabled }));

  render() {
    return (
      <div>
        <Header />
        <div className="offset-sm-4 col-sm-4 py-4">
          <form onSubmit={this.handleSignin}>
            <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
            <label htmlFor="inputMobileNumber" className="sr-only">Mobile Number</label>
            <input name="mobile" type="text" id="inputMobileNumber" className="form-control m-2" placeholder="+966 Saudi mobile number" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input name="password" type="password" id="inputPassword" className="form-control m-2" placeholder="Password" required />
            <div className="checkbox mb-3">
              <label className="m-2">
                <input type="checkbox" value="agreement" onChange={this.handleToggleCheck}/> Agreement
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block m-2" type="submit" disabled={this.state.disabled}>Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // getNote: () => dispatch(helloRedux()),
  }
};

export default connect(undefined, mapDispatchToProps)(Signup);
