import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { RestaurantList } from "../../restaurants/components/restaurant.list";
import { RestaurantInfoCard } from "../../restaurants/components/restaurant-info-card.component";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({
    setPostion: {
        marginBottom: 4,
    },
});

export const FavouritesScreen = ({ navigation }) => {
    const { favourites } = useContext(FavouritesContext);

    return favourites.length ? (
        <SafeArea>
            <RestaurantList
                data={favourites}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item, })}>
                            <Spacer style={styles.setPostion} size="large">
                                <RestaurantInfoCard restaurant={item} />
                            </Spacer>
                        </TouchableOpacity>
                    );
                }}
                keyExtractor={(item) => item.name} />
        </SafeArea>
    ) : (
        <NoFavouritesArea>
            <Text center>No favourites yet</Text>
        </NoFavouritesArea>
    );
};