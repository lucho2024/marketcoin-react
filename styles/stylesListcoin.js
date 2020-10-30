import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  sele: {
    flexDirection: "row",
    marginVertical: 15,
    justifyContent: "space-around",
    alignItems: "center",
  },
  textCurre: {
    fontWeight: "bold",
    fontSize: 24,
  },
  viewButton: {
    flexDirection: "row",
  },
  active: {
    color: "green",
  },
  blue: {
    backgroundColor: "blue",
    color: "white",
    width: 45,
    height: 30,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  gray: {
    backgroundColor: "gray",
    color: "white",
    width: 45,
    height: 30,
    marginRight: 2,
    borderRadius: 10,
    alignItems: "center",
  },
  pages: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  pagesbtn: {
    backgroundColor: "blue",
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export default styles;
