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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = ({}) => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleRegisterPress = () => {
    navigation.navigate("Register");
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={tw`bg-gray-50 h-full`}>
        <View style={tw`flex-1 bg-white items-center justify-center`}>
          <View style={tw`w-11/12 mb-8`}>
            <Text style={tw`text-4xl font-bold mb-4`}>Login</Text>
            <View style={tw`bg-white shadow-md rounded-lg p-8`}>
              <View style={tw`mb-4`}>
                <Text style={tw`text-lg font-semibold mb-2`}>Email</Text>
                <TextInput
                  style={tw`border border-gray-300 p-2 rounded-lg w-full`}
                  placeholder="youremail@example.com"
                  value={email}
                  onChangeText={(text) => setEmail(text)}
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
                <TouchableOpacity onPress={handleRegisterPress}>
                  <Text style={tw`text-sm text-blue-500 font-bold ml-1`}>
                    Register
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Provider>
  );
}
