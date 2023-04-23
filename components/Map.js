import React, { useRef, useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin, selectDestination } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

const MOCK_DATA = [
  { id: 1, name: "Waypoint 1", latitude: 34.0083, longitude: -118.4988 },
  { id: 2, name: "Waypoint 2", latitude: 34.0063, longitude: -118.493 },
  { id: 3, name: "Waypoint 3", latitude: 34.0043, longitude: -118.495 },
];
import * as Location from "expo-location";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.warn("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setUserLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
    })();
  }, []);

  useEffect(() => {
    if (origin?.location && mapRef.current) {
      mapRef.current.animateToRegion({
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      });
    }
  }, [origin]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={
        userLocation
          ? {
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }
          : {
              latitude: 34.074949,
              longitude: -118.441318,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }
      }
      showsUserLocation={true} // Add this line to show the user's current location with a blue dot
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          waypoints={MOCK_DATA}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={10}
          strokeColor="blue"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Meeting Location"
          description={origin.description}
          identifier="origin"
        />
      )}

      {MOCK_DATA.map((waypoint) => (
        <Marker
          key={waypoint.id}
          coordinate={{
            latitude: waypoint.latitude,
            longitude: waypoint.longitude,
          }}
          title={waypoint.name}
          identifier={waypoint.id.toString()}
        />
      ))}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
