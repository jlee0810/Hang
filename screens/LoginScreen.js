import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Provider } from "react-redux";
import { store } from "../store";
import RegisterScreen from "./RegisterScreen";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import SearchBar from "../components/SearchBar";
import MapScreen from "./MapScreen";

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    const postData = {
      username: username.toLowerCase(),
      password: password,
    };

    const res = await fetch(`http://localhost:3001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(postData),
    }).then((r) => r.json());

    console.log(res);

    if (res.msg === "success") {
      console.warn("FUCK");
      navigation.navigate("MapScreen");
    }
  };

  return (
    <Provider store={store}>
      <View style={tw`flex-1 bg-white items-center justify-center`}>
        <View style={tw`w-11/12 mb-8`}>
          {/* <Text style={tw`text-4xl font-bold mb-4`}>Login</Text> */}
          <View style={tw`bg-white shadow-md rounded-lg p-8`}>
            <View style={tw`mb-4`}>
              <Text style={tw`text-lg font-semibold mb-2`}>Email</Text>
              <TextInput
                style={tw`border border-gray-300 p-2 rounded-lg w-full`}
                placeholder="youremail@example.com"
                value={username}
                onChangeText={(text) => setUsername(text)}
              />
            </View>
            <View style={tw`mb-4`}>
              <Text style={tw`text-lg font-semibold mb-2`}>Password</Text>
              <TextInput
                style={tw`border border-gray-300 p-2 rounded-lg w-full`}
                placeholder="**********"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
            </View>
            <TouchableOpacity
              style={tw`bg-blue-500 py-2 px-4 rounded text-white font-bold mt-8 w-11/12`}
              onPress={handleSubmit}
            >
              <Text style={tw`text-center`}>Log in</Text>
            </TouchableOpacity>
            <View style={tw`flex-row justify-center items-center mt-4`}>
              <Text style={tw`text-sm text-gray-500`}>
                Don't have an account?
              </Text>
              <TouchableOpacity onPress={navigation.navigate("MapScreen")}>
                <Text style={tw`text-sm text-blue-500 font-bold ml-1`}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Provider>
  );
}
