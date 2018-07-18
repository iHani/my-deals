import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FaEdit from 'react-icons/lib/fa/edit';
import FaTrash from 'react-icons/lib/fa/trash';

const thumbnail ='/img/placeholder_50x50.jpg';

class DealsList extends Component {

  editDeal = (id) => {console.log('editDeal', id);}
  deleteDeal = (id) => {console.log('deleteDeal', id);}

    render() {
      const deals = this.props.deals || [];
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
            <h6 className={`badge badge-primary p-2 mt-3 mr-2 rounded ${bgColor}`}>{dealCategory}</h6>
          </span>
        </div>
      </div>
    ))
  }
}

export default DealsList;
