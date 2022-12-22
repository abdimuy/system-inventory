import { Text, Pressable} from 'react-native'
import React from 'react';
import { createStylesButton } from './styles';

const Button = ({ text, onPress, stylesParams }) => {
  const styles = createStylesButton(stylesParams);
  return (
    <Pressable
      onPress={onPress}
      style={styles.button}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Button