import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => <View style={StyleSheet.flatten([styles.card, props.style])}>{props.children}</View>;

const styles = StyleSheet.create({
  card: {
    elevation: 8,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
