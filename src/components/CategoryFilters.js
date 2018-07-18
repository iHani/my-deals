import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CategoryFilters extends Component {

  state = {
    categories: [],
  }

  componentDidMount () {
    const { deals } = this.props || [];
    const categories = [...new Set(deals.map(({ dealCategory }) => dealCategory))];
    this.setState({ categories })
  }

  getNumberOfPosts = (category) => this.props.deals.filter(({ dealCategory }) => dealCategory === category).length;

  render() {
    const { categories } = this.state;
    const { deals, filterBy } = this.props;
    return (
      <div className="App">
        <h4 className="text-dark d-inline">Categories</h4>
        <Link className="badge badge-light m-1 p-3 fs-100" to={``} onClick={() => filterBy("All")}>
          All <span className="badge badge-light ml-2">{deals.length}</span>
        </Link>
        {categories.length && categories.map(category => (
          <Link key={category} className="badge badge-primary m-1 p-3 fs-100" to={``} onClick={() => filterBy(category)}>
            {category} <span className="badge badge-light ml-2">{this.getNumberOfPosts(category)}</span>
          </Link>
        ))}
      </div>
    );
  }
}

export default CategoryFilters;
