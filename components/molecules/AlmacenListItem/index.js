import { Text, TouchableOpacity } from 'react-native'
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const AlmacenList = ({almacen}) => {
  const navigation = useNavigation();
  const { item } = almacen;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Almacen', { ALMACEN_ID: item['ALMACEN_ID'] })}
    >
      <Text style={styles.text}>{item['ALMACEN']}</Text>
      <Text style={styles.existencias}>{item['EXISTENCIAS']}</Text>
    </TouchableOpacity>
  )
}

export default AlmacenList