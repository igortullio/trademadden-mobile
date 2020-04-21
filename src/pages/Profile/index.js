import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import Background from '../../components/Background';
import { signOut } from '../../store/modules/auth/actions';

import {
  Container,
  Title,
  Form,
  FormInput,
  SubmitButton,
  ViewLogOut,
  LogOutButton,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Background>
      <Container>
        <Title>Perfil</Title>

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
            onSubmitEditing={() => emailRef.current.focus()}
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
          <SubmitButton onPress={() => {}}>Alterar</SubmitButton>
        </Form>

        <ViewLogOut>
          <LogOutButton onPress={handleSignOut}>Sair</LogOutButton>
        </ViewLogOut>
      </Container>
    </Background>
  );
}
