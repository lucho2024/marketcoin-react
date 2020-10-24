import React from "react";
import { Card, ListItem } from "react-native-elements";
import { View, Text, StyleSheet } from "react-native";
import { dynamicFontSize } from "../../utils/commons.js";

class ListCoin extends React.Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.fecthCoins();
  }
  fecthCoins = () => {
    fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false" -H "accept: application/json'
    )
      .then((result) => result.json())
      .then((data) =>
        this.setState({
          data,
        })
      );
  };

  render() {
    return this.state.data.map((coin, index) => (
      <Card key={index} containerStyle={styles.card}>
        <Card.Title style={{ fontSize: dynamicFontSize(20) }}>
          {coin.name} $:{coin.current_price} usd
        </Card.Title>
        <Card.Divider />
        <View style={styles.view}>
          <Text>{coin.market_cap_rank}</Text>
          <ListItem
            key={index}
            roundAvatar
            leftAvatar={{ source: { uri: coin.image } }}
          />
          <Text>Mcap : {coin.market_cap} usd</Text>
        </View>
      </Card>
    ));
  }
}
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 8,
  },
  view: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
  },
});
export default ListCoin;
