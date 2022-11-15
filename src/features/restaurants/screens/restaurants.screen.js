import React from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";

import { RestaurantInfoCard } from "../components/restaurant-infoCard.component";

const SafeArea = styled(SafeAreaView)`
flex: 1;
margin-top: ${StatusBar.currentHeight}px;
`;
const SearchContainer = styled(View)`
padding: 16px;
`;
const ResturantlistContainer = styled(View)`
flex: 1;
padding: 16px;
background-color: blue;
`;

export const RestaurantsScreen = () => (
  <SafeArea >
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <ResturantlistContainer >
      <RestaurantInfoCard />
    </ResturantlistContainer >
  </SafeArea >
);