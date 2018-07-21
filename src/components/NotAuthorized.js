import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotAuthorized = () => (
  <div>
    <Header />
    <div className="offset-sm-3 col-sm-6 py-4">
      <h3>Unauthorized!</h3>
      <p><Link to='/login'>Login</Link> with the user below or <Link to='/signup'>Sign Up</Link>.</p>
      <ul>
        <li>mobile: a</li>
        <li>password: a</li>
      </ul>
    </div>
  </div>
);

export default NotAuthorized;
