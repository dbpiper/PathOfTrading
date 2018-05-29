import tradeAPI from '../api/trade-api';
import { LOAD_TRADE_DATA_SUCCESS } from '../constants/ActionTypes';

const cleanUpData = tradeData => {
  // tradeData.map(array => array.filter(item => item.public));
  return tradeData.filter(item => item.public);
};

export const loadTradeData = () => {
  return dispatch => {
    return tradeAPI.getAllTabData().then(tradeData => {
      console.log('loadTradeData');
      const cleanedTradeData = cleanUpData(tradeData.data.stashes);
      console.log(cleanedTradeData);
      dispatch(loadTradeDataSuccess(cleanedTradeData));
    })
    .catch(error => {
      console.log(error);
      throw(error);
    });
  }
};

export const loadTradeDataSuccess = tradeData => {
  return {
    type: LOAD_TRADE_DATA_SUCCESS,
    payload: tradeData,
  };
};
