import React from 'react';
import { connect } from 'react-redux';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

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

const GET_STASHES = gql`
  query TestTradeAPIQuery {
    stashes {
      id
      public
      accountName
      lastCharacterName
      stash
      stashType
    }
  }
`;

@connect(mapStateToProps, mapDispatchToProps)
class TestTradeAPI extends React.Component {
  handleClick() {
    this.props.loadTradeData();
  }

  render() {
    return (
      // <button onClick={() => this.handleClick()}>
      //   Load Trade Data
      // </button>
      <Query query={GET_STASHES}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;

          return (
            <React.Fragment>
              {data.stashes.map(stash => (
                <div key={stash.id}>
                  {stash.stash}
                </div>
              ))}
            </React.Fragment>
          );
        }}
      </Query>
    );
  }
}

export default TestTradeAPI;
