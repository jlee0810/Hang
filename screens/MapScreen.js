import {
  StyleSheet,
  View,
  SafeAreaView,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import Destination from "../components/Destination";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import CourseOptionsCards from "../components/CourseOptionsCards";
import LocationPin from "../components/LocationPin";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import * as Location from "expo-location";
import Itinerary from "../components/Itinerary";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const MapScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  const dispatch = useDispatch();
  const origin = useSelector((state) => state.nav.origin);
  const [placeSelected, setPlaceSelected] = useState(false);

  const [isMenuVisible, setMenuVisibility] = useState(false);

  useEffect(() => {
    const getLocationAsync = async () => {
      if (!placeSelected) {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        let [address] = await Location.reverseGeocodeAsync({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
        dispatch(
          setOrigin({
            location: {
              lat: location.coords.latitude,
              lng: location.coords.longitude,
            },
            description: `${address.name}, ${address.street}, ${address.city}, ${address.region}, ${address.postalCode}, ${address.country}`,
          })
        );
      }
    };
    getLocationAsync();
  }, [placeSelected]);

  const onPlaceSelected = (data, details = null) => {
    dispatch(
      setOrigin({
        location: details.geometry.location,
        description: data.description,
      })
    );
    dispatch(setDestination(null));
    setPlaceSelected(true);
  };

  return (
    <View style={tw`flex-1`}>
      <View style={tw`h-3/5`}>
        <Map />
      </View>
      <LocationPin />
      <SafeAreaView style={tw`absolute top-0 left-0 right-0 p-4`}>
        <View style={tw`flex-row items-center justify-center py-3`}>
          <GooglePlacesAutocomplete
            nearbyPlacesAPI="GooglePlacesSearch"
            onPress={onPlaceSelected}
            returnKeyType={"search"}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
              radius: 2000,
            }}
            debounce={400}
            placeholder={"Starting Point"}
            styles={{
              container: {
                flex: 1,
                justifyContent: "center",
                marginLeft: 10,
                marginRight:5, 
              },
              textInput: {
                height: 40,
                color: "#5d5d5d",
                fontSize: 16,
                borderWidth: 1,
                borderColor: "#ccc",
                borderRadius: 20,
                paddingHorizontal: 16,
              },
              listView: {
                position: "absolute",
                top: 60,
                left: 10,
                right: 10,
                backgroundColor: "white",
                borderRadius: 5,
                elevation: 3,
                zIndex: 10,
              },
            }}
          />
          <Destination />
          <View>
            <TouchableOpacity
              onPress={() => setMenuVisibility(true)}
              style={styles.hamburgerButton}
            >
              <Icon name="bars" size={30} color="#000" />
            </TouchableOpacity>

            <Modal visible={isMenuVisible} animationType="slide">
              <View style={styles.modalContent}>
                <TouchableOpacity
                  onPress={() => {
                    setMenuVisibility(false);
                    navigation.navigate("Profile");
                  }}
                >
                  <Text style={styles.menuOption}>Profile Search</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMenuVisibility(false);
                    navigation.navigate("Post");
                  }}
                >
                  <Text style={styles.menuOption}>Write a post</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setMenuVisibility(false)}>
                  <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </View>
        </View>
      </SafeAreaView>

      <View style={tw`h-2/5`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="CourseOptionsCard"
            component={CourseOptionsCards}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Itinerary"
            component={Itinerary}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  hamburgerButton: {
    marginLeft: 10,
    marginRight: 10,
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuOption: {
    fontSize: 24,
    margin: 20,
  },
  closeButton: {
    fontSize: 24,
    margin: 20,
  },
});
