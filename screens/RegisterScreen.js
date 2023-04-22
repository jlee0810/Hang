import React from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Provider } from "react-redux";
import { store } from "../store";
import tw from "tailwind-react-native-classnames";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <Provider store={store}>
      <SafeAreaView style={tw`bg-gray-50 h-full`}>
        <View style={tw`flex-1 bg-white items-center justify-center`}>
          <View style={tw`w-11/12 mb-8`}>
            <Text style={tw`text-4xl font-bold mb-4`}>Register</Text>
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
              <View style={tw`mb-4`}>
                <Text style={tw`text-lg font-semibold mb-2`}>
                  Confirm Password
                </Text>
                <TextInput
                  style={tw`border border-gray-300 p-2 rounded-lg w-full`}
                  placeholder="**********"
                  secureTextEntry={true}
                  value={confirmPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                />
              </View>
              <TouchableOpacity
                style={tw`bg-blue-500 py-2 px-4 rounded text-white font-bold mt-8 w-11/12`}
                onPress={handleSubmit}
              >
                <Text style={tw`text-center`}>Create Account</Text>
              </TouchableOpacity>
              <View style={tw`flex-row justify-center items-center mt-4`}>
                <Text style={tw`text-sm text-gray-500`}>
                  Already have an account?
                </Text>
                <TouchableOpacity>
                  <Text style={tw`text-sm text-blue-500 font-bold ml-1`}>
                    Sign in
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
