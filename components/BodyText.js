import React from "react";
import { StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";

import DefaultStyles from "../constants/DefaultStyles";

export default function BodyText(props) {
  return (
    <Text style={StyleSheet.flatten([DefaultStyles.bodyText, props.style])}>
      {props.children}
    </Text>
  );
}

BodyText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
};
