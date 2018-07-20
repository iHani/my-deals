import React, { Component } from 'react';
import Header from './Header';

class NotAuthorized extends Component {

  render() {
    const { selectedFilter } = this.props;
    return (
      <div>
        <Header />
        <div className="offset-sm-3 col-sm-6 py-4">
          <h3>Unauthorized!</h3>
          <p>Please sign up or login in to continue.</p>
        </div>
      </div>
    );
  }
}

export default NotAuthorized
