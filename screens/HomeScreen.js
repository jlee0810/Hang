import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import * as Location from "expo-location";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const origin = useSelector((state) => state.nav.origin);
  const [placeSelected, setPlaceSelected] = useState(false);

  useEffect(() => {
    const getLocationAsync = async () => {
      console.log(placeSelected);
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
    <SafeAreaView style={`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
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
          placeholder={origin?.description || "Where are we headed?"}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
