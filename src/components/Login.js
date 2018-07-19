import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

class Login extends Component {

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

    return (
      <div>
        <Header />
        <div className="offset-sm-3 col-sm-6 py-4">
          <h3>Login</h3>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => {
  return {
    // getNote: () => dispatch(helloRedux()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
