import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Marker } from "react-native-maps";

const CourseOptionsCards = () => {
  const navigation = useNavigation();
  const [data,setData] = useState({})

  const handleCardPress = () => {
    const MOCK_DATA = [
      { id: 1, name: "Hollywood", latitude: 34.098907, longitude: -118.4988 },
      { id: 2, name: "Los Angeles County Museum", latitude: 34.064251, longitude: -118.360565 },
      { id: 2, name: "TCL Chinese Theatre", latitude: 34.102047, longitude: -118.341080 },
    ];
    setData(MOCK_DATA)
    console.log(data)
  };

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => handleCardPress()}>
        <View style={styles.card}>
          <Text style={styles.title}>Museum of Modern Art</Text>
          <Text style={styles.info}>
            Address: 11 W 53rd St, New York, NY 10019
          </Text>
          <Text style={styles.info}>Phone: (212) 708-9400</Text>
          <Text style={[styles.description]}>
            The Museum of Modern Art is an art museum located in Midtown
            Manhattan, New York City, on 53rd Street between Fifth and Sixth
            Avenues.
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CourseOptionsCards;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f2f2f2",
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 14,
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    flexWrap: "wrap",
  },
});
