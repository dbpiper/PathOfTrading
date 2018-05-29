import axios from 'axios';

import TradeAPIConstants from '../constants/TradeAPIConstants';

class TradeAPI {
  static getAllTabData() {
      return axios.get(TradeAPIConstants.corsProxy + TradeAPIConstants.endpoint);
  }
}

export default TradeAPI;
