import { View, ActivityIndicator } from 'react-native'
import React from 'react';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={'#0000ff'}/>
    </View>
  )
}

export default Loader