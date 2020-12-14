// src/components/molecules/LoginFieldset.tsx

import { LoginInput } from '../atoms';
import MyStyles from '../../styles/MyStyles';
import React from 'react';
import { View } from 'react-native';

function LoginFieldset() {
  return (
    <View style={MyStyles.loginFieldset}>
      <LoginInput text="Nom d'utilisateur" variant='top' />
      <LoginInput text='Mot de passe' variant='bottom' />
    </View>
  );
}

export default LoginFieldset;
