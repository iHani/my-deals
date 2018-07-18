import React from 'react';
import { Link } from 'react-router-dom';
import FaPlus from 'react-icons/lib/fa/plus';

const userIsSignedIn = false;

const navbarLinks = [
  { title: 'About', url: 'about' },
  { title: 'Contact', url: 'contact' },
];

const categories = [
  { title: 'All', url: '/all', numberOfPosts: 14, classNames: 'badge badge-light m-1 p-3 fs-100' },
  { title: 'Hotels', url: '/hotels', numberOfPosts: 4, classNames: 'badge badge-primary m-1 p-3 fs-100' },
  { title: 'Rent', url: '/rent', numberOfPosts: 3, classNames: 'badge badge-info m-1 p-3 fs-100' },
  { title: 'Travel', url: '/travel', numberOfPosts: 7, classNames: 'badge badge-success m-1 p-3 fs-100' },
];
const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Deals Provider System</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/new-deal">
          <FaPlus/>New Deal
        </Link>
      </li>
    </ul>
    {!userIsSignedIn && <ul className="navbar-nav">
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

export default Header;
