import React from 'react';
import { Text } from 'react-native';
import { useFonts } from '@use-expo/font';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

export default function Routes() {
  let [isLoadFonts] = useFonts({
    Bangers: require('./assets/fonts/Bangers/Bangers-Regular.ttf'),
    Abel: require('./assets/fonts/Abel/Abel-Regular.ttf'),
  });

  if (!isLoadFonts) {
    return <Text>Fontes não carregaram</Text>;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
