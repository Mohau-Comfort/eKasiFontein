import React from "react";
import { StatusBar as ExpoStatusbar } from "expo-status-bar";
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from "react-native";
import { ResturantScreen } from "./src/features/resturants/screens/resturants.screen";

export default function App() {
  return (
    <>
      <ResturantScreen />
      <ExpoStatusbar style="auto" />
    </>
  );
}
