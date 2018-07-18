import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { helloRedux } from '../actions/notes';
import Header from './Header';
import DealsList from './DealsList'
import CategoryFilters from './CategoryFilters'

const deals = [
  { dealId: 1, dealCategory: 'Travel', dealPartner: 'AlTayyar', dealPrice: 200, bgColor: 'bgRed' },
  { dealId: 2, dealCategory: 'Hotel', dealPartner: 'Ritz', dealPrice: 2500, bgColor: 'bgBlue' },
  { dealId: 3, dealCategory: 'Hotel', dealPartner: 'Hilton', dealPrice: 1500, bgColor: 'bgBlue' },
  { dealId: 4, dealCategory: 'Rent', dealPartner: 'Theeb', dealPrice: 80, bgColor: 'bgOrange' },
];

class HomePage extends Component {
  state = {
    filteredBy: 'All',
    deals
  }
  componentDidMount () {
    this.props.getNote();
  }

  filterDealsBy = (category) => {
    const deals = category === 'All' ? this.state.deals
    : this.state.deals.filter(({ dealCategory }) => dealCategory === category);
    return deals;
  }

  filterBy = (filteredBy) => this.setState({ filteredBy });

  getNumberOfDeals = (category) => 4;

  render() {
    const { filteredBy, deals } = this.state;

    return (
      <div>
        <Header />
        <div className="offset-sm-3 col-sm-6 py-4">
          <CategoryFilters deals={deals} filterBy={this.filterBy}/>
          <h4 className="border-bottom border-gray pb-2 mb-0 mt-2 ml-2">{this.state.filteredBy} Deals</h4>
          <div className="list-group list-group-flush">
            <DealsList deals={this.filterDealsBy(filteredBy)} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => {
  return {
    getNote: () => dispatch(helloRedux()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
