import React, {
  useState,
  useEffect,
  useRef,
}
  from 'react';
import {
  Container,
  Title,
  SearchInput,
  ButtonArtSelecteds,
} from '../../atoms';
import {
  DrawerLayoutAndroid,
  Dimensions,
} from 'react-native';
import {
  getAlmacen,
  getVendedores,
  getAlmacenes,
  setTraspaso
} from '../../../services/systemInventoryApi';
import {
  ArticulosList,
  ArticulosSelected,
} from '../../organisms';
import moment from 'moment';

const NuevaSalida = ({ route, navigation }) => {
  const { ALMACEN_ID } = route.params;
  const [almacen, setAlmacen] = useState({});
  const [almacenes, setAlmacenes] = useState([]);
  const [almacenDestino, setAlmacenDestino] = useState(null);
  const [articulos, setArticulos] = useState([]);
  const [articulosFilter, setArticulosFilter] = useState([]);
  const [vendedores, setVendedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [search, setSearch] = useState('');
  const [selectedArticulos, setSelectedArticulos] = useState([]);
  const [fecha, setFecha] = useState(new Date());
  const [vendedoresSelected, setVendedoresSelected] = useState([]);

  const drawer = useRef(null);

  const sizeDrawer = Dimensions.get('window').width * 0.8;

  const handleDeleteArticuloSelected = (articuloId) => {
    const newSelectedArticulos = selectedArticulos.filter(
      (articulo) => articulo.ARTICULO_ID !== articuloId
    )
    setSelectedArticulos(newSelectedArticulos);
  }

  const handleGetAlmacen = async (almacenId, search) => {
    try {
      setLoading(true);
      const [
        almacenData,
        vendedoresData,
        listAlmacenes
      ] = await Promise.all([
        getAlmacen(almacenId, search),
        getVendedores(),
        getAlmacenes()
      ]);
      setAlmacenes(listAlmacenes?.body);

      setAlmacen(almacenData?.body?.ALMACEN);
      setArticulos(almacenData?.body?.ARTICULOS);
      setArticulosFilter(almacenData?.body?.ARTICULOS);
      setVendedores(vendedoresData?.body);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleValidations = () => {
    if (selectedArticulos.length === 0) {
      alert('Debe seleccionar al menos un articulo');
      return false;
    }
    if (selectedArticulos.some(selectedArticulo => {
      if (selectedArticulo.CANTIDAD === 0) {
        alert('No puede seleccionar articulos con cantidad 0');
        return true;
      }
    })) {
      return false;
    }
    if (vendedoresSelected.length === 0) {
      alert('Debe seleccionar al menos un vendedor');
      return false;
    }
    if(almacenDestino.ALMACEN_ID === ALMACEN_ID) {
      alert('No puede seleccionar el mismo almacen de origen');
      return false;
    }
    return true;
  }

  const handleSubmit = async () => {
    setLoadingSubmit(true);
    try {
      if(!handleValidations()) {
        setLoadingSubmit(false);
        return;
      }
      const traspaso = {
        conceptoId: 36,
        almacenInitId: ALMACEN_ID,
        almacenEndId: almacenDestino.ALMACEN_ID,
        fecha: moment(fecha).format('DD/MM/YYYY'),
        descripcion: `VENDEDORES: ${vendedoresSelected.map(v => v).join(', ')}`,
        movimientos:
          selectedArticulos.map((articulo) => ({
            articuloId: articulo.ARTICULO_ID,
            cantidad: articulo.CANTIDAD,
          })),
      }
      const response = await setTraspaso({
        traspaso
      });
      console.log(JSON.stringify(traspaso));
      console.log(response.data);
      handleGetAlmacen(ALMACEN_ID, search);
      alert('Traspaso exitodo', 'Se ha realizado el traspaso correctamente');
      navigation.goBack();
    } catch (err) {
      console.log({ err });
    }

    setLoadingSubmit(false);
  }

  const handleChangeCantArticulos = (articuloId, cantidad) => {
    const newSelectedArticulos = selectedArticulos.map((articulo) => {
      if (articulo.ARTICULO_ID === articuloId) {
        return {
          ...articulo,
          CANTIDAD: cantidad
        }
      }
      return articulo;
    });
    setSelectedArticulos(newSelectedArticulos);
  }

  useEffect(() => {
    handleGetAlmacen(ALMACEN_ID, search);
  }, []);

  if (loadingSubmit) {
    return (
      <Container loading styleParams={{ flex: 1 }} />
    )
  }

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={sizeDrawer}
      drawerPosition='right'
      renderNavigationView={() =>
        <ArticulosSelected
          articulos={selectedArticulos}
          // setArticulos={setSelectedArticulos}
          handleChangeCantArticulos={handleChangeCantArticulos}
          deleteArticulo={handleDeleteArticuloSelected}
          vendedores={vendedores}
          almacenes={almacenes}
          stateFecha={[fecha, setFecha]}
          stateVendedores={[vendedoresSelected, setVendedoresSelected]}
          stateAlmacenDestino={[almacenDestino, setAlmacenDestino]}
          handleSubmit={handleSubmit}
        />
      }
    >
      <Container
        styleParams={{ flex: 1 }}
      >
        <Title>NUEVA SALIDA DE {almacen?.ALMACEN}</Title>
        <Container styleParams={{ flex: 1 }} loading={loading}>
          <ArticulosList
            articulos={articulosFilter}
            checkboxItems
            onPressAction='selectArticulo'
            selectedArticulosState={[selectedArticulos, setSelectedArticulos]}
          />
        </Container>
        <Container>
          <ButtonArtSelecteds
            onPress={() => drawer.current.openDrawer()}
            numArticulos={selectedArticulos.length}
          />
          <SearchInput state={[search, setSearch]} getData={() => handleGetAlmacen(ALMACEN_ID, search)} />
        </Container>
      </Container>
    </DrawerLayoutAndroid>
  );
};

export default NuevaSalida;