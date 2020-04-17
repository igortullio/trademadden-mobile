import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  height: 52px;
  background-color: #f8f6f6;
  padding: 10px;
  justify-content: center;
  align-content: center;

  border-radius: 10;
  border-color: #000;
  border-width: 1.5px;
`;

export const Text = styled.Text`
  color: #000;
  font-size: 15px;
  text-align: center;
`;
