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
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locations, setLocations] = useState([]);

  const handleLocationSelect = (data, details) => {
    setSelectedLocation(details.geometry.location);
    setLocations([...locations, details.geometry.location]);
  };

  const renderLocation = ({ item }) => {
    return (
      <View style={styles.locationItem}>
        <Text style={styles.locationText}>
          {item.lat}, {item.lng}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
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
      {selectedLocation && (
        <View style={styles.selectedLocationContainer}>
          <Text style={styles.selectedLocationText}>
            Selected Location: {selectedLocation.lat}, {selectedLocation.lng}
          </Text>
        </View>
      )}
      {locations.length > 0 && (
        <View style={styles.locationsContainer}>
          <Text style={styles.locationsTitle}>Locations:</Text>
          <FlatList
            data={locations}
            renderItem={renderLocation}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  autocompleteContainer: {
    borderWidth: 0,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  selectedLocationContainer: {
    marginTop: 20,
  },
  selectedLocationText: {
    fontSize: 16,
  },
  locationsContainer: {
    marginTop: 20,
  },
  locationsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  locationItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
  },
  locationText: {
    fontSize: 14,
  },
});

export default PostScreen;
