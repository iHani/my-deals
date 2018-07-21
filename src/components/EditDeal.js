import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editDeal } from '../actions/deals';
import Header from './Header';
import NotAuthorized from './NotAuthorized';

class AddNewDeal extends Component {

  state = {
    categories: [],
    dealCategory: '',
    dealPartner: '',
    dealPrice: '',
  }

  componentDidMount () {
    const deal = this.props.deals.find(deal => deal.dealId === this.props.match.params.id)
    this.setState({ ...deal })
  }

  handleEditDeal = (event) => {
    event.preventDefault();
    const { dealId, dealCategory, dealPartner, dealPrice } = this.state;
    const deal = {
      dealCategory,
      dealPartner,
      dealPrice,
    }

    this.props.editDeal(dealId, deal)
    this.props.history.push("/");
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render () {
    const { dealCategory, dealPartner, dealPrice } = this.state;
    const { isAuthenticated, deals } = this.props;
    // get set of unique categories from existing deals
    const categories = [...new Set(deals.map(({ dealCategory }) => dealCategory))]

    if (!isAuthenticated) {
      return <NotAuthorized />
    }

    return (
      <div>
        <Header />
        <div className="offset-sm-3 col-sm-6 py-4">
          <h3>Edit Deal</h3>
          <form onSubmit={this.handleEditDeal.bind(this)}>
            <div className="form-group">
              <label htmlFor="categoryList">Category</label>
              <select value={dealCategory} name="dealCategory" className="form-control" id="categoryList" onChange={this.handleInputChange}>
                {categories.map(category => <option key={category} value={category}>{category}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Partner</label>
              <input value={dealPartner} onChange={this.handleInputChange} name="dealPartner" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input value={dealPrice} onChange={this.handleInputChange} name="dealPrice" type="number" className="form-control"/>
            </div>
            <div className="form-group text-center">
              <button type="submit" className="btn btn-info width-200 m-2">Save changes</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ deals, categories }) => ({
  deals: deals.list,
  isAuthenticated: deals.isAuthenticated,
  categories: categories.list,
});

const mapDispatchToProps = (dispatch) => ({
  editDeal: (id, deal) => dispatch(editDeal(id, deal))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDeal);
