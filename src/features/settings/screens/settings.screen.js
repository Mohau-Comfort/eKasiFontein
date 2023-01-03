import React, { useContext } from "react";
import { StyleSheet, Alert, TouchableOpacity } from "react-native";
import styled from "styled-components";
import { List, Avatar } from "react-native-paper";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";

export const SettingsBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/bg3.jpg"),
})`
   position:absolute;
   height: 100%;
   width:100%;
  `;

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const SettingsItem = styled(List.Item)`
padding: ${(props) => props.theme.space[3]};
background-color: rgba(255,255,255, 0.6);
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
        <SettingsBackground>
            <TransparentSafeArea>
                <AvatarContainer>
                    <Avatar.Icon size={180} icon="human" backgroundColor={colors.brand.secondary} />
                    <Spacer styles={styles.setPostion} size="large">
                        <Text variant="label">{user.email}</Text>
                    </Spacer>
                </AvatarContainer>
                <List.Section>
                    <Spacer />
                    <SettingsItem title="Favourites" description="View your favourites" left={(props) =>
                        <List.Icon {...props} color="red" icon="heart" />} onPress={() => navigation.navigate("Favourites")} />
                    <Spacer />
                    <SettingsItem title="Update Profile" left={(props) =>
                        <List.Icon {...props} color={colors.brand.secondary} icon="account-circle" />} onPress={() => navigation.navigate("Update Profile")} />
                    {/* <Spacer />
                     <SettingsItem title="Delete Account" left={(props) =>
                        <List.Icon {...props} color="red" icon="delete-off" />} onPress={onDeleteAccount} /> */}
                    <Spacer />
                    <SettingsItem title="Logout" left={(props) =>
                        <List.Icon {...props} color={colors.brand.secondary} icon="logout" />} onPress={onLogout} />
                </List.Section>
            </TransparentSafeArea>
        </SettingsBackground>
    );
};