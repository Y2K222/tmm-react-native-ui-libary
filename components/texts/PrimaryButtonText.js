import React from "react";
import { Text, StyleSheet, View } from "react-native";

const PrimaryButtonText = (props) => (
  <View>
    <Text style={styles.label}>{props.title}</Text>
    <Text style={styles.primaryButtonText}>{props.content}</Text>
    <Text style={styles.primaryButtonText}>{props.contentMM}</Text>
  </View>
);

const styles = StyleSheet.create({
  label             : {
    fontSize        : 14,
    fontWeight      : "300",
    color           : "#888",
    marginVertical  : 20,
  },
  primaryButtonText        : {
    fontSize        : 16,
    fontWeight      : "700",
    color           : "#414BAB",
    letterSpacing   : 0.4,
    marginVertical: 5
  }
}); 

export default PrimaryButtonText;
