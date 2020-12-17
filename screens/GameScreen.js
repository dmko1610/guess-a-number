import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";

import DefaultStyles from "../constants/DefaultStyles";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>CurrentGuess</NumberContainer>
      <Card>
        <MainButton></MainButton>
        <MainButton></MainButton>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
});

export default GameScreen;
