import React, { useContext } from "react";
import { StyleSheet, Alert } from "react-native";
import styled from "styled-components";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

const SettingsItem = styled(List.Item)`
padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
align-items: center;
`;

const styles = StyleSheet.create({
    setPostion: {
        marginTop: 4,
    },
});

export const SettingsScreen = ({ navigation }) => {
    const { onLogout, user } = useContext(AuthenticationContext);

    // const onDeleteAccount = () =>
    //     Alert.alert(
    //         "Delete Account",
    //         "Are you sure you want to delete Account? ",
    //         [
    //             {
    //                 text: "No",
    //                 onPress: () => console.log("No Pressed"),
    //                 style: "cancel"
    //             },
    //             { text: "Yes", onPress: () => deleteProfile }
    //         ],
    //         { cancelable: false }
    //         //clicking out side of alert will not cancel
    //     );

    return (
        <SafeArea>
            <AvatarContainer>
                <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
                <Spacer styles={styles.setPostion} size="large">
                    <Text variant="label">{user.email}</Text>
                </Spacer>
            </AvatarContainer>
            <List.Section>
                <SettingsItem title="Favourites" description="View your favourites" left={(props) =>
                    <List.Icon {...props} color="red" icon="heart" />} onPress={() => navigation.navigate("Favourites")} />
                <SettingsItem title="Update Profile" left={(props) =>
                    <List.Icon {...props} color="blue" icon="account-circle" />} onPress={() => navigation.navigate("Update Profile")} />
                <SettingsItem title="Delete Account" left={(props) =>
                    //     <List.Icon {...props} color="red" icon="delete-off" />} onPress={onDeleteAccount} />
                    // <SettingsItem title="Logout" left={(props) =>
                    <List.Icon {...props} color="blue" icon="logout" />} onPress={onLogout} />
            </List.Section>
        </SafeArea>
    );
};