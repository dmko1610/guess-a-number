import React from "react";
import { StyleSheet, TextInput } from "react-native";
import PropTypes from "prop-types";

export default function Input(props) {
  return (
    <TextInput
      {...props}
      style={StyleSheet.flatten([styles.input, props.style])}
    />
  );
}

Input.propTypes = {
  style: PropTypes.object,
};

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
