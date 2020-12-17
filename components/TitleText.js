import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text } from "react-native";

import DefaultStyles from "../constants/DefaultStyles";

export default function TitleText(props) {
  return (
    <Text style={StyleSheet.flatten([DefaultStyles.title, props.style])}>
      {props.children}
    </Text>
  );
}

TitleText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string,
};
