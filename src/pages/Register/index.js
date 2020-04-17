import React, { useRef } from 'react';

import Background from '../../components/Background';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function Register({ navigation }) {
  const nameRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <Background>
      <Container>
        <Title>Cadastro</Title>

        <Form>
          <FormInput
            icon="account-box"
            placeholder="Usuário"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => nameRef.current.focus()}
          />
          <FormInput
            icon="face"
            placeholder="Nome"
            autoCorrect={true}
            autoCapitalize="words"
            ref={nameRef}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current.focus()}
          />
          <FormInput
            icon="call"
            placeholder="Telefone"
            keyboardType="phone-pad"
            ref={phoneRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Senha"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Confirmar senha"
            secureTextEntry
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={() => {}}
          />
          <SubmitButton onPress={() => {}}>Cadastrar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('Login')}>
          <SignLinkText>Já tem conta? Entre</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
