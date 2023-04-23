import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

const PostScreen = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [locations, setLocations] = useState([]);

  const handleLocationSelect = (data, details) => {
    const name = details.name;
    setLocations([...locations, name]);
  };

  const handleSubmit = () => {
    // Here you can submit the title, body, and location array to your API or database
    console.log("Title:", title);
    console.log("Body:", body);
    console.log("Locations:", locations);
    setTitle("");
    setBody("");
    setLocations([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter title"
          value={title}
          onChangeText={setTitle}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.label}>Body:</Text>
        <TextInput
          style={[styles.input, styles.bodyInput]}
          placeholder="Enter body"
          value={body}
          onChangeText={setBody}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      {locations.length > 0 && (
        <View style={styles.locationsContainer}>
          <Text style={styles.label}>Location Saved:</Text>
          {locations.map((location, index) => (
            <Text key={index}>{location}</Text>
          ))}
        </View>
      )}
      <GooglePlacesAutocomplete
        placeholder="Search Location"
        onPress={handleLocationSelect}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
        fetchDetails={true}
        styles={{
          container: styles.autocompleteContainer,
          textInput: styles.input,
        }}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleContainer: {
    marginBottom: 20,
  },
  bodyContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 10,
  },
  bodyInput: {
    height: 120,
    textAlignVertical: "top",
  },
  locationsContainer: {
    marginBottom: 10,
  },
});

export default PostScreen;
