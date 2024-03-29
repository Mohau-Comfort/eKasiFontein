import React, { useState, useContext } from "react";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, ErrorContainer, Title, } from "../components/account.styles";
import { Text } from "../../../components/typography/text.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Entypo } from '@expo/vector-icons';

export const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, isLoading } = useContext(AuthenticationContext);
    const [passwordVisible, setPasswordVisible] = useState(true);

    return (
        <AccountBackground>
            <AccountCover />
            <Title>EkasiFontein</Title>
            <AccountContainer>
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
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry={passwordVisible}
                        right={<TextInput.Icon icon={passwordVisible ? "eye" : "eye-off"} onPress={() => setPasswordVisible(!passwordVisible)} />}
                        onChangeText={(p) => setPassword(p)}
                    />

                </Spacer>
                {error && (
                    <ErrorContainer size="large">
                        <Text variant="error">{error}</Text>
                    </ErrorContainer>
                )}
                <Spacer size="large">
                    {!isLoading ? (
                        <AuthButton
                            icon="login"
                            mode="contained"
                            onPress={() => onLogin(email, password)}
                        >
                            Login
                        </AuthButton>
                    ) : (
                        <ActivityIndicator animating={true} color="blue" />
                    )}
                </Spacer>
            </AccountContainer>
            <Spacer size="large">
                <AuthButton mode="contained" onPress={() => navigation.goBack()}>
                    Back
                </AuthButton>
            </Spacer>
        </AccountBackground>
    );
};