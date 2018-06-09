import React from 'react';
import reactLogo from '../react.svg';
import reduxLogo from '../redux.svg';
import reactRouterLogo from '../react-router.svg';
import '../App.css';

const Header = () => (
  <header className="App-header">
    <img src={reactLogo} className="App-logo" alt="React logo" />
    <img src={reduxLogo} className="App-logo" alt="Redux logo" />
    <img src={reactRouterLogo} className="App-logo" alt="React Router logo" />
    <h1 className="App-title">React Redux React-Router Boilerplate</h1>
  </header>
);

export default Header;
