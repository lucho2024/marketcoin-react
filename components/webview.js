import React from "react";

import { WebView } from "react-native-webview";

// ...
function MyWebComponent({ route }) {
  return <WebView source={{ uri: route.params.data.url }} />;
}

export default MyWebComponent;
