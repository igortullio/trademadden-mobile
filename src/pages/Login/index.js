import React, { useState, useRef } from 'react';

import Background from '../../components/Background';
import api from '../../services/api';
import deviceStorage from '../../services/deviceStorage';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function Login({ navigation }) {
  const passwordRef = useRef();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    await api
      .post('/sessions/token', {
        username,
        password,
      })
      .then(({ data }) => {
        deviceStorage.saveKey('token', data.token);
        deviceStorage.saveKey('refreshToken', data.refreshToken);
      })
      .catch(() => {
        // Handle returned errors here
      });
  }

  return (
    <Background>
      <Container>
        <Title>Trade Madden</Title>

        <Form>
          <FormInput
            icon="account-box"
            placeholder="Usuário"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Senha"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleLogin}
          />
          <SubmitButton onPress={handleLogin}>Entrar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('Register')}>
          <SignLinkText>Não tem conta? Crie aqui</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
