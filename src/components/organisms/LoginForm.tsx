// src/components/organisms/LoginForm.tsx

import { Text, View } from 'react-native';

import { LoginFieldset } from '../molecules';
import { MyButton } from '../atoms';
import MyStyles from '../../styles/MyStyles';
import React from 'react';

type LoginFormProps = {
  onSubmit: () => void;
};

function LoginForm(props: LoginFormProps) {
  return (
    <View style={MyStyles.loginForm}>
      <Text style={[MyStyles.title, MyStyles.marginBottom]}>
        Connexion / Inscription
      </Text>
      <View style={MyStyles.marginTop}>
        <LoginFieldset />
      </View>
      <Text style={[MyStyles.paragraph, MyStyles.marginTop]}>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
        nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
        volutpat.
      </Text>
      <View style={MyStyles.marginTop}>
        <MyButton
          text='Continuer'
          onPress={props.onSubmit}
          color={'#583D72'}
          textColor={'#fff'}
        />
      </View>
    </View>
  );
}

export default LoginForm;
