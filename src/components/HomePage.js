import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchDeals } from '../actions/deals';
import Header from './Header';
import DealsList from './DealsList'
import CategoryFilters from './CategoryFilters'

// const deals = [
//   { dealId: 1, dealCategory: 'Travel', dealPartner: 'AlTayyar', dealPrice: 200, bgColor: 'bgRed' },
//   { dealId: 2, dealCategory: 'Hotel', dealPartner: 'Ritz', dealPrice: 2500, bgColor: 'bgBlue' },
//   { dealId: 3, dealCategory: 'Hotel', dealPartner: 'Hilton', dealPrice: 1500, bgColor: 'bgBlue' },
//   { dealId: 4, dealCategory: 'Rent', dealPartner: 'Theeb', dealPrice: 80, bgColor: 'bgOrange' },
// ];

class HomePage extends Component {
  state = {
    filteredBy: 'All',
  }

  componentDidMount () {
    this.props.fetchDeals()
  }

  // filterBy = (filteredBy) => this.setState({ filteredBy });

  filterDealsBy = (category) => {
    const deals = category === 'All' ? this.props.deals
    : this.props.deals.filter(({ dealCategory }) => dealCategory === category);
    return deals;
  }

  render() {
    const { filteredBy } = this.state;

    return (
      <div>
        <Header />
        <div className="offset-sm-3 col-sm-6 py-4">
          <CategoryFilters />
          <h4 className="border-bottom border-gray pb-2 mb-0 mt-2 ml-2">{filteredBy} Deals</h4>
          <div className="list-group list-group-flush">
            <DealsList deals={this.filterDealsBy(filteredBy)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ deals: state.deals });

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeals: () => dispatch(fetchDeals()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
