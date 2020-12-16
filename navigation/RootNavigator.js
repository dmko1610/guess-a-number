import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameScreen from "./../screens/GameScreen";
import StartGameScreen from "./../screens/StartGameScreen";
import RootScreen from "./../screens/RootScreen";

const RootNavigator = createStackNavigator(
  {
    Root: RootScreen,
  }
);

const GameNavigator = createStackNavigator(
  {
    Root: RootNavigator,
    StartGameScreen: StartGameScreen,
    GameScreen: GameScreen,
  },
  {
    headerMode: "none",
  },
);

export default createAppContainer(GameNavigator);
