import { StyleSheet } from 'react-native';

const MyStyles = StyleSheet.create({
  myButton: {
    paddingVertical: 15,
    width: '100%',
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  myButtonText: {
    color: 'white',
    fontFamily: 'Futura',
    fontSize: 20,
    textAlign: 'center',
  },
  loginInputContainer: {
    borderColor: '#888',
    borderWidth: 1,
    padding: 15,
    width: '100%',
  },
  loginInputContainer__top: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  loginInputContainer__bottom: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  loginInput: {
    fontFamily: 'Futura',
    fontSize: 20,
  },
  loginFieldset: {
    width: '100%',
  },
  title: {
    fontFamily: 'Futura',
    fontSize: 30,
    width: '100%',
    textAlign: 'center',
  },
  paragraph: {
    fontFamily: 'Futura',
    fontSize: 15,
    color: 'grey',
    width: '100%',
  },
  loginForm: {
    width: '100%',
  },
  marginTop: {
    marginTop: 15,
  },
  marginBottom: {
    marginBottom: 15,
  },

  loginPage: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30,
  },
  loginWithContainer: {
    width: '100%',
  },
});

export default MyStyles;
