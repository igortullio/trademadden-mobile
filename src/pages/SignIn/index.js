import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Background from '../../components/Background';
import { signInRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const passwordRef = useRef();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loading = useSelector((state) => state.auth.loading);

  function handleSignIn() {
    dispatch(signInRequest(username, password));
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
            value={username}
            onChangeText={setUsername}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Senha"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSignIn}
            value={password}
            onChangeText={setPassword}
          />
          <SubmitButton loading={loading} onPress={handleSignIn}>
            Entrar
          </SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>Não tem conta? Crie aqui</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
