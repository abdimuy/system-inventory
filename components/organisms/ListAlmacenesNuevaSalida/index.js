import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { Container, TextCustom } from '../../atoms'

const ListAlmacenesNuevaSalida = ({ almacenes,  stateAlmacenDestino}) => {
  const [almacenDestino, setAlmacenDestino] = stateAlmacenDestino;
  return (
    <>
      <Picker
        selectedValue={almacenDestino}
        style={{ height: 50, width: '100%', color: '#000' }}
        onValueChange={(itemValue, itemIndex) => {
          setAlmacenDestino(itemValue)
        }}
      >
        {almacenes.map((almacen) => (
          <Picker.Item key={almacen['ALMACEN_ID']} label={almacen['ALMACEN']} value={almacen} />
        ))}
      </Picker>
    </>
  )
}

export default ListAlmacenesNuevaSalida