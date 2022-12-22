import { View, Text } from 'react-native';
import React, { useState, useEffect } from 'react';

const Articulo = ({ route }) => {
  const { ARTICULO_ID } = route.params;

  useEffect(() => {
    
  }, [])

  return (
    <View>
      <Text>{ARTICULO_ID}</Text>
    </View>
  )
}

export default Articulo