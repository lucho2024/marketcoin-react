import axios from "axios";
import { LogBox } from "react-native";

const BASE_API = "https://api.coingecko.com/api/v3/";

class Api {
  async getCoins(currency, page) {
    const res = await axios.get(
      `${BASE_API}coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
    );

    return res.data;
  }
  async getExchanges() {
    const res = await axios.get(`${BASE_API}exchanges`);
    console.log(res.data);
    return res.data;
  }
}
export default new Api();
