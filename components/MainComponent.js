import React, { Component, Fragment } from "react";
import { Text, View } from "react-native";
import ListCoin from "./ListCoin/ListCoinComponent";
import ExchangeComponent from "./exchange/exchangeListComponent";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import WebView from "react-native-webview";

const Tab = createMaterialBottomTabNavigator();
const prueba = () => {
  return <WebView source={{ uri: "https://reactnative.dev/" }} />;
};
class Main extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginTop: 30 }}>
        <ExchangeComponent style={styles.ec} />

        <Tab.Navigator
          initialRouteName="List"
          activeColor="white"
          style={{ backgroundColor: "white" }}
        >
          <Tab.Screen
            name="List"
            component={ListCoin}
            options={{
              tabBarLabel: "List",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="currency-btc"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Convert"
            component={prueba}
            options={{
              tabBarLabel: "Convert",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="home-currency-usd"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Events"
            component={ListCoin}
            options={{
              tabBarLabel: "Event",
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons
                  name="calendar"
                  color={color}
                  size={26}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default Main;
