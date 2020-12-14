import { LoginForm, LoginWith } from './src/components/organisms';
import { StyleSheet, View } from 'react-native';

import { MySeparator } from './src/components/atoms';
import MyStyles from './src/styles/MyStyles';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default class App extends React.Component {
  handleLogin(): void {
    /* Connexion classique */
  }
  handleLoginWithFacebook(): void {
    /* Connexion avec Facebook */
  }
  handleLoginWithGoogle(): void {
    /* Connexion avec Google */
  }
  handleLoginWithApple(): void {
    /* Connexion avec Apple */
  }
  handleLoginWithTwitter(): void {
    /* Connexion avec Twitter */
  }

  render(): JSX.Element {
    return (
      <View style={MyStyles.loginPage}>
        <StatusBar style='auto' />
        <LoginForm onSubmit={() => this.handleLogin()} />
        <View style={[MyStyles.marginTop, MyStyles.marginBottom]}>
          <MySeparator />
        </View>
        <LoginWith
          onLoginWithFacebook={() => this.handleLoginWithFacebook()}
          onLoginWithGoogle={() => this.handleLoginWithGoogle()}
          onLoginWithApple={() => this.handleLoginWithApple()}
          onLoginWithTwitter={() => this.handleLoginWithTwitter()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
