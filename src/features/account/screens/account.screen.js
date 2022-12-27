import React, { useRef } from "react";
import { Spacer } from "../../../components/spacer/spacer.component";
import LottieView from 'lottie-react-native';
import { AccountBackground, AccountCover, AccountContainer, AuthButton, Title, AnimationWrapper, } from "../components/account.styles";

export const AccountScreen = ({ navigation }) => {

    const animation = useRef(null);

    return (
        <AccountBackground >
            <AccountCover />
            <AnimationWrapper>
                <LottieView
                    autoPlay
                    ref={animation}
                    loop
                    source={require("../../../../assets/fries.json")}
                />
            </AnimationWrapper>
            <Title>EkasiFontein</Title>
            <AccountContainer>
                <AuthButton icon="login" mode="contained" onPress={() => navigation.navigate("Login")}>
                    Login
                </AuthButton>
                <Spacer size="large">
                    <AuthButton icon="email" mode="contained" onPress={() => navigation.navigate("Register")}>
                        Register
                    </AuthButton>
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    );
};