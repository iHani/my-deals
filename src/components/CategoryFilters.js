import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateFilterBy } from '../actions/categories';

class CategoryFilters extends Component {

  getNumberOfPosts = (category) => {
    return this.props.deals.filter(deal => deal.dealCategory === category).length;
  }

  render() {
    const { categories, deals } = this.props;
    // console.log('CategoryFilters', this.props);
    return (
      <div className="App">
        <h4 className="text-dark d-inline ml-2">Categories</h4>
        <Link className="badge badge-light m-1 p-2 fs-100" to={``} onClick={() => this.props.updateFilterBy("All")}>
          All <span className="badge badge-light ml-2">{deals.length}</span>
        </Link>
        {categories.length && categories.map(category => (
          <Link key={category} className="badge badge-primary m-1 p-2 fs-100" to={``} onClick={() => this.props.updateFilterBy(category)}>
            {category}
            <span className="badge badge-light rounded ml-2">{this.getNumberOfPosts(category)}</span>
          </Link>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    deals: state.deals.list,
    categories: state.categories.list,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateFilterBy: (filter) => dispatch(updateFilterBy(filter)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilters);
