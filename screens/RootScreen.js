import React from "react";
import { StyleSheet, View } from "react-native";
import GameScreen from "./GameScreen";
import StartGameScreen from "./StartGameScreen";

const RootScreen = () => {
  let content = <StartGameScreen />;
  content = <GameScreen />;
  return <View style={styles.screen}>{content}</View>;
};

RootScreen.navigationOptions = {
  title: "Guess a Number",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default RootScreen;
