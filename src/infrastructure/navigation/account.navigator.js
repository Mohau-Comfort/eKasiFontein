import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/account.screen";
import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

export const AccountNavigator = () => (

    <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* App Landing Page (Home Page) */}
        <Stack.Screen name="Main" component={AccountScreen} />

        {/* Login Page */}
        <Stack.Screen name="Login" component={LoginScreen} />

        {/* Register Page */}
        <Stack.Screen name="Register" component={RegisterScreen} />

    </Stack.Navigator>
);