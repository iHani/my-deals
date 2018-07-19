import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class AddNewDeal extends Component {

  handleCreateNewDeal (event) {
    event.preventDefault();
    const { category, partner, price } = event.target;
    const deal = {
      category: category.value,
      partner: partner.value,
      price: parseInt(price.value, 10),
    }
    console.log('deal', deal);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <Header />
        <div className="offset-sm-3 col-sm-6 py-4">
          <h3>Create New Deal</h3>
          <form onSubmit={this.handleCreateNewDeal}>
            <div className="form-group">
              <label htmlFor="categoryList">Category</label>
              <select defaultValue="initial" name="category" className="form-control" id="categoryList">
                <option value="initial" disabled hidden>Select category</option>
                {this.props.categories.map(category => <option key={category} value={category}>{category}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Partner</label>
              <input name="partner" type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label>Price</label>
              <input name="price" type="text" className="form-control"/>
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
  categories: state.categories,
 });

const mapDispatchToProps = (dispatch) => {
  return {
    // getNote: () => dispatch(helloRedux()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNewDeal);
