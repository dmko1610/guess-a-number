import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import GameScreen from "./../screens/GameScreen";

const RootNavigator = createStackNavigator(
  {
    GameScreen: GameScreen,
  },
  {
    headerMode: "none",
  },
);

export default createAppContainer(RootNavigator);
