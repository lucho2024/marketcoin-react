import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Main from "./components/MainComponent";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Moneda from "./components/moneda";
import MyWebComponent from "./components/webview";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Main}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="moneda"
          component={Moneda}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="exchange"
          component={MyWebComponent}
          options={{ headerShown: true }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
