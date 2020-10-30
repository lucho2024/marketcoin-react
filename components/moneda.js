import React, { Component } from "react";
import { Text } from "react-native";

function Moneda({ route }) {
  alert(route.params.data.name);
  return <Text>{route.params.data.name}</Text>;
}

export default Moneda;
