import React from "react";
import { StyleSheet, View } from "react-native";

const Card = (props) => <View style={styles.card}>{props.children}</View>;

const styles = StyleSheet.create({
  card: {
    elevation: 8,
  },
});

export default Card;
