import React from 'react';
import {
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { useFonts } from '@use-expo/font';

import styles from './styles';

import back from '../../assets/back.png';

export default function Login({ navigation }) {
  let [isLoadFonts] = useFonts({
    Bangers: require('../../assets/fonts/Bangers/Bangers-Regular.ttf'),
    Abel: require('../../assets/fonts/Abel/Abel-Regular.ttf')
  });

  if (!isLoadFonts) {
    return <Text>Fontes não carregaram</Text>;
  } else {
    return (
      <ImageBackground source={back} style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>Trade Madden</Text>

          <View style={styles.containerLogin}>
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              autoCapitalize="none"
              inlineImageLeft="search_icon"
            />

            <TextInput
              style={[styles.input, { marginVertical: 5 }]}
              secureTextEntry
              placeholder="Senha"
              autoCapitalize="none"
              inlineImageLeft="search_icon"
            />

            <TouchableOpacity style={[styles.button, { marginTop: 10 }]}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.textOr}>Ou</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar com Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Não tem conta? Crie aqui</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}
