// import React from 'react';
// import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
// import AuthFormInput from '../../components/AuthFormInput';
// const SignIn = () =>{
//     return(
//         <View>
//             <AuthFormInput
//                 placeholder = "Email Address"
//             />
//             <AuthFormInput
//                 placeholder = "Password"
//             />
//             <TouchableWithoutFeedback>
//                 <Text style = {styles.forgotPasswordText}>Forgot Password?</Text>
//             </TouchableWithoutFeedback>
//         </View>
//     )
// }

// const styles = StyleSheet.create({

//     forgotPasswordText: {
//         marginVertical: 5,
//         color: 'black',
//         opacity: 0.7,
//         fontSize: 15,
//         fontWeight: '500'
//     }
// })

// export default SignIn;

import { Button, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function SignInScreen({ promptAsync }) {
  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Ionicons name="logo-firebase" size={100} color="#FFA611" />
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>
        Sign In with{" "}
        <Text style={{ color: "#4285F4" }}>
          G<Text style={{ color: "#EA4336" }}>o</Text>
          <Text style={{ color: "#FBBC04" }}>o</Text>
          <Text style={{ color: "#4285F4" }}>g</Text>
          <Text style={{ color: "#34A853" }}>l</Text>
          <Text style={{ color: "#EA4336" }}>e</Text>
        </Text>
      </Text>
      <Text style={{ fontSize: 32, fontWeight: "bold" }}>And Firebase</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#4285F4",
          width: "90%",
          padding: 10,
          borderRadius: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 15,
          marginTop: 80,
          marginBottom: 150,
        }}
        onPress={() => promptAsync()}
      >
        <AntDesign name="google" size={30} color="white" />
        <Text style={{ fontWeight: "bold", color: "white", fontSize: 17 }}>
          Sign In with Google
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
