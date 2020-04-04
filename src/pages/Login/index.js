/* eslint-disable no-undef */
import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from '@use-expo/font';

import styles from './styles';

import back from '../../assets/back.png';

export default function Login({ navigation }) {
  let [isLoadFonts] = useFonts({
    Bangers: require('../../assets/fonts/Bangers/Bangers-Regular.ttf'),
    Abel: require('../../assets/fonts/Abel/Abel-Regular.ttf'),
  });

  if (!isLoadFonts) {
    return <Text>Fontes não carregaram</Text>;
  } else {
    return (
      <ImageBackground source={back} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Trade Madden</Text>

          <View>
            <View style={styles.inputIcon}>
              <Icon
                name="user"
                size={30}
                color="#118DF0"
                style={{ marginRight: 10 }}
              ></Icon>
              <TextInput
                style={styles.input}
                placeholder="Usuário"
                autoCapitalize="none"
              />
            </View>

            <View style={[styles.inputIcon, { marginVertical: 5 }]}>
              <Icon
                name="lock"
                size={34}
                color="#118DF0"
                style={{ marginRight: 10 }}
              ></Icon>
              <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Senha"
                autoCapitalize="none"
              />
            </View>

            <TouchableOpacity
              style={[styles.button, { marginTop: 10 }]}
              onPress={() => navigation.navigate('Profile')}
            >
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <Icon.Button
            name="facebook"
            backgroundColor="#3b5998"
            borderRadius={10}
            style={styles.facebookButton}
          >
            <Text style={styles.buttonFacebookText}>Entrar com Facebook</Text>
          </Icon.Button>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Não tem conta? Crie aqui</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
