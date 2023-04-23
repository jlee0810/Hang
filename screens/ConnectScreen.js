import React from "react";
import { View, Text } from "react-native";
import { SearchBar } from "react-native-screens";

import SearchBar from "../components/SearchBar";

const ConnectScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <SearchBar />
    </View>
  );
};

export default ConnectScreen;
