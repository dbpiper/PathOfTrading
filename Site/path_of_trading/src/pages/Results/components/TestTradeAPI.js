import React from 'react';
import { connect } from 'react-redux';
import { loadTradeData } from '../actions/trade-api-actions';

const mapStateToProps = state => {
  return {
    tradeData: state.resultsPage.tradeAPI.tradeData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTradeData: () => dispatch(loadTradeData()),
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class TestTradeAPI extends React.Component {
  handleClick() {
    this.props.loadTradeData();
  }

  render() {
    return (
      <button onClick={() => this.handleClick()}>
        Load Trade Data
      </button>
    );
  }
}

export default TestTradeAPI;
