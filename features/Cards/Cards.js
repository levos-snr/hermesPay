import { View, Text, StyleSheet, } from "react-native";


const Wallet = () => {
 
  return (
    <>
      <View style={styles.scroll}>
        <Text>Cards</Text>
            </View>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  }
});

export default Wallet;
