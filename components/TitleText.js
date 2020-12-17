import React from "react";
import { StyleSheet, Text } from "react-native";
import DefaultStyles from "../constants/DefaultStyles";

export default TitleText = (props) => (
  <Text style={StyleSheet.flatten([DefaultStyles.title, props.style])}>
    {props.children}
  </Text>
);
