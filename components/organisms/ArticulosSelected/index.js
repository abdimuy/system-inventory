import React from 'react';
import { FlatList } from 'react-native';
import { ArticuloSelected, PickerDate, Switch } from '../../molecules';
import { Button, Container, Title } from '../../atoms';
import {
  ListVendedores,
  ListAlmacenesNuevaSalida
} from '../../organisms';

const ArticulosSelected = ({
  articulos,
  handleChangeCantArticulos,
  deleteArticulo,
  vendedores,
  almacenes,
  stateFecha,
  stateVendedores,
  stateAlmacenDestino,
  handleSubmit,
}) => {
  return (
    <Container
      styleParams={{
        // justifyContent: 'space-between',
        flex: 1,
      }}
      isScroller={true}
    >
      <Switch option1='Salida' option2='Entrada'/>
      <Title>Artículos seleccionados</Title>
      <Container isScroller scrollHorizontal>
        <FlatList
          pagingEnabled={true}
          data={articulos}
          renderItem={({ item }) =>
            <ArticuloSelected
              articulo={item}
              handleChangeCantArticulos={handleChangeCantArticulos}
              deleteArticulo={deleteArticulo}
            />
          }
          keyExtractor={(item) => item.ARTICULO_ID}
        />
      </Container>
      <Title>Vendedores</Title>
      <ListVendedores vendedores={vendedores} stateVendedores={stateVendedores} />
      <Title>Almacen de destino</Title>
      <ListAlmacenesNuevaSalida stateAlmacenDestino={stateAlmacenDestino} almacenes={almacenes} />
      <Title>Fecha</Title>
      <PickerDate stateFecha={stateFecha} />
      <Button text='Confimar traspaso' onPress={handleSubmit} />
    </Container>
  )
}

export default ArticulosSelected