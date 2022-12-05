import React, { useEffect } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// List item component
const ListItem = function (props) {

  const handleListPress = (componentName) => {
    props.navigation.navigate(componentName)
  };

  return (
    <TouchableOpacity
      style     ={styles.item}
      onPress   ={() => handleListPress(props.item.name)}
    >
      <Text style={styles.item_text}>{props.item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    paddingVertical: 25,
    marginVertical: 2,
    borderTopColor: "#f8f8f8",
    borderBottomColor: "#f8f8f8",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    justifyContent: "center",
  },
  item_text: {
    fontSize: 16,
    color: "#2f2f2f",
    fontWeight: "300",
    letterSpacing: 1.3,
  },
});

export default ListItem;
