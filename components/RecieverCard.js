/** @format */

import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import Card from "./Card";
import { Ionicons } from "@expo/vector-icons";
import colors from "../util/colors";

const RecieverCard = (props) => {
  return (
    <Card style={styles.recieverCard}>
      <TouchableOpacity activeOpacity={0.7} onPress={props.onPress}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            {props.addContact ? (
              <View style={styles.plusButtonContainer}>
                <View
                  colors="#7562EB"
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="ios-add" size={39} color="white" />
                </View>
              </View>
            ) : (
              <Image
                source={require("../assets/images/lewisdp.jpg")}
                style={styles.recieversImage}
              />
            )}
          </View>
          <Text style={styles.recieversName}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  recieverCard: {
    width: 120,
    padding: 15,
    elevation: 0,
    shadowOpacity: 0,
    margin: 5,
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 40,
    height: 65,
    width: 65,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  plusButtonContainer: {
    width: "100%",
    height: "100%",
  },
  recieversImage: {
    borderRadius: 500,
    height: "100%",
    width: "100%",
  },
  recieversName: {
    color: "white",
    paddingHorizontal: 2,
    fontSize: 16,
    opacity: 0.8,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default RecieverCard;
