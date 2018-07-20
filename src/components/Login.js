import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import Header from './Header';

class Login extends Component {

  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;
    if (redirectToReferrer) {
      return <Redirect to={from.pathname} />;
    }

    return (
      <div>
        <Header />
        <div className="offset-sm-4 col-sm-4 py-4">
          <form onSubmit={this.handleLogin}>

            <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            <label htmlFor="inputMobileNumber" className="sr-only">Mobile Number</label>
            <input name="mobile" type="text" id="inputMobileNumber" className="form-control m-2" placeholder="+966 Saudi mobile number" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input name="password" type="password" id="inputPassword" className="form-control m-2" placeholder="Password" required />
            <div className="checkbox mb-3">
              <label className="m-2">
                <input type="checkbox" value="remember-me"/> Remember Me
              </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block m-2" type="submit" onClick={this.login}>Login</button>
          </form>
        </div>
      </div>
    );
  }


    //
    // handleLogin (event) {
    //   event.preventDefault();
    //   const { mobile, password } = event.target;
    //   const loginUser = {
    //     mobile: mobile.value,
    //     password: password.value,
    //   }
    //   console.log('loginUser', loginUser);
    // }

  // render() {
  //
  //   return (
  //     <div>
  //       <Header />
  //       <div className="offset-sm-4 col-sm-4 py-4">
  //         <form onSubmit={this.handleLogin}>
  //           <h1 className="h3 mb-3 font-weight-normal">Login</h1>
  //           <label htmlFor="inputMobileNumber" className="sr-only">Mobile Number</label>
  //           <input name="mobile" type="text" id="inputMobileNumber" className="form-control m-2" placeholder="+966 Saudi mobile number" required autoFocus />
  //           <label htmlFor="inputPassword" className="sr-only">Password</label>
  //           <input name="password" type="password" id="inputPassword" className="form-control m-2" placeholder="Password" required />
  //           <div className="checkbox mb-3">
  //             <label className="m-2">
  //               <input type="checkbox" value="remember-me"/> Remember Me
  //             </label>
  //           </div>
  //           <button className="btn btn-lg btn-primary btn-block m-2" type="submit">Login</button>
  //         </form>
  //       </div>
  //     </div>
  //   );
  // }
}


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default Login;
