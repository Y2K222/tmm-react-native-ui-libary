import React from "react";
import { Text, StyleSheet, View } from "react-native";

const LinkText = (props) => (
  <View>
    <Text style={styles.label}>{props.title}</Text>
    <Text style={styles.linkText}>{props.content}</Text>
    <Text style={styles.linkText}>{props.contentMM}</Text>
  </View>
);

const styles = StyleSheet.create({
  label             : {
    fontSize        : 14,
    fontWeight      : "300",
    color           : "#888",
    marginVertical  : 20,
  },
  linkText        : {
    fontSize        : 16,
    fontWeight      : "800",
    color           : "#414BAB",
    letterSpacing   : 0.1,
    textDecorationLine: "underline",
    marginVertical  : 5
  }
}); 

export default LinkText;
