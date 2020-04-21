import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Background from '../../components/Background';
import { signUpRequest } from '../../store/modules/auth/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');

  function handleSignUp() {
    dispatch(
      signUpRequest(
        username,
        email,
        name,
        phone,
        password,
        password_confirmation
      )
    );
  }

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
            value={username}
            onChangeText={setUsername}
          />
          <FormInput
            icon="face"
            placeholder="Nome"
            autoCorrect={true}
            autoCapitalize="words"
            ref={nameRef}
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
            value={name}
            onChangeText={setName}
          />
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            placeholder="E-mail"
            autoCorrect={false}
            autoCapitalize="none"
            ref={emailRef}
            returnKeyType="next"
            onSubmitEditing={() => phoneRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />
          <FormInput
            icon="call"
            placeholder="Telefone"
            keyboardType="phone-pad"
            ref={phoneRef}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={phone}
            onChangeText={setPhone}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Senha"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            icon="lock-outline"
            placeholder="Confirmar senha"
            secureTextEntry
            ref={confirmPasswordRef}
            returnKeyType="send"
            onSubmitEditing={handleSignUp}
            value={password_confirmation}
            onChangeText={setPasswordConfirmation}
          />
          <SubmitButton onPress={handleSignUp}>Cadastrar</SubmitButton>
        </Form>

        <SignLink onPress={() => navigation.navigate('SignIn')}>
          <SignLinkText>Já tem conta? Entre</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
