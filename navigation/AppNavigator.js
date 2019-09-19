import React from "react";
import { Dimensions } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import CustomDrawerContent from "../components/CustomDrawerContent";

import { MainScreen } from "../screens";

/**
 * This is the main application stack navigator
 */
const MainStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen
  }
});

/**
 * This is the Drawer navigator
 */
const DrawerStackNavigator = createDrawerNavigator(
  {
    MainStack: {
      screen: MainStackNavigator
    }
  },
  {
    // contentComponent: CustomDrawerContent,
    drawerWidth: Dimensions.get("window").width - 130
  }
);

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: DrawerStackNavigator
  })
);
