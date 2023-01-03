import React, { useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;

    const [contactExpanded, setcontactExpanded] = useState(false);
    const [socialsExpanded, setsocialsExpanded] = useState(false);
    const [websiteExpanded, setwebsiteExpanded] = useState(false);

    return (
        <SafeArea>
            <RestaurantInfoCard restaurant={restaurant} />
            <ScrollView>
                <List.Accordion
                    title="Contact"
                    left={(props) => <List.Icon {...props} icon="contacts" />}
                    expanded={contactExpanded}
                    onPress={() => setcontactExpanded(!contactExpanded)}
                >
                    <List.Item title="Call" />
                    <List.Item title="Email" />
                    <List.Item title="WhatsApp" />
                </List.Accordion>

                <List.Accordion
                    title="Socials"
                    left={(props) => <List.Icon {...props} icon="handshake" />}
                    expanded={socialsExpanded}
                    onPress={() => setsocialsExpanded(!socialsExpanded)}
                >
                    <List.Item title="Facebook" left={(props) => <List.Icon {...props} icon="contacts" />} />
                    <List.Item title="Instagram" />
                    <List.Item title="LinkedIn" />
                    <List.Item title="Twitter" />
                </List.Accordion>

                <List.Accordion
                    title="Website"
                    left={(props) => <List.Icon {...props} icon="web" />}
                    expanded={websiteExpanded}
                    onPress={() => setwebsiteExpanded(!websiteExpanded)}
                >
                    <List.Item title="Web Link" />
                </List.Accordion>
            </ScrollView>
        </SafeArea>
    );
};