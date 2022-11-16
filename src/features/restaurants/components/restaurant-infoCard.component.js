import React from "react";
import styled from "styled-components/native";
import { Text, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { star } from "../../../../assets/star";
import { open } from "../../../../assets/open";
import { Section } from "react-native-paper/lib/typescript/components/Drawer/Drawer";


const Address = styled(Text)`
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props) => props.theme.fontSizes.body};
`;
const Title = styled(Text)`
font-family: ${(props) => props.theme.fonts.heading};
font-size: ${(props) => props.theme.fontSizes.caption};
color: ${(props) => props.theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
padding: ${(props) => props.theme.space[3]};
background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
padding: ${(props) => props.theme.space[3]};
`
const Rating = styled.View`
flex-direction: row;
padding-top: ${(props) => props.theme.space[2]};
padding-bottom: ${(props) => props.theme.space[2]};
`
const ratingArray = Array.from(new Array(Math.floor(rating)));

const Section = styled.View`
flex-direction: row;
align-items: center;
`;

const SectionEnd = styled.View`
flex: 1;
flex-direction: row;
justify-content: flex-end;
`;

const Open = styled(SvgXml)`
flex-direction: row;
`;

export const RestaurantInfoCard = ({ resturant = {} }) => {

    const {
        name = 'some resturant',
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photos = ["https://scontent-jnb1-1.xx.fbcdn.net/v/t1.6435-9/131974858_114088017220962_2027569032418924384_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=c4c01c&_nc_ohc=oKIsvzevAkEAX8cXBB2&_nc_ht=scontent-jnb1-1.xx&oh=00_AfDguifOsQap1nyWVfm7kncQPrMrWjyMkK06-TTdfx6WyQ&oe=639AF91C"],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = true,
    } = resturant;

    return (
        <RestaurantCard elevation={5}>
            <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
            <Info>
                <Title>{name}</Title>
                <Section>
                    <Rating>
                        {ratingArray.map(() => (
                            <SvgXml xml={star} width={20} height={20} />
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <Text variant='label' style={{ color: "red" }}>
                                TEMPORARILY CLOSED
                            </Text>
                        )}
                        <View style={{ paddingLeft: 16 }} />
                        {isOpenNow && <Open xml={open} width={20} height={20} />}
                        <Image style={{ paddingLeft: 16, width: 15, height: 15 }} sourc={{ uri: icon }} />
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    )
}
