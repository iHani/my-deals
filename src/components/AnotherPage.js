import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class AnotherPage extends Component {

  render() {
    // handling routes to '/anoter-page/:id' see 'routers/AppRouter.js'
    const { id } = this.props.match.params;
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Another Page. {id && <span>Page ID: {id}</span>}
        </p>
        <Link className="App-title" to="/">Home Page</Link>
        <Link className="App-title" to="/another-page">Another Page</Link>
      </div>
    );
  }
}

export default AnotherPage;
