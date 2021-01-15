import React from "react";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import RootScreen from "./screens/RootScreen";

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen name="Game" component={GameScreen} />
        <Stack.Screen name="Game Over" component={GameOverScreen} />
        <Stack.Screen
          name="Root"
          component={RootScreen}
          options={({ navigation }) => ({
            headerTitle: "Guess a Number",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
