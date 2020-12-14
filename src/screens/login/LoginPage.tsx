import LoginTemplate from './LoginTemplate';
import React from 'react';

class LoginPage extends React.Component {
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
      <LoginTemplate
        onLogin={() => this.handleLogin()}
        onLoginWithFacebook={() => this.handleLoginWithFacebook()}
        onLoginWithGoogle={() => this.handleLoginWithGoogle()}
        onLoginWithApple={() => this.handleLoginWithApple()}
        onLoginWithTwitter={() => this.handleLoginWithTwitter()}
      />
    );
  }
}

export default LoginPage;
