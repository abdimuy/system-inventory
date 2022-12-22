import { View, Text } from 'react-native'
import React from 'react';
import styles from './styles';

const Title = ({ children, subtitle = false }) => {
  return (
    <Text style={subtitle ? styles.subtitle : styles.text}>{children}</Text>
  )
}

export default Title