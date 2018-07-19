import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTrash from 'react-icons/lib/fa/trash';

const thumbnail = '/img/placeholder_50x50.jpg';

class DealsList extends Component {

  editDeal = (id) => {console.log('editDeal', id);}
  deleteDeal = (id) => {console.log('deleteDeal', id);}

  render() {
    // console.log('DealsList', this.props.state);
    let { deals, selectedFilter } = this.props;
    deals = selectedFilter === "All" ? deals : deals.filter(deal => deal.dealCategory === selectedFilter);

    if (deals && deals.length > 0) {
      return deals.map(({ dealId, dealCategory, dealPartner, dealPrice, bgColor }) => (
        <div key={dealId} className="list-group-item list-group-item-action p-1">
          <div className="d-flex justify-content-between">
            <span>
              <img src={thumbnail} alt={dealPartner}/>
              <h6 className="d-inline p-2">{dealPartner}</h6>
              <strong>{dealPrice}</strong>
            </span>
            <span>
              <Link to=''><FaEdit className="m-1 grey" onClick={() => this.editDeal(dealId)}/></Link>
              <Link to=''><FaTrash className="m-1 red" onClick={() => this.deleteDeal(dealId)}/></Link>
              <h6 className="badge badge-primary p-2 mt-3 mr-2 rounded">{dealCategory}</h6>
            </span>
          </div>
        </div>
      ))
    }
    return <span></span>;

  }
}

const mapStateToProps = (state) => {
  return {
    state,
    deals: state.deals.list,
    selectedFilter: state.categories.selectedFilter,
  }
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchDeals: () => dispatch(fetchDeals()),
//   }
// };

export default connect(mapStateToProps)(DealsList);
