import React from "react";
import { StyleSheet, StatusBar, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { ResturantInfo } from "../components/resturants-info.components";

export const ResturantScreen = () => {
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <ResturantInfo />
    </View>
  </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },

  search: {
    padding: 16,
    backgroundColor: "green",
  },

  list: { flex: 1, padding: 16, backgroundColor: "blue" },
});
