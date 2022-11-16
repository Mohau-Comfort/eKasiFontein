import React from "react";
import styled from "styled-components/native";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";

const Title = styled(Text)`
padding: 16px;
color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
backgroundColor: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: 20px;
backgroundColor: white;
`;

export const RestaurantInfoCard = ({ resturant = {} }) => {

    const {
        name = 'some resturant',
        icon,
        photos = ["https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/131974858_114088017220962_2027569032418924384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c4c01c&_nc_ohc=oKIsvzevAkEAX8cXBB2&_nc_ht=scontent-jnb1-1.xx&oh=00_AfDguifOsQap1nyWVfm7kncQPrMrWjyMkK06-TTdfx6WyQ&oe=639AF91C"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = resturant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Title>{name}</Title>
        </RestaurantCard>
    )
}
