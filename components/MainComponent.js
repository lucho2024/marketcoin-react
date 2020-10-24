import React, { Component } from "react";
import { Text, ScrollView } from "react-native";
import ListCoin from "./ListCoin/ListCoinComponent";
import NavComponent from "./nav/navComponent";
import { StyleSheet } from "react-native";

class Main extends Component {
  render() {
    return (
      <ScrollView>
        <ListCoin style={styles.List} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  List: {
    paddingTop: 20,
    backgroundColor: "#0B2532",
  },
});
export default Main;
