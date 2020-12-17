import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Icon } from "react-native-elements";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import NumberContainer from "../components/NumberContainer";

import DefaultStyles from "../constants/DefaultStyles";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.title}>Opponent's Guess</Text>
      <NumberContainer>CurrentGuess</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton>
          <Icon name="chevron-left" type="Entypo" color="white" size={24} />
        </MainButton>
        <MainButton>
          <Icon name="rowing" color="white" size={27} />
        </MainButton>
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 400,
    maxWidth: "90%",
  },
});

export default GameScreen;
