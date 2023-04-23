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

  const handleCardPress = (datas) => {
    dispatch(
      setWayPoints({
        id: datas[0].id,
        name: datas[0].name,
        latitude: datas[0].latitude,
        longitude: datas[0].longitude,
      })
    );
    for (let i = 1; i < datas.length; i++) {
      dispatch(
        addWayPoint({
          id: datas[i].id,
          name: datas[i].name,
          latitude: datas[i].latitude,
          longitude: datas[i].longitude,
        })
      );
    }
  };

  const Hollywood = [
    {
      id: 1,
      name: "Hollywood Sign",
      latitude: 34.134117,
      longitude: -118.321495,
    },
    {
      id: 2,
      name: "Griffith Observatory",
      latitude: 34.136555,
      longitude: -118.294197,
    },
    {
      id: 3,
      name: "TCL Chinese Theatre",
      latitude: 34.102047,
      longitude: -118.34108,
    },
  ];

  const SantaMonica = [
    {
      id: 1,
      name: "Santa Monica Pier",
      latitude: 34.01009,
      longitude: -118.496948,
    },
    {
      id: 2,
      name: "Venice Beach",
      latitude: 33.98827,
      longitude: -118.472023,
    },
    {
      id: 3,
      name: "Santa Monica",
      latitude: 34.0084,
      longitude: -118.494,
    },
  ];

  const WestWood = [
    { id: 1, name: "UCLA", latitude: 34.074949, longitude: -118.441318 },
    {
      id: 2,
      name: "Hammer Museum",
      latitude: 34.055666444,
      longitude: -118.439498242,
    },
    {
      id: 3,
      name: "Getty Museum",
      latitude: 34.073166374,
      longitude: -118.47166478,
    },
  ];

  const NewYork = [
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

  return (
    <ScrollView>
      {/* <TouchableOpacity onPress={() => handleCardPress(Hollywood)}>
        <View style={styles.card}>
          <Text style={styles.title}>
            Best Hollywood date to take your girl
          </Text>
          <Text style={styles.info}>Author: Seoungmin Kim</Text>
          <Text style={styles.info}>Likes: 10k</Text>
          <Text style={styles.info}>Date Added: April/23/2023</Text>
          <Text style={[styles.description]}>
            Welcome to Hollywood, the entertainment capital of the world! From
            the legendary Hollywood Walk of Fame to the historic TCL Chinese
            Theatre, this neighborhood is steeped in movie magic and glamour.
            Take a tour of the iconic Paramount Pictures Studios, see a show at
            the Dolby Theatre, and maybe even catch a glimpse of your favorite
            celebrity. Get ready for an unforgettable adventure in the heart of
            Tinseltown!
          </Text>
        </View>
      </TouchableOpacity> */}
{/* 
      <TouchableOpacity onPress={() => handleCardPress(SantaMonica)}>
        <View style={styles.card}>
          <Text style={styles.title}>A Sunny Day for the Beach</Text>
          <Text style={styles.info}>Author: Joonwon Lee</Text>
          <Text style={styles.info}>Likes: 8k</Text>
          <Text style={styles.info}>Date Added: April/23/2023</Text>
          <Text style={[styles.description]}>
            Santa Monica Beach offers golden sands and warm sun, with the iconic
            pier and Muscle Beach nearby. Venice Beach is a colorful mix of
            street performers, artists, and vendors along the famous boardwalk,
            with surfers riding the waves and a variety of shops and
            restaurants. It's the perfect place to relax and enjoy the beauty of
            the sea.
          </Text>
        </View>
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => handleCardPress(WestWood)}>
        <View style={styles.card}>
          <Text style={styles.title}>Time for school!</Text>
          <Text style={styles.info}>Author: Chen</Text>
          <Text style={styles.info}>Likes: 3k</Text>
          <Text style={styles.info}>Date Added: April/23/2023</Text>
          <Text style={[styles.description]}>
            Begin your tour at UCLA, one of the top universities in the United
            States. 
          </Text>
        </View>
      </TouchableOpacity>

      {/* <TouchableOpacity onPress={() => handleCardPress(NewYork)}>
        <View style={styles.card}>
          <Text style={styles.title}>A Busy Day!</Text>
          <Text style={styles.info}>Author: Julie Quan</Text>
          <Text style={styles.info}>Likes: 1.5k</Text>
          <Text style={styles.info}>Date Added: April/23/2023</Text>
          <Text style={[styles.description]}>
            New York: A city that never sleeps. From the towering skyscrapers of
            Manhattan to the iconic Statue of Liberty, the bustling streets of
            Times Square, and the tranquil oasis of Central Park, this city
            offers endless excitement and diversity. Whether you're a foodie, a
            fashionista, a history buff, or an art lover, New York has something
            for everyone.
          </Text>
        </View>
      </TouchableOpacity> */}
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
