import React, { Component, Fragment } from "react";
import { Text, ScrollView, View, FlatList } from "react-native";
import ListCoin from "./ListCoin/ListCoinComponent";
import ExchangeComponent from "./exchange/exchangeComponent";
import NavComponent from "./nav/navComponent";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

class Main extends Component {
  HomeScreen = () => {
    return (
      <View>
        <Text>Hola</Text>
      </View>
    );
  };
  render() {
    return (
      <Fragment>
        <ExchangeComponent style={styles.ec} />
        <ListCoin />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  ec: {
    marginBottom: 10,
  },
});
export default Main;
