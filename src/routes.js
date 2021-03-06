import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { useFonts } from '@use-expo/font';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import Profile from './pages/Profile';
import League from './pages/League';

export default (isSigned = false) => {
  useFonts({
    Bangers: require('./assets/fonts/Bangers/Bangers-Regular.ttf'),
    Abel: require('./assets/fonts/Abel/Abel-Regular.ttf'),
  });

  return createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createSwitchNavigator({
          League,
          Profile,
        }),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
};
