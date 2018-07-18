import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const thumbnail ='/img/placeholder_50x50.jpg';

class DealsList extends Component {
    render() {
      const deals = this.props.deals || [];
      return deals.map(({ dealId, dealCategory, dealPartner, dealPrice }) => (
        <Link key={dealId} className="list-group-item list-group-item-action p-1" to={`/deal/${dealId}`}>
        <div className="d-flex justify-content-between">
          <span>
            <img src={thumbnail} alt={dealPartner}/>
            <h6 className="d-inline p-2">{dealPartner}</h6>
            <strong>{dealPrice}</strong>
          </span>
          <span>
            <span>del</span>
            <span className="d-inline p-2">{dealCategory}</span>
          </span>
        </div>
      </Link>
    ))
  }
}

export default DealsList;
