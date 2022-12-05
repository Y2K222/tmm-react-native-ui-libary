import React from "react";
import { View, StyleSheet } from "react-native";

const Seperator = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    width: "100%",
    height: 1,
    backgroundColor: "#cfcfcf",
    marginVertical: 20
  },
});
export default Seperator;
