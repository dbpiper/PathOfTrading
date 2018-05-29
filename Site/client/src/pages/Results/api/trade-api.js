import axios from 'axios';

import TradeAPIConstants from '../constants/TradeAPIConstants';

class TradeAPI {
  static getAllTabData() {
      return axios.get(TradeAPIConstants.corsProxy1 + TradeAPIConstants.endpoint)
        .catch(() => {
          return axios.get(TradeAPIConstants.corsProxy2 + TradeAPIConstants.endpoint);
        });
  }
}

export default TradeAPI;
