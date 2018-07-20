import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import NotAuthorized from './NotAuthorized';

class AddNewDeal extends Component {

  state = {
    category: '',
    partner: '',
    price: '',
  }

  handleCreateNewDeal (event) {
    event.preventDefault();
    const { category, partner, price } = this.state;
    const deal = {
      category,
      partner,
      price,
    }
    console.log('deal added:', deal);
  }

  handleInputChange = (e) => this.setState({ [e.target.name]: e.target.value });


  render() {
    const { category, partner, price } = this.state;
    const { isAuthenticated } = this.props;

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
              <select defaultValue="initial" name="category" className="form-control" id="categoryList" onChange={this.handleInputChange}>
                <option value="initial" disabled hidden>Select category</option>
                {this.props.categories.map(category => <option key={category} value={category}>{category}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Partner</label>
              <input value={partner} onChange={this.handleInputChange} name="partner" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input value={price} onChange={this.handleInputChange} name="price" type="number" className="form-control"/>
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

const mapStateToProps = (state) => ({
  state,
  isAuthenticated: state.deals.isAuthenticated,
  categories: state.categories.list,
 });


export default connect(mapStateToProps)(AddNewDeal);
