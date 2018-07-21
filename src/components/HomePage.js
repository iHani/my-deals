import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import DealsList from './DealsList'
import CategoryFilters from './CategoryFilters';

class HomePage extends Component {

  render () {
    const { selectedFilter } = this.props;
    return (
      <div>
        <Header />
        <div className="offset-sm-3 col-sm-6 py-4">
          <CategoryFilters />
          <h4 className="border-bottom border-gray pb-2 mb-0 mt-2 ml-2">{selectedFilter} Deals</h4>
          <div className="list-group list-group-flush">
            <DealsList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedFilter: state.categories.selectedFilter,
});

// const mapDispatchToProps = (dispatch) => ({
//   fetchDeals: () => dispatch(fetchDeals()),
// });

export default connect(mapStateToProps)(HomePage);
