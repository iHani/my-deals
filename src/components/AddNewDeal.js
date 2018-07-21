import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { createNewDeal } from '../utils/DealsAPI';
import { newDeal } from '../actions/deals';
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
    this.setState({ categories: this.props.categories })
  }

  handleCreateNewDeal = async (event) => {
    event.preventDefault();
    const { dealCategory, dealPartner, dealPrice } = this.state;
    const deal = {
      dealId: uuid(),
      dealCategory,
      dealPartner,
      dealPrice,
    }

    createNewDeal(deal)
    .then(() => {
      this.props.newDeal(deal)
      this.props.history.push("/");
    })
    .catch(error => console.log('Error creating new deal:', error))
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render () {
    const { dealPartner, dealPrice} = this.state;
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
          <h3>Create New Deal</h3>
          <form onSubmit={this.handleCreateNewDeal.bind(this)}>
            <div className="form-group">
              <label htmlFor="categoryList">Category</label>
              <select defaultValue="initial" name="dealCategory" className="form-control" id="categoryList" onChange={this.handleInputChange}>
                <option value="initial" hidden>Select category</option>
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
              <button type="submit" className="btn btn-info width-200 m-2">Create</button>
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
   newDeal: (deal) => dispatch(newDeal(deal))
 });

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDeal);
