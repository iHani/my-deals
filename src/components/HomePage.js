import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchDeals } from '../actions/deals';
import Header from './Header';
import DealsList from './DealsList'
import CategoryFilters from './CategoryFilters'

class HomePage extends Component {

  componentDidMount () {
    this.props.fetchDeals();
  }

  // filterBy = (filteredBy) => this.setState({ filteredBy });

  filterDealsBy = (category) => {
    const deals = category === 'All' ? this.props.deals
    : this.props.deals.filter(({ dealCategory }) => dealCategory === category);
    return deals;
  }

  render() {
    const { selectedFilter } = this.props;
    return (
      <div>
        <Header />
        <div className="offset-sm-3 col-sm-6 py-4">
          <CategoryFilters />
          <h4 className="border-bottom border-gray pb-2 mb-0 mt-2 ml-2">{selectedFilter} Deals</h4>
          <div className="list-group list-group-flush">
            <DealsList deals={this.filterDealsBy(selectedFilter)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state,
  selectedFilter: state.categories.selectedFilter,
  deals: state.deals.list
});

const mapDispatchToProps = (dispatch) => ({
  fetchDeals: () => dispatch(fetchDeals()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
