import React from "react";
import { Text, StyleSheet, View } from "react-native";

const FooterText = (props) => (
  <View>
    <Text style={styles.label}>{props.title}</Text>
    <Text style={styles.FooterText}>{props.content}</Text>
    <Text style={styles.FooterText}>{props.contentMM}</Text>
  </View>
);

const styles = StyleSheet.create({
  label             : {
    fontSize        : 14,
    fontWeight      : "300",
    color           : "#888",
    marginVertical  : 20,
  },
  FooterText        : {
    fontSize        : 11,
    fontWeight      : "300",
    color           : "#6d6d6d",
    letterSpacing   : 1.4,
    marginVertical  : 5
  }
}); 

export default FooterText;
