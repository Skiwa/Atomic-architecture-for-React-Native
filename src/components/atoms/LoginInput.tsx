// src/components/atoms/LoginInput.tsx
import { TextInput, View } from 'react-native';

import MyStyles from '../../styles/MyStyles';
import React from 'react';

type LoginInputProps = {
  text: string;
  variant: 'top' | 'bottom';
};

function LoginInput(props: LoginInputProps) {
  return (
    <View
      style={[
        MyStyles.loginInputContainer,
        props.variant === 'top'
          ? MyStyles.loginInputContainer__top
          : MyStyles.loginInputContainer__bottom,
      ]}
    >
      <TextInput placeholder={props.text} style={MyStyles.loginInput} />
    </View>
  );
}

export default LoginInput;
