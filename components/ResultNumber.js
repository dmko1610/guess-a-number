import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

import Card from "./Card";
import BodyText from "./BodyText";
import NumberContainer from "./NumberContainer";

export default function ResultNumber(props) {
  return (
    <Card style={styles.summaryContainer}>
      <BodyText>You Selected</BodyText>
      <NumberContainer>{props.children}</NumberContainer>
    </Card>
  );
}

ResultNumber.propTypes = {
  children: PropTypes.any,
};

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
