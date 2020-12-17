import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PropTypes from "prop-types";

import TitleText from "./../components/TitleText";
import ResultNumber from "./../components/ResultNumber";
import SelectNumberContainer from "./../components/SelectNumberContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const inputHandler = (inputValue) => {
    setEnteredValue(inputValue.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <ResultNumber onStartGame={props.onStartGame}>
        {selectedNumber}
      </ResultNumber>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a New Game!</TitleText>
        <SelectNumberContainer
          resetInput={resetInputHandler}
          enteredValue={enteredValue}
          onChangeText={inputHandler}
          confirmInput={confirmInputHandler}
        />
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

StartGameScreen.propTypes = {
  onStartGame: PropTypes.func,
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
});

export default StartGameScreen;
