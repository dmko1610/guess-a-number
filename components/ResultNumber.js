import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";

import Card from "./Card";
import BodyText from "./BodyText";
import NumberContainer from "./NumberContainer";
import MainButton from "./MainButton";

export default function ResultNumber(props) {
  return (
    <Card style={styles.summaryContainer}>
      <BodyText>You Selected</BodyText>
      <NumberContainer>{props.children}</NumberContainer>
      <MainButton onPress={() => props.onStartGame(props.children)}>
        START GAME
      </MainButton>
    </Card>
  );
}

ResultNumber.propTypes = {
  children: PropTypes.any,
  onStartGame: PropTypes.func,
};

const styles = StyleSheet.create({
  summaryContainer: {
    marginTop: 20,
    alignItems: "center",
  },
});
