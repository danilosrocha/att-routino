import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import Home from "../screens/Home";
import MainTab from "../stacks/MainTab"
import FieldSelector from "../screens/FieldSelector";
import ShowPublication from "../screens/ShowPublication";
import ShowYourPublication from "../screens/ShowYourPublication/index";
import SearchResults from "../screens/SearchResults";


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="SingIn"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="FieldSelector" component={FieldSelector} />
        <Stack.Screen name="SearchResults" component={SearchResults} />

    </Stack.Navigator>
)



