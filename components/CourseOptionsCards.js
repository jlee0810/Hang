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
import { addWayPoint, setWayPoints } from "../slices/navSlice";
import { useDispatch, useSelector } from "react-redux";

const CourseOptionsCards = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleCardPress = () => {
    const MOCK_DATA = [
      { id: 1, name: "Hollywood", latitude: 34.098907, longitude: -118.4988 },
      {
        id: 2,
        name: "Los Angeles County Museum",
        latitude: 34.064251,
        longitude: -118.360565,
      },
      {
        id: 3,
        name: "TCL Chinese Theatre",
        latitude: 34.102047,
        longitude: -118.34108,
      },
    ];
    dispatch(
      setWayPoints({
        id: MOCK_DATA[0].id,
        name: MOCK_DATA[0].name,
        latitude: MOCK_DATA[0].latitude,
        longitude: MOCK_DATA[0].longitude,
      })
    );
    for (let i = 1; i < MOCK_DATA.length; i++) {
      dispatch(
        addWayPoint({
          id: MOCK_DATA[i].id,
          name: MOCK_DATA[i].name,
          latitude: MOCK_DATA[i].latitude,
          longitude: MOCK_DATA[i].longitude,
        })
      );
    }
  };

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => handleCardPress()}>
        <View style={styles.card}>
          <Text style={styles.title}>
            Best Hollywood date to take your girl
          </Text>
          <Text style={styles.info}>Author: Seoungmin Kim</Text>
          <Text style={styles.info}>Likes: 10k</Text>
          <Text style={[styles.description]}>
            Master of pulling girls, Seoungmin Kim gives us a peek at his best
            date routes around Hollywood.
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
