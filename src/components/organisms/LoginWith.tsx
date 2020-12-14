// src/components/organisms/LoginWith.tsx

import { MyButton } from '../atoms';
import MyStyles from '../../styles/MyStyles';
import React from 'react';
import { View } from 'react-native';

type LoginWithProps = {
  onLoginWithFacebook: () => void;
  onLoginWithGoogle: () => void;
  onLoginWithApple: () => void;
  onLoginWithTwitter: () => void;
};

function LoginWith(props: LoginWithProps) {
  return (
    <View style={MyStyles.loginWithContainer}>
      <View style={MyStyles.marginBottom}>
        <MyButton
          text='Continuer avec Facebook'
          onPress={props.onLoginWithFacebook}
        />
      </View>
      <View style={MyStyles.marginBottom}>
        <MyButton
          text='Continuer avec Google'
          onPress={props.onLoginWithGoogle}
        />
      </View>
      <View style={MyStyles.marginBottom}>
        <MyButton
          text='Continuer avec Apple'
          onPress={props.onLoginWithApple}
        />
      </View>
      <View style={MyStyles.marginBottom}>
        <MyButton
          text='Continuer avec Twitter'
          onPress={props.onLoginWithTwitter}
        />
      </View>
    </View>
  );
}

export default LoginWith;
