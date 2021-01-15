import React from "react";
import { Button, StyleSheet, View } from "react-native";
import PropTypes from "prop-types";

import Colors from "../constants/Colors";
import Card from "./Card";
import BodyText from "./BodyText";
import Input from "./Input";

const renderButton = (props) => (
  <View style={styles.button}>
    <Button
      title={props.title}
      color={props.color}
      onPress={props.resetInput}
    />
  </View>
);

const SelectNumberContainer = (props) => {
  const resetProps = {
    title: "Reset",
    color: Colors.accent,
    resetInput: props.resetInput,
  };
  const confirmProps = {
    title: "Confirm",
    color: Colors.primary,
    resetInput: props.confirmInput,
  };
  return (
    <Card style={styles.inputContainer}>
      <BodyText>Select a Number</BodyText>
      <Input
        style={styles.input}
        value={props.enteredValue}
        onChangeText={props.onChangeText}
        blurOnSubmit
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        maxLength={3}
      />
      <View style={styles.buttonContainer}>
        {renderButton(resetProps)}
        {renderButton(confirmProps)}
      </View>
    </Card>
  );
};

SelectNumberContainer.propTypes = {
  enteredValue: PropTypes.string,
  onChangeText: PropTypes.func,
  confirmInput: PropTypes.func,
  resetInput: PropTypes.func,
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 300,
    alignItems: "center",
    maxWidth: "80%",
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});

export default SelectNumberContainer;
