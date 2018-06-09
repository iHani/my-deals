import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { helloRedux } from '../actions/notes';
import Header from './Header';

class HomePage extends Component {

  componentDidMount() {
    this.props.getNote();
  }

  render() {
    const { note } = this.props.state.notes;
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Home Page.
        </p>
        {note && <p className="App-intro">{note}</p>}
        <Link className="App-title" to="/">Home Page</Link>
        <Link className="App-title" to="/another-page">Another Page</Link>
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
