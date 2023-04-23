import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CourseOptionsCards = () => {

  const navigation = useNavigation();
  const handleCardPress = () => {
    navigation.navigate("Itinerary")
  };

  return (
    <ScrollView>
      <TouchableOpacity onPress={() => handleCardPress("Museum of Modern Art")}>
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
      <TouchableOpacity onPress={() => handleCardPress("Le Bernardin")}>
        <View style={styles.card}>
          <Text style={styles.title}>Le Bernardin</Text>
          <Text style={styles.info}>
            Address: 155 W 51st St, New York, NY 10019
          </Text>
          <Text style={styles.info}>Phone: (212) 554-1515</Text>
          <Text style={[styles.description]}>
            Le Bernardin is a French seafood restaurant located in Midtown
            Manhattan, New York City. It is known for its seafood dishes and has
            been awarded three Michelin stars.
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleCardPress("Central Park")}>
        <View style={styles.card}>
          <Text style={styles.title}>Central Park</Text>
          <Text style={styles.info}>Address: New York, NY 10024</Text>
          <Text style={styles.info}>Phone: (212) 310-6600</Text>
          <Text style={[styles.description]}>
            Central Park is an urban park in New York City located between the
            Upper West Side and the Upper East Side. It is the most visited
            urban park in the United States.
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
