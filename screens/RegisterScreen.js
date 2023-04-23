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
import { RadioButton } from "react-native-paper";
import tw from "tailwind-react-native-classnames";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [gender, setGender] = useState("");
  const [username, setUsername] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      email: email.toLowerCase(),
      password: password,
      gender: gender,
      username: username,
    };

    const res = await fetch(`http://localhost:3001/api/auth/patient`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(postData),
    }).then((r) => r.json());

    console.log(res);

    if (res.success) {
      toast.success("User signed up succesfully", {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/signin");
    } else {
      console.log("Signup error", res);
      toast.error(res.data.message, {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const handleGenderSelection = (value) => {
    setGender(value);
  };

  const handleLogInPress = () => {
    navigation.navigate("Login");
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
                <Text style={tw`text-lg font-semibold mb-2`}>Gender</Text>
                <View style={tw`flex-row items-center justify-between`}>
                  <TouchableOpacity
                    style={tw`border border-gray-300 p-2 rounded-lg w-1/2 mr-2`}
                    onPress={() => handleGenderSelection("male")}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton
                        value="male"
                        status={gender === "male" ? "checked" : "unchecked"}
                        onPress={() => handleGenderSelection("male")}
                      />
                      <Text style={tw`text-lg ml-2`}>Male</Text>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={tw`border border-gray-300 p-2 rounded-lg w-1/2 ml-2`}
                    onPress={() => handleGenderSelection("female")}
                  >
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <RadioButton
                        value="female"
                        status={gender === "female" ? "checked" : "unchecked"}
                        onPress={() => handleGenderSelection("female")}
                      />
                      <Text style={tw`text-lg ml-2`}>Female</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={tw`mb-4`}>
                <Text style={tw`text-lg font-semibold mb-2`}>Zip Code</Text>
                <TextInput
                  style={tw`border border-gray-300 p-2 rounded-lg w-full`}
                  placeholder="000000"
                  value={username}
                  onChangeText={(text) => setUsername(text)}
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
                <TouchableOpacity onPress={handleLogInPress}>
                  <Text style={tw`text-sm text-blue-500 font-bold ml-1`}>
                    Sign In
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
