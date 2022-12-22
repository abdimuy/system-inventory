import { View, Text, FlatList } from 'react-native'
import React from 'react';
import { MovAlmacenListItem } from '../../molecules';

const MovAlmacenList = ({movimientos}) => {
  return (
    <FlatList
      data={movimientos}
      renderItem={(movimiento) => <MovAlmacenListItem movimiento={movimiento.item} />}
      initialNumToRender={20}
    />
  )
}

export default MovAlmacenList