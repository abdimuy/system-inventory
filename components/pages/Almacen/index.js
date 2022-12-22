import {
  View,
  DrawerLayoutAndroid,
  Text,
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { getAlmacen } from '../../../services/systemInventoryApi';
import { useNavigation } from '@react-navigation/native';
import {
  Button,
  Loader,
  SearchInput,
  Title,
  Container
} from '../../atoms';
import { ArticulosList } from '../../organisms';
import styles from './styles';

const Almacen = ({ route }) => {
  const { ALMACEN_ID } = route.params;
  const drawer = useRef(null);
  const [almacen, setAlmacen] = useState({});
  const [loading, setLoading] = useState(true);
  const [articulos, setArticulos] = useState([]);
  const [articulosFilter, setArticulosFilter] = useState([]);
  const [search, setSearch] = useState('');

  const navigation = useNavigation();

  const drawerComp = () => {
    return (
      <View>
        <Text>Filtros de busqueda</Text>
      </View>
    )
  }

  const handleGetAlmacen = async (almacenId, search) => {
    try {
      setLoading(true);
      const response = await getAlmacen(almacenId, search);
      setAlmacen(response?.body?.ALMACEN);
      setArticulosFilter(response?.body?.ARTICULOS);
      setArticulos(response?.body?.ARTICULOS);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {

    handleGetAlmacen(ALMACEN_ID, search);
  }, []);

  // useEffect(() => {
  //   if (search !== '' && articulos.length > 0) {
  //     const rows = searchFn({
  //       textSearch: search,
  //       column: 'ARTICULO',
  //       rows: almacen['ARTICULOS']
  //     });
  //     setArticulosFilter(rows);
  //   }
  // }, [search, articulos]);

  return (
    <DrawerLayoutAndroid
      drawerWidth={500}
      ref={drawer}
      drawerPosition={'right'}
      renderNavigationView={drawerComp}
    >
      <View style={styles.container}>
        <Title>{almacen?.ALMACEN}</Title>
        <Container
          isScroller={false}
          scrollHorizontal
          styleParams={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Button
            text='Filtros'
            onPress={() => drawer.current.openDrawer()}
          />
          <Button
            text='Movimientos'
            onPress={() => navigation.navigate('Movimientos', { ALMACEN_ID })}
          />
          <Button
            text='Nueva salida'
            onPress={() => navigation.navigate('NuevaSalida', { ALMACEN_ID })}
          />
        </Container>
        <SearchInput state={[search, setSearch]} getData={() => handleGetAlmacen(ALMACEN_ID, search)} />
        <Container styleParams={{ flex: 1 }} loading={loading}>
          <ArticulosList articulos={search !== '' ? articulosFilter : articulos} />
        </Container>
      </View>
    </DrawerLayoutAndroid>
  )
}

export default Almacen