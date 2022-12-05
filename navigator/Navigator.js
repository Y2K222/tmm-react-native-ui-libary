import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

/**
 * List of application screens
 * Components is home screen and 
 * others are sub screens
 */
import Components from "../screens/Components";
import Texts from "../screens/Texts";

// Create a stack navigator
const Stack = createStackNavigator();

const stackNavigatorOptions = {
  headerTitle           : false,
  headerTransparent     : true,
  headerBackTitleVisible: false,
  headerShown           : false,
};

const MainStack = () => {
    return (
        <Stack.Navigator
            initialRouteName  = "Components"
            screenOptions     = {stackNavigatorOptions}
        >
            <Stack.Screen   name ="Components"  component={Components}/>
            <Stack.Screen   name ="Texts"       component={Texts} />
        </Stack.Navigator>
    )
}

const Navigator = props => {
    return (
        <NavigationContainer>
            <MainStack/>
        </NavigationContainer>
    )
}

export default Navigator