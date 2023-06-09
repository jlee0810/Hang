import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const Itinerary = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Text style={styles.title}>MOCK_DATA.title</Text>
        <Text style={styles.subtitle}>Day 1:</Text>
        <Text style={styles.description}>- Visit the Statue of Liberty</Text>
        <Text style={styles.description}>
          - Walk across the Brooklyn Bridge
        </Text>
        <Text style={styles.description}>
          - Explore the 9/11 Memorial and Museum
        </Text>
        <Text style={styles.subtitle}>Day 2:</Text>
        <Text style={styles.description}>
          - Take a bike ride through Central Park
        </Text>
        <Text style={styles.description}>
          - Visit the Metropolitan Museum of Art
        </Text>
        <Text style={styles.description}>
          - Enjoy a Broadway show in the evening
        </Text>
        <Text style={styles.subtitle}>Day 3:</Text>
        <Text style={styles.description}>
          - Walk through the colorful streets of Chinatown
        </Text>
        <Text style={styles.description}>
          - Explore the trendy shops and restaurants of SoHo
        </Text>
        <Text style={styles.description}>
          - Visit the Top of the Rock observation deck for stunning views of the
          city
        </Text>
      </View>
    </ScrollView>
  );
};

MOCK_DATA = [
  {
    title: "Julie's Recommended New York Tour Itinerary ❤️",
    days: [
      {
        subtitle: "Day 1:",
        description: [
          "- Visit the Statue of Liberty",
          "- Walk across the Brooklyn Bridge",
          "- Explore the 9/11 Memorial and Museum",
        ],
      },
      {
        subtitle: "Day 2:",
        description: [
          "- Take a bike ride through Central Park",
          "- Visit the Metropolitan Museum of Art",
          "- Enjoy a Broadway show in the evening",
        ],
      },
      {
        subtitle: "Day 3:",
        description: [
          "- Walk through the colorful streets of Chinatown",
          "- Explore the trendy shops and restaurants of SoHo",
          "- Visit the Top of the Rock observation deck for stunning views of the city",
        ],
      },
    ],
  },
];

export default Itinerary;

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingVertical: 40,
  },
  container: {
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 5,
  },
});
