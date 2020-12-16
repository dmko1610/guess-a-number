import React from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";

import DefaultStyles from "../constants/DefaultStyles";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
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
