import { Dimensions } from "react-native";

export const dynamicFontSize = (size) => {
  const { width } = Dimensions.get("window");
  return (size * width) / 360;
};
