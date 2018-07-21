import React from 'react';
import Header from './Header';

const NotFoundPage = () => (
  <div>
    <Header />
    <div className="offset-sm-3 col-sm-6 py-4">
      <h3>404!</h3>
      <p>Page not found.</p>
    </div>
  </div>
);

export default NotFoundPage;
