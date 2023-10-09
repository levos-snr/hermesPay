/** @format */

import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import Card from "../../components/Card";
import colors from "../../util/colors";
import LoginForm from "../Auth/SignIn";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import SignupForm from "../Auth/SignUp";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton from "../../components/CustomButton2";
import FormContainer from "../../components/FormContainer";

const FirstAuthScreen = (promptAsync) => {
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = (formName) => {
    if (formName === "login") {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const onAuth = () => {
    promptAsync.navigation.navigate("Welcome");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "android" ? null : "padding"}
      >
        <ScrollView
          style={{ flex: 1, width: "100%" }}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <View style={styles.screen}>
            <View style={styles.formOptions}>
              <TouchableWithoutFeedback onPress={() => switchForm("login")}>
                <Text
                  style={{
                    ...styles.formOptionText,
                    opacity: isLogin ? 1 : 0.3,
                  }}
                >
                  Log in
                </Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => switchForm("signup")}>
                <Text
                  style={{
                    ...styles.formOptionText,
                    opacity: isLogin ? 0.3 : 1,
                  }}
                >
                  Sign up
                </Text>
              </TouchableWithoutFeedback>
            </View>

            <FormContainer style={styles.formContainestyle} onSubmit={onAuth}>
              <View>{isLogin ? <LoginForm /> : <SignupForm />}</View>
            </FormContainer>

            <View style={styles.bottomSection}>
              {isLogin ? (
                <>
                  <Text
                    style={{
                      color: "black",
                      opacity: 0.5,
                      textAlign: "center",
                      fontWeight: "500",
                    }}
                  >
                    Or Sign in with
                  </Text>
                  <View style={styles.otherOptionsButtonsContainer}>
                    <CustomButton style={styles.otherOptionsButton}>
                      <EvilIcons name="sc-facebook" size={35} color="#3b5998" />
                    </CustomButton>
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
                      <CustomButton style={styles.otherOptionsButton}>
                        <Ionicons
                          name="logo-google"
                          size={24}
                          color="#de5246"
                        />
                      </CustomButton>
                    </TouchableOpacity>
                  </View>
                </>
              ) : (
                <>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text
                      style={{
                        color: "#000",
                        alignSelf: "flex-end",
                        marginBottom: 10,
                        textAlign: "center",
                      }}
                    >
                      By signing up, you agree to the{" "}
                      <Text style={{ color: "#7562EB" }}>
                        Terms & Conditions
                      </Text>{" "}
                      of this app.
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "89%",
    paddingTop: "10%",
    alignItems: "center",
  },
  formContainestyle: {
    backgroundColor: "#3b5998",
  },
  formOptions: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: "5%",
  },
  formOptionText: {
    color: "black",
    fontSize: 19,
    fontWeight: "800",
  },
  bottomSection: {
    marginTop: 70,
    flex: 1,
  },
  otherOptionsButtonsContainer: {
    // width: '100%',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    flexDirection: "row",
  },
  otherOptionsButton: {
    width: "33%",
    backgroundColor: "#18181F",
    marginHorizontal: 15,
  },
});

export default FirstAuthScreen;
