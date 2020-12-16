import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

const StartGameScreen = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View>
        <Text>Start a New Game!</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default StartGameScreen;
