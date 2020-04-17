import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  height: 52px;

  background-color: #fff;

  border-radius: 10px;
  border-color: #000;
  border-width: 1.5px;

  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#000',
})`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: #000;
  font-family: 'Abel';
`;
