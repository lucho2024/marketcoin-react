import React, { useEffect, useState } from "react";
import { Text, View, FlatList, SafeAreaView } from "react-native";
import Api from "../../utils/api";
import styles from "../../styles/stylesListexchange";
import Exchange from "./exchanges";

function ExchangeComponent() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fecthExchanges();
  }, []);

  const fecthExchanges = async () => {
    const res = await Api.getExchanges();

    setData(res);
  };
  const keyExtractor = (item) => {
    return item.id.toString();
  };
  const renderEmpty = () => <Text>No hay informacion</Text>;

  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.viewTitle}>
          <Text style={styles.title}>Exchanges</Text>
        </View>

        <FlatList
          keyExtractor={keyExtractor}
          data={data}
          horizontal={true}
          ListEmptyComponent={() => renderEmpty()}
          renderItem={({ item }) => <Exchange {...item} />}
        />
      </View>
    </SafeAreaView>
  );
}

export default ExchangeComponent;
