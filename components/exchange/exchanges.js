import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../../styles/stylesExchange";

function Exchange(item) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("exchange", { data: item })}
      >
        <Image style={styles.img} source={{ uri: item.image }} />
      </TouchableOpacity>
    </View>
  );
}

export default Exchange;
