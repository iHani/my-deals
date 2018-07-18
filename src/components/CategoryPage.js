import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import DealsList from './DealsList'

const deals = [
  { id: '1', thumbnail: '/img/placeholder_50x50.jpg', title: '70% OFF Rent deal' },
  { id: '2', thumbnail: '/img/placeholder_50x50.jpg', title: '$150 Hotel' },
  { id: '3', thumbnail: '/img/placeholder_50x50.jpg', title: '$225 Hotel' },
  { id: '4', thumbnail: '/img/placeholder_50x50.jpg', title: '2210 Travel Deal' },
]

class CategoryPage extends Component {
  render() {
    const { category } = this.props.match.params;
    return (
      <div>
        <Header />
        <div className="col-sm-8 offset-sm-2 py-4">
          <h2 className="border-bottom border-gray pb-2 mb-0">{category}</h2>
          <div className="list-group list-group-flush">
            <DealsList deals={deals} />
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryPage;
