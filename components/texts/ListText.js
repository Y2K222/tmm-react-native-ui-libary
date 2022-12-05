import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ListText = (props) => (
  <View>
    <Text style={styles.label}>{props.title}</Text>
    <Text style={styles.titleLabel}>{props.content}</Text>
    <Text style={styles.titleLabel}>{props.contentMM}</Text>
  </View>
);

const styles = StyleSheet.create({
  label             : {
    fontSize        : 14,
    fontWeight      : "300",
    color           : "#888",
    marginVertical  : 20,
  },
  titleLabel        : {
    fontSize        : 14,
    fontWeight      : "400",
    color           : "#5f5f5f",
    letterSpacing   : 0.6,
    marginVertical  : 5
  }
}); 

export default ListText;
