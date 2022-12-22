import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

export const AccountNavigator = () => (

    <Stack.Navigator headerMode="none">

        {/* App Landing Page (Home Page) */}
        <Stack.Screen name="Main" component={() => (
            <View>
                <Text>Account Screen</Text>
            </View>
        )} />

        {/* Login Page */}
        <Stack.Screen name="Login" component={() => (
            <View>
                <Text>Login Screen</Text>
            </View>
        )} />

    </Stack.Navigator>
);