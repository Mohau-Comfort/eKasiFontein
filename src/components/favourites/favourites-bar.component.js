import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Spacer } from "../spacer/spacer.component";
import styled from "styled-components";
import { Text } from "../typography/text.component";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled.View`
padding:10px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {

    if (!favourites.length) {
        return null;
    }

    return (
        <FavouritesWrapper>
            <Spacer variant="left.large">
                <Text variant="caption">Favourites</Text>
            </Spacer>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {favourites.map((restaurant) => {
                    const key = restaurant.name;
                    return (
                        <Spacer key={key} style={styles.setPostion} size="medium">
                            <TouchableOpacity
                                onPress={() =>
                                    onNavigate("RestaurantDetail", {
                                        restaurant,
                                    })
                                }
                            >
                                <CompactRestaurantInfo restaurant={restaurant} />
                            </TouchableOpacity>
                        </Spacer>
                    );
                })}
            </ScrollView>
        </FavouritesWrapper>
    );
};

const styles = StyleSheet.create({
    setPostion: {
        marginLeft: 4,
    },
});
