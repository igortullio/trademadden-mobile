import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingHorizontal: 42,
    paddingVertical: Constants.statusBarHeight + 20,
  },

  title: {
    fontSize: 96,
    fontFamily: 'Bangers',
    textAlign: 'center',
    color: '#F8F6F6',
  },

  inputIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 52,
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1.5,
    padding: 10,
  },

  input: {
    flex: 1,
  },

  button: {
    height: 52,
    backgroundColor: '#F8F6F6',
    borderRadius: 10,
    borderColor: '#000',
    borderWidth: 1.5,
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },

  buttonText: {
    color: '#000',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Abel',
  },

  facebookButton: {
    height: 52,
    borderColor: '#000',
    padding: 10,
    justifyContent: 'center',
    alignContent: 'center',
  },

  buttonFacebookText: {
    color: '#F8F6F6',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Abel',
  },

  link: {
    color: '#F8F6F6',
    fontFamily: 'Abel',
    textAlign: 'center',
  },
});
