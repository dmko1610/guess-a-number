import React, { useState } from "react";
import { Animated, StyleSheet, Button, View } from "react-native";

import GameOverScreen from "./GameOverScreen";
import GameScreen from "./GameScreen";
import StartGameScreen from "./StartGameScreen";

const RootScreen = ({ navigation }) => {
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

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Guess a Number",
      // eslint-disable-next-line react/display-name
      headerRight: () => (
        <Button
          onPress={() => animation(1).start()}
          title="Theme"
          color="#ccc"
        />
      ),
    });
  }, [navigation]);

  const colorAnimation = React.useRef(new Animated.Value(0)).current;

  const animation = (toValue) =>
    Animated.timing(colorAnimation, {
      toValue,
      duration: 1000,
      useNativeDriver: true,
    });

  return (
    <View style={styles.screen}>
      <Animated.View
        style={StyleSheet.flatten([
          {
            backgroundColor: "#444",
            borderRadius: 20,
            width: 40,
            height: 40,
            position: "absolute",
            right: 0,
            top: 50,
            transform: [
              {
                scaleY: colorAnimation.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 10, 100],
                }),
              },
              {
                scaleX: colorAnimation.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: [0, 10, 100],
                }),
              },
            ],
          },
        ])}
      />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default RootScreen;
