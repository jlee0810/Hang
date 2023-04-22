import { StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <View style={tw`flex-1`}>
      <Map />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
