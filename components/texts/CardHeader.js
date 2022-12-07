import React from "react";
import { Text, StyleSheet, View } from "react-native";

const CardHeader = (props) => (
  <View>
    <Text style={styles.label}>{props.title}</Text>
    <Text style={styles.cardHeader}>{props.content}</Text>
    <Text style={styles.cardHeader}>{props.contentMM}</Text>
  </View>
);

const styles = StyleSheet.create({
  label             : {
    fontSize        : 14,
    fontWeight      : "300",
    color           : "#888",
    marginVertical  : 20,
  },
  cardHeader        : {
    fontSize        : 14,
    fontWeight      : "300",
    color           : "#6d6d6d",
    letterSpacing   : 0.4,
    lineHeight      : 23,
    marginVertical  : 5
  }
}); 

export default CardHeader;
