import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import CourseOptionsCards from "./CourseOptionsCards";
import CourseOptionsCards2 from "./CourseOptionsCards2";
const NavigateCard = () => {
  const [selectedTab, setSelectedTab] = useState("nearYou");

  const handleTabPress = (tab) => {
    setSelectedTab(tab);
  };

  const renderNearYouCards = () => {
    return (
      <ScrollView>
        <CourseOptionsCards />
        <CourseOptionsCards2 />
      </ScrollView>
    );
  };

  const renderRecentlyAddedCards = () => {
    // implementation for recently added cards
    return (
      <ScrollView>
        <CourseOptionsCards />
        <CourseOptionsCards2 />
      </ScrollView>
    );
  };

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View
        style={tw`flex-row justify-between items-center p-4 border-b border-gray-200`}
      >
        <TouchableOpacity
          style={[
            tw`flex-1`,
            selectedTab === "nearYou" && tw`border-b-2 border-blue-500`,
          ]}
          onPress={() => handleTabPress("nearYou")}
        >
          <Text
            style={[
              tw`text-center font-bold`,
              selectedTab === "nearYou" && tw`text-blue-500`,
              { fontSize: 14 },
            ]}
          >
            Near You
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            tw`flex-1`,
            selectedTab === "recentlyAdded" && tw`border-b-2 border-blue-500`,
          ]}
          onPress={() => handleTabPress("recentlyAdded")}
        >
          <Text
            style={[
              tw`text-center font-bold`,
              selectedTab === "recentlyAdded" && tw`text-blue-500`,
              { fontSize: 14 },
            ]}
          >
            Recently Added
          </Text>
        </TouchableOpacity>
      </View>
      {selectedTab === "nearYou"
        ? renderNearYouCards()
        : renderRecentlyAddedCards()}
      <View style={tw`border-t border-gray-200 flex-shrink`} />
    </SafeAreaView>
  );
};

export default NavigateCard;

const styles = StyleSheet.create({});
