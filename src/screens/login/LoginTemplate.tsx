import { LoginForm, LoginWith } from '../../components/organisms';

import { MySeparator } from '../../components/atoms';
import MyStyles from '../../styles/MyStyles';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

type LoginTemplateProps = {
  onLogin: () => void;
  onLoginWithFacebook: () => void;
  onLoginWithGoogle: () => void;
  onLoginWithApple: () => void;
  onLoginWithTwitter: () => void;
};

function LoginTemplate(props: LoginTemplateProps): JSX.Element {
  return (
    <View style={MyStyles.loginPage}>
      <StatusBar style='auto' />
      <LoginForm onSubmit={() => props.onLogin()} />
      <View style={[MyStyles.marginTop, MyStyles.marginBottom]}>
        <MySeparator />
      </View>
      <LoginWith
        onLoginWithFacebook={() => props.onLoginWithFacebook()}
        onLoginWithGoogle={() => props.onLoginWithGoogle()}
        onLoginWithApple={() => props.onLoginWithApple()}
        onLoginWithTwitter={() => props.onLoginWithTwitter()}
      />
    </View>
  );
}

export default LoginTemplate;
