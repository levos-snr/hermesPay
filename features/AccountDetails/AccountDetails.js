import { View, Text, StyleSheet, } from "react-native";


const AccountDetails = () => {
 
  return (
    <>
      <View style={styles.scroll}>
        <Text>Wallet</Text>
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

export default AccountDetails;
