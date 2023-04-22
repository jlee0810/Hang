import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import { Ionicons } from "@expo/vector-icons";

const MapScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  // Function to handle the back button press
  const handleBackPress = () => {
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={tw`flex-1`}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Map */}
      <Map />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1,
  },
});
