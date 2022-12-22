import { View, FlatList } from 'react-native';
import { AlmacenListItem } from '../../molecules';
import React from 'react'

const AlmacenList = ({ almacenes }) => {
  return (
    <FlatList
      data={almacenes}
      renderItem={(almacen) => <AlmacenListItem almacen={almacen} />}
      initialNumToRender={20}
    />
  )
}

export default AlmacenList