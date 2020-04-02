import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

import styles from './styles';

import back from '../../assets/back.png';

export default function Register({ navigation }) {
  return (
    <ImageBackground source={back} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastro</Text>

        <View style={styles.containerLogin}>
          <TextInput
            style={styles.input}
            placeholder="Usuário"
            autoCapitalize="none"
            inlineImageLeft="search_icon"
          />

          <TextInput
            style={styles.input}
            placeholder="Telefone"
            keyboardType="phone-pad"
            autoCapitalize="none"
            inlineImageLeft="search_icon"
          />

          <TextInput
            style={[styles.input]}
            secureTextEntry
            placeholder="Senha"
            autoCapitalize="none"
            inlineImageLeft="search_icon"
          />

          <TextInput
            style={[styles.input]}
            secureTextEntry
            placeholder="Confirme a senha"
            autoCapitalize="none"
            inlineImageLeft="search_icon"
          />

          <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerFacebook}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar com Facebook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Já tem conta? Entre</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
