import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import {
  selectOrigin,
  selectDestination,
  selectWayPoints,
} from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_APIKEY } from "@env";

// const MOCK_DATA = [
//   { id: 1, name: "Waypoint 1", latitude: 34.0083, longitude: -118.4988 },
//   { id: 2, name: "Waypoint 2", latitude: 34.0063, longitude: -118.493 },
//   { id: 3, name: "Waypoint 3", latitude: 34.0043, longitude: -118.495 },
// ];

const Map = ({ data, dark }) => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);

  const MOCK_DATA = useSelector(selectWayPoints);
  console.log(MOCK_DATA);
  const mapRef = useRef(null);

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

  if(dark){
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      userInterfaceStyle="dark"
      mapType="mutedStandard"
      initialRegion={{
        latitude: 34.074949,
        longitude: -118.441318,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          waypoints={MOCK_DATA}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={10}
          strokeColor="gray"
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
          pinColor="green"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Final Destination"
          description={destination.description}
          identifier="destination"
          pinColor="red"
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
          pinColor="blue"
        />
      ))}
    </MapView>
  );}
  else{
    return (
      <MapView
        ref={mapRef}
        style={tw`flex-1`}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 34.074949,
          longitude: -118.441318,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            waypoints={MOCK_DATA}
            apikey={GOOGLE_MAPS_APIKEY}
            strokeWidth={10}
            strokeColor="gray"
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
            pinColor="green"
          />
        )}
  
        {destination?.location && (
          <Marker
            coordinate={{
              latitude: destination.location.lat,
              longitude: destination.location.lng,
            }}
            title="Final Destination"
            description={destination.description}
            identifier="destination"
            pinColor="red"
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
            pinColor="blue"
          />
        ))}
      </MapView>
    );
  }
};

export default Map;

const styles = StyleSheet.create({});
