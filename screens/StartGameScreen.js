import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Card from "../components/Card";
import TitleText from "./../components/TitleText";
import BodyText from "./../components/BodyText";

const StartGameScreen = (props) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <Card>
          <BodyText style={styles.inputContainer}>Select a Number</BodyText>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    alignItems: "center",
    maxWidth: "80%",
    fontFamily: "open-sans",
  },
});

export default StartGameScreen;
