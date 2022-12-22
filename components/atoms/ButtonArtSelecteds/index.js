import React from 'react'
import { Button } from '../../atoms'

const ButtonArtSelecteds = ({ numArticulos, onPress }) => {
  return (
    <Button
      onPress={onPress}
      text={
        numArticulos > 0 ?
          `${numArticulos} artículos seleccionados` :
          'Selecciona artículos'
      }
    />
  )
}

export default ButtonArtSelecteds