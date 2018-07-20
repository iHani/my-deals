import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import FaPlus from 'react-icons/lib/fa/plus';
import { logout } from '../actions/deals';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">Deals Provider System</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        {props.isAuthenticated &&
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/new-deal">
              <FaPlus/>New Deal
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="" onClick={() => props.logout()}>Logout</Link>
          </li>
        </ul>
      }
      {!props.isAuthenticated && <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/signup">Sign up</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
      </ul>}
    </div>
  </nav>
);
}


const mapStateToProps = (state) => ({
  isAuthenticated: state.deals.isAuthenticated,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
