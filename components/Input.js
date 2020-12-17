import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default Input = (props) => (
  <TextInput
    {...props}
    style={StyleSheet.flatten([styles.input, props.style])}
  />
);

const styles = StyleSheet.create({
  input: {
    height: 50,
    paddingTop: 10,
    fontFamily: "open-sans-bold",
    fontSize: 25,
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});
