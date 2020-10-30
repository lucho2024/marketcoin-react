import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    paddingLeft: 10,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#526FFF",
    borderRadius: 15,
    marginHorizontal: 10,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 5,
  },
  left: {
    flex: 1,
  },
  right: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 5,
  },
  mc: {
    fontSize: 16,
    marginRight: 5,
  },
  red: {
    color: "red",
    marginRight: 5,
    fontSize: 18,
  },
  green: {
    color: "green",
    marginRight: 5,
    fontSize: 18,
  },
});

export default styles;
