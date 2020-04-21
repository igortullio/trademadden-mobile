import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  align-items: stretch;
`;

export const Title = styled.Text`
  font-size: 48px;
  font-family: 'Bangers';
  text-align: center;
  color: #f8f6f6;
  padding: 0 10px;
`;

export const Form = styled.View`
  margin-top: 50px;
  padding: 0 15px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 5px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 5px;
`;

export const ViewLogOut = styled.View`
  margin-top: 20px;
  padding: 0 15px;
`;

export const LogOutButton = styled(Button)`
  background-color: #ff4b68;
`;
