import { ColorValue, Text, TouchableOpacity } from 'react-native';

import MyStyles from '../../styles/MyStyles';
import React from 'react';

type MyButtonProps = {
  // Text from parent
  text: string;
  // OnClick function from parent
  onPress: () => void;
  // Optional background color
  color?: ColorValue;
  // Optional text color
  textColor?: ColorValue;
};

function MyButton(props: MyButtonProps) {
  return (
    <TouchableOpacity
      style={[
        MyStyles.myButton,
        { backgroundColor: props.color ? props.color : '#fff' },
      ]}
      onPress={props.onPress}
    >
      <Text
        style={[
          MyStyles.myButtonText,
          { color: props.textColor ? props.textColor : '#000' },
        ]}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

export default MyButton;
