import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTrash from 'react-icons/lib/fa/trash';
import { getDeals } from '../utils/DealsAPI';
import { fetchedDeals, deleteDeal } from '../actions/deals';

const thumbnail = '/img/placeholder_50x50.jpg';

class DealsList extends Component {

  editDeal = (id) => {console.log('editDeal', id);}
  deleteDeal = (id) => this.props.deleteDeal(id);

  componentDidMount () {
    getDeals()
    .then(deals => {
      this.props.fetchedDeals(deals);
    })
  }

  render() {
    let { deals } = this.props;
    let { selectedFilter, isAuthenticated } = this.props;
    deals = selectedFilter === "All" ? deals : deals.filter(deal => deal.dealCategory === selectedFilter);
    let dealsList = [];

    if (deals && deals.length > 0) {
      dealsList = deals.map(({ dealId, dealCategory, dealPartner, dealPrice, bgColor }) => (
        <div key={dealId} className="list-group-item list-group-item-action p-1">
          <div className="d-flex justify-content-between">
            <div>
              <img src={thumbnail} alt={dealPartner}/>
              <h6 className="d-inline p-2">{dealPartner}</h6>
              <strong>{dealPrice}</strong>
            </div>
            <div>
              {isAuthenticated && <span>
                <Link to=''><FaEdit className="m-1 grey" onClick={() => this.editDeal(dealId)}/></Link>
                <Link to=''><FaTrash className="m-1 red" onClick={() => this.deleteDeal(dealId)}/></Link>
              </span>}
              <h6 className="badge badge-primary p-2 mt-3 mr-2 rounded">{dealCategory}</h6>
            </div>
          </div>
        </div>
      ))
    }

    return dealsList;
  }
}

const mapStateToProps = (state) => {
  return {
    state,
    deals: state.deals.list,
    selectedFilter: state.categories.selectedFilter,
    isAuthenticated: state.deals.isAuthenticated,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchedDeals: (deals) => dispatch(fetchedDeals(deals)),
    // editDeal: (dealId) => dispatch(editDeal(dealId)),
    deleteDeal: (dealId) => dispatch(deleteDeal(dealId)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DealsList);
