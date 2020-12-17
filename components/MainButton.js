import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PropTypes from "prop-types";
import DefaultStyles from "../constants/DefaultStyles";
import Colors from "../constants/Colors";

export default function MainButton(props) {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text
          style={StyleSheet.flatten([styles.buttonText, DefaultStyles.title])}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

MainButton.propTypes = {
  children: PropTypes.any,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: "white",
  },
});
