import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from "react-native";
import styles from "../../styles/stylesCoin";
import { useNavigation } from "@react-navigation/native";

function Coins(props) {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() => navigation.navigate("moneda", { data: props })}
    >
      <View style={styles.container}>
        <View style={styles.left}>
          <Text style={styles.name}>
            #{props.market_cap_rank} {props.name}
          </Text>
          <Image source={{ uri: props.image }} style={styles.img} />
        </View>
        <View style={styles.right}>
          <Text style={styles.price}>${props.current_price}</Text>
          <Text
            style={[
              props.price_change_percentage_24h < 0 ? styles.red : styles.green,
            ]}
          >
            {Math.round(props.price_change_percentage_24h * 100) / 100}%
          </Text>

          <Text style={styles.mc}>
            $
            {Number(props.market_cap)
              .toFixed(2)
              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
          </Text>
          <Text style={{ marginRight: 5 }}>Mcap</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default Coins;
