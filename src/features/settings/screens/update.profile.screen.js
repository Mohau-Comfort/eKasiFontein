import React, { useContext, useState } from "react";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { AuthButton, SettingsCover, SettingsContainer, AuthInput, ErrorContainer, BackgroundCover } from "../components/settings.style";

export const UpdateProfileScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { changeEmail, changePassword, isLoading, error } = useContext(AuthenticationContext);
    const [passwordVisible, setPasswordVisible] = useState(true);
    const [repeatedpasswordVisible, setrepeatedPasswordVisible] = useState(true);

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
                    {!isLoading ? (
                        <AuthButton icon="email" mode="contained" onPress={() => changeEmail(email)}>
                            Update Email
                        </AuthButton>
                    ) : (
                        <ActivityIndicator animating={true} color="blue" />
                    )}
                </Spacer>
                <Spacer size="large">
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry={passwordVisible}
                        right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                </Spacer>
                <Spacer size="large">
                    <AuthInput
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry={repeatedpasswordVisible}
                        right={<TextInput.Icon icon={repeatedpasswordVisible ? "eye" : "eye-off"} onPress={() => setrepeatedPasswordVisible(!repeatedpasswordVisible)} />}
                        autoCapitalize="none"
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />
                    <Spacer size="large">
                        {!isLoading ? (
                            <AuthButton icon="lock" mode="contained" onPress={() => changeEmail(email)}>
                                Update Password
                            </AuthButton>
                        ) : (
                            <ActivityIndicator animating={true} color="blue" />
                        )}
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