import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import { TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthButton, SettingsCover, SettingsContainer, AuthInput, ErrorContainer, BackgroundCover } from "../components/settings.style";
import { AccountScreen } from "../../account/screens/account.screen";

export const UpdateProfileScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [currentPassword, setPassword] = useState("");
    const [newPassword, setRepeatedPassword] = useState("");
    const { changeProfile, isLoading, error } = useContext(AuthenticationContext);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [repeatedpasswordVisible, setrepeatedPasswordVisible] = useState(true);

    //Confirm Update
    const profileUpdateRedirect = () =>
        Alert.alert(
            "Update Account",
            "Are you sure you want to Update Account? ",
            [
                {
                    text: "No",
                    onPress: () => console.log("No Pressed"),
                    style: "cancel"
                },
                { text: "Yes", onPress: navigation.navigate({ AccountScreen }) }
            ],
            { cancelable: false }
            //clicking out side of alert will not cancel
        );

    return (
        <BackgroundCover>
            <SettingsCover />
            <SettingsContainer>
                <AuthInput
                    label="E-mail"
                    value={email}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(u) => setEmail(u)}
                />
                <Spacer size="large">
                    <AuthInput
                        label="Enter current Password"
                        value={currentPassword}
                        textContentType="password"
                        secureTextEntry={passwordVisible}
                        right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                <Spacer size="large">
                    <AuthInput
                        label="Enter New Password"
                        value={newPassword}
                        textContentType="password"
                        secureTextEntry={repeatedpasswordVisible}
                        right={<TextInput.Icon icon={repeatedpasswordVisible ? "eye" : "eye-off"} onPress={() => setrepeatedPasswordVisible(!repeatedpasswordVisible)} />}
                        autoCapitalize="none"
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />
                    <Spacer size="large">
                        {!isLoading ? (
                            <AuthButton icon="lock" mode="contained" onPress={() => changeProfile(email, currentPassword, newPassword)}>
                                Update Profile
                            </AuthButton>
                        ) : (profileUpdateRedirect)}
                    </Spacer>

                </Spacer>
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                )}
            </SettingsContainer>
            <Spacer size="large">
                <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </BackgroundCover>

    );
};