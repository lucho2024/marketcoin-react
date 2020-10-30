import React, { Fragment, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import styles from "../../styles/stylesListcoin";
import { createStackNavigator } from "@react-navigation/stack";
import Coins from "./coins";

import Api from "../../utils/api";

const Stack = createStackNavigator();

function ListCoin() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedValue, setSelectValue] = useState("usd");
  const [refresh, setRefresh] = useState(false);
  const [next, setNext] = useState(0);

  useEffect(() => {
    fecthCoins();
  }, []);

  useEffect(() => {
    fecthCoins();
  }, [refresh]);

  const fecthCoins = async () => {
    const res = await Api.getCoins(selectedValue, next);

    setData(res);
  };

  const handleUsd = (item) => {
    setSelectValue(item);
    setRefresh(!refresh);
  };

  const handleEur = (item) => {
    setSelectValue(item);
    setRefresh(!refresh);
  };
  const handleJpy = (item) => {
    setSelectValue(item);
    setRefresh(!refresh);
  };
  const handleNext = () => {
    setNext(next + 1);

    setRefresh(!refresh);
  };
  const handlePrev = () => {
    setNext(next - 1);

    setRefresh(!refresh);
  };

  const keyExtractor = (item) => {
    return item.id.toString();
  };
  const renderEmpty = () => <Text>No hay informacion</Text>;

  return (
    <Fragment>
      <View style={styles.sele}>
        <Text style={styles.textCurre}>Select Currency</Text>
        <View style={styles.viewButton}>
          <TouchableOpacity onPress={() => handleUsd("usd")}>
            <View style={[selectedValue === "usd" ? styles.blue : styles.gray]}>
              <Text style={{ color: "white" }}>USD</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEur("eur")}>
            <View style={[selectedValue === "eur" ? styles.blue : styles.gray]}>
              <Text style={{ color: "white" }}>EUR</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => handleJpy("jpy")}>
            <View style={[selectedValue === "jpy" ? styles.blue : styles.gray]}>
              <Text style={{ color: "white" }}>JPY</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        keyExtractor={keyExtractor}
        data={data}
        extraData={refresh}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fecthCoins} />
        }
        ListEmptyComponent={() => renderEmpty()}
        renderItem={({ item }) => <Coins {...item} />}
      />

      <View style={styles.pages}>
        <TouchableOpacity onPress={() => handlePrev()}>
          <View style={styles.pagesbtn}>
            <Text style={{ color: "white" }}>Prev page</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNext()}>
          <View style={styles.pagesbtn}>
            <Text style={{ color: "white" }}>Next page</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Fragment>
  );
}

export default ListCoin;
