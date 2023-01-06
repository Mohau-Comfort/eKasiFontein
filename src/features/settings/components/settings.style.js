import styled from "styled-components";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";


export const BackgroundCover = styled.View`
flex: 1;
align-items: center;
justify-content: center;
background-color: rgba(255,255,255);
`;

export const SettingsCover = styled.View`
position: absolute;
width: 100%;
height: 100%;
background-color: rgba(255,255,255);
`;

export const SettingsContainer = styled.View`
background-color: rgba(255,255,255);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;