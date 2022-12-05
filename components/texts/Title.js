import React from "react";
import { Text, StyleSheet, View } from "react-native";

const Title = (props) => (
  <View>
    <Text style={styles.label}>{props.title}</Text>
    <Text style={styles.title}>{props.content}</Text>
    <Text style={styles.title}>{props.contentMM}</Text>
  </View>
);

const styles = StyleSheet.create({
  label     : {
    fontSize        : 14,
    fontWeight      : "300",
    color           : "#888",
    marginVertical  : 20,
  },
  title     : {
    fontSize        : 35,
    fontWeight      : "800",
    color           : "#414BAB",
    textShadowColor : "#0003",
    textShadowOffset: {width: 3, height: 1},
    textShadowRadius: 10,
    marginVertical  : 5,
  }
}); 

export default Title;
