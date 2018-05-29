import axios from 'axios';

import TradeAPIConstants from '../constants/TradeAPIConstants';

class TradeAPI {
  static getStashes() {
      return axios.get(TradeAPIConstants.endpoint);
  }
}

export default TradeAPI;
