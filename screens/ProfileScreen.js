// import React from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   SafeAreaView,
//   ScrollView,
// } from "react-native";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// export default function ProfileScreen({ route }) {
//   const { name, picture, age, location, bio } = route.params;

//   return (
//     <View style={tw`flex-1 bg-white`}>
//       <View style={tw`bg-gray-100 p-4`}>
//         <View style={tw`flex-row items-center`}>
//           <Image source={{ uri: picture }} style={tw`w-20 h-20 rounded-full`} />
//           <View style={tw`ml-4`}>
//             <Text style={tw`text-2xl font-semibold`}>{name}</Text>
//             <Text style={tw`text-gray-600`}>{age}</Text>
//             <Text style={tw`text-gray-600`}>{location}</Text>
//           </View>
//         </View>
//         <View style={tw`mt-4`}>
//           <Text style={tw`text-lg font-semibold`}>Bio</Text>
//           <Text style={tw`text-gray-600`}>{bio}</Text>
//         </View>
//       </View>
//       <View style={tw`p-4`}>
//         <Text style={tw`text-lg font-semibold mb-2`}>Photos</Text>
//         {/* <View style={tw`flex-row flex-wrap justify-between`}>
//           <Image
//             source={require("../assets/images/photo1.jpg")}
//             style={tw`w-48 h-48 mb-2`}
//           />
//           <Image
//             source={require("../assets/images/photo2.jpg")}
//             style={tw`w-48 h-48 mb-2`}
//           />
//           <Image
//             source={require("../assets/images/photo3.jpg")}
//             style={tw`w-48 h-48 mb-2`}
//           />
//           <Image
//             source={require("../assets/images/photo4.jpg")}
//             style={tw`w-48 h-48 mb-2`}
//           />
//           <Image
//             source={require("../assets/images/photo5.jpg")}
//             style={tw`w-48 h-48 mb-2`}
//           />
//           <Image
//             source={require("../assets/images/photo6.jpg")}
//             style={tw`w-48 h-48 mb-2`}
//           />
//         </View> */}
//       </View>
//     </View>
//   );
// }
