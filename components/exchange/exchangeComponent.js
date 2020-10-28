import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Image } from "react-native";

class ExchangeComponent extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.fecthExchanges();
  }
  fecthExchanges = () => {
    fetch("https://api.coingecko.com/api/v3/exchanges")
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
        <Image style={styles.img} source={{ uri: item.image }} />
      </View>
    );
  };
  render() {
    return (
      <View>
        <Text>Exchanges</Text>
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.state.data}
          horizontal={true}
          ListEmptyComponent={() => this.renderEmpty()}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft: 5,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
});
export default ExchangeComponent;
