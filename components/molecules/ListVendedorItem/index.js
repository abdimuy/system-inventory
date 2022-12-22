import React from 'react';
import {
  TextCustom,
  Container
} from '../../atoms';

const ListVendedorItem = ({ vendedor }) => {
  return (
    <Container>
      <TextCustom>{vendedor?.NOMBRE}</TextCustom>
    </Container>
  )
}

export default ListVendedorItem