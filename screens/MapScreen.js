import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import { Ionicons } from "@expo/vector-icons";
import CourseOptionsCards from "../components/CourseOptionsCards";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import * as Location from "expo-location";

const MapScreen = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  const dispatch = useDispatch();
  const origin = useSelector((state) => state.nav.origin);
  const [placeSelected, setPlaceSelected] = useState(false);

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
      <SafeAreaView style={tw`absolute top-0 left-0 right-0 p-4`}>
        <View
          style={tw`flex-row items-center justify-center py-3 rounded-full`}
        >
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
            placeholder={origin?.description || "Where are we headed ?"}
            styles={{
              container: {
                flex: 1,
                justifyContent: "center",
                paddingLeft: 10,
                paddingRight: 10, // add padding to the sides
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
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
