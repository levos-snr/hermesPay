import { View, Text, StyleSheet, } from "react-native";
import React from 'react'

const Home = () => {
  return (
    <>
    <View style={styles.scroll}>
      <Text>Home</Text>
          </View>
  </>
  )
}


const styles = StyleSheet.create({
    scroll: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    }
  });

  
export default Home