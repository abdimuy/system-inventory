import React from 'react'
import {
  Container,
  TextCustom,
  Button
} from '../../atoms';
import Input from '../Input';

const ArticuloSelected = ({ articulo, deleteArticulo, handleChangeCantArticulos }) => {
  const {
    ARTICULO_ID,
    ARTICULO,
    EXISTENCIAS,
    CANTIDAD,
  } = articulo;
  return (

    <Container
      styleParams={{
        flexDirection: 'row',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
      }}
    >
      <TextCustom>{ARTICULO}</TextCustom>
      <Input
        min={0}
        max={EXISTENCIAS}
        cantidad={CANTIDAD}
        handleChangeCantArticulos={handleChangeCantArticulos}
        articuloId={ARTICULO_ID}
      />
      <Button
        onPress={() => deleteArticulo(ARTICULO_ID)}
        stylesParams={{
          width: 40,
          height: 40,
          marginHorizontal: 2,
          marginVertical: 0,
          backgroundColor: '#ff6157'
        }}
        text='x'
      />
    </Container>
  );
}

export default ArticuloSelected