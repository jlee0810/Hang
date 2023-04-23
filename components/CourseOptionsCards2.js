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

const CourseOptionsCards2 = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleCardPress = () => {
    const MOCK_DATA = [
      {
        id: 1,
        name: "Rockefellor Center",
        latitude: 40.758678,
        longitude: -73.978798,
      },
      {
        id: 2,
        name: "Empire State Building",
        latitude: 40.7484,
        longitude: 73.9857,
      },
      {
        id: 3,
        name: "Statue of Liberty",
        latitude: 40.6892,
        longitude: 74.0445,
      },
      {
        id: 4,
        name: "Brooklyn Bridge",
        latitude: 40.7061,
        longitude: 73.9969,
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
            New York Travel All In onPlaceSelected
          </Text>
          <Text style={styles.info}>Author: Chen Kok</Text>
          <Text style={styles.info}>Likes: 1M</Text>
          <Text style={[styles.description]}>
            Energetic Chen is recommending all the places on this list! You
            won't regret for sure!
          </Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CourseOptionsCards2;

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
