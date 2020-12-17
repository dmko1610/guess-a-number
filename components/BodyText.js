import React from "react";
import { StyleSheet, Text } from "react-native";
import DefaultStyles from "../constants/DefaultStyles";

export default BodyText = (props) => (
  <Text style={StyleSheet.flatten([DefaultStyles.bodyText, props.style])}>
    {props.children}
  </Text>
);
