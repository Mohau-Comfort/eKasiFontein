import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";
import { AccountBackground, AccountCover, AccountContainer, AuthButton, AuthInput, ErrorContainer, Title, } from "../components/account.styles";
import { Spacer } from "../../../components/spacer/spacer.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { Text } from "../../../components/typography/text.component";

export const RegisterScreen = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, isLoading, error } = useContext(AuthenticationContext);

    return (
        <AccountBackground >
            <AccountCover />
            <Title>EkasiFontein</Title>
            <AccountContainer>
                {/* email input */}
                <AuthInput label="E-mail" value={email} textContentType="emailAddress" keyboardType="email-address" autoCapitalize="none" onChangeText={(u) => setEmail(u)} />

                <Spacer size="large">
                    {/* password input */}
                    <AuthInput label="Password" value={password} textContentType="password" secureTextEntry autoCapitalize="none" onChangeText={(p) => setPassword(p)} />
                </Spacer>

                <Spacer size="large">
                    {/* confirm password */}
                    <AuthInput label="Repeat Password" value={repeatedPassword} textContentType="password" secureTextEntry autoCapitalize="none" onChangeText={(p) => setRepeatedPassword(p)} />
                </Spacer>

                <Spacer size="large">
                    {error && (<ErrorContainer size="large"><Text variant="error"> {error}</Text></ErrorContainer>)}
                </Spacer>

                <Spacer size="large">
                    {/* Register button */}
                    {!isLoading ?
                        (<AuthButton icon="email" mode="contained" onPress={() => onRegister(email, password, repeatedPassword)} >
                            Register
                        </AuthButton>) : (
                            <ActivityIndicator animating={true} color="blue" />)
                    }
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