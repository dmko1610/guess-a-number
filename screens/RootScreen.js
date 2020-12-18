import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import GameOverScreen from "./GameOverScreen";
import GameScreen from "./GameScreen";
import StartGameScreen from "./StartGameScreen";

const RootScreen = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = (selectedNumber) => setUserNumber(selectedNumber);

  const gameOverHandler = (numOfRounds) => setGuessRounds(numOfRounds);

  const configureNewGameHandler = () => {
    setUserNumber(null);
    setGuessRounds(0);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
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
