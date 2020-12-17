import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import GameScreen from "./GameScreen";
import StartGameScreen from "./StartGameScreen";

const RootScreen = () => {
  const [userNumber, setUserNumber] = useState(20);

  const startGameHandler = (selectedNumber) => setUserNumber(selectedNumber);

  /* const configureNewGameHandler = () => {
    setUserNumber(null);
  }; */

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber) {
    content = <GameScreen userChoice={userNumber} />;
  }
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
