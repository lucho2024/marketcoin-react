import React from "react";
import { Card, ListItem } from "react-native-elements";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import NumberFormat from "react-number-format";
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
  keyExtractor = (item) => {
    return item.id.toString();
  };
  renderEmpty = () => <Text>No hay informacion</Text>;
  renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.name}>
            #{item.market_cap_rank} {item.name}
          </Text>
          <Image source={{ uri: item.image }} style={styles.img} />
        </View>
        <View style={styles.right}>
          <Text style={styles.price}>${item.current_price}</Text>
          <Text
            style={[
              item.price_change_percentage_24h < 0 ? styles.red : styles.green,
            ]}
          >
            {Math.round(item.price_change_percentage_24h * 100) / 100}%
          </Text>

          <Text style={styles.mc}>
            $
            {Number(item.market_cap)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </Text>
          <Text style={{ marginRight: 5 }}>Mcap</Text>
        </View>
      </View>
    );
  };
  render() {
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.data}
        ListEmptyComponent={() => this.renderEmpty()}
        renderItem={this.renderItem}
      />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#EEEEEE",
    paddingLeft: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#D6D4D4",
    borderRadius: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
  mc: {
    fontSize: 16,
    marginRight: 5,
  },
  red: {
    color: "red",
    marginRight: 5,
    fontSize: 18,
  },
  green: {
    color: "green",
    marginRight: 5,
    fontSize: 18,
  },
});
export default ListCoin;
