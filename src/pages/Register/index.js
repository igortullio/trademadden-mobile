/* eslint-disable react/prop-types */
import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default function Register({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.containerLogin}>
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

        <View style={styles.inputIcon}>
          <Icon
            name="mobile"
            size={30}
            color="#118DF0"
            style={{ marginRight: 13, marginLeft: 5 }}
          ></Icon>
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            keyboardType="phone-pad"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputIcon}>
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

        <View style={styles.inputIcon}>
          <Icon
            name="lock"
            size={34}
            color="#118DF0"
            style={{ marginRight: 10 }}
          ></Icon>
          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="Confirme a senha"
            autoCapitalize="none"
          />
        </View>

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
  );
}
