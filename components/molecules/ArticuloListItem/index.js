import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { Container } from '../../atoms';

const ArticuloListItem = ({ data, checkboxItems = false, onPressAction = 'openArticulo', selectedArticulosState = [[], []] }) => {
  const [selectedArticulos, setSelectedArticulos] = selectedArticulosState;
  const navigation = useNavigation();
  const {
    ARTICULO,
    EXISTENCIAS,
    ARTICULO_ID
  } = data;

  // const [checked, setChecked] = useState(checked);
  const checked = selectedArticulos.some(articulo => ARTICULO_ID === articulo.ARTICULO_ID);
  const handleOnPressArticulo = {
    openArticulo: () => navigation.navigate('Articulo', { ARTICULO_ID }),
    selectArticulo: () => {
      // const [selectedArticulos, setSelectedArticulos] = selectedArticulosState;
      setSelectedArticulos(articulos => {
        const checkExist = articulos.some(articulo => articulo.ARTICULO_ID === ARTICULO_ID);
        if (!checkExist) {
          return [...articulos, {
            ARTICULO_ID,
            ARTICULO,
            EXISTENCIAS,
            CANTIDAD: 0
          }]
        } else {
          return articulos;
        }
      });
    }
  }

  return (
    <TouchableOpacity
      onPress={handleOnPressArticulo[onPressAction]}
      // onPress={() => setChecked(!checked)}
    >
      <View style={[styles.container, checked && styles.selectedItem]}>
        {/* <View style={[styles.container]}> */}
        <Text style={styles.text}>{ARTICULO}</Text>
        <Container styleParams={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={styles.existencias}>{EXISTENCIAS}</Text>
        </Container>
      </View>
    </TouchableOpacity>
  )
}
export default ArticuloListItem;

// const Item = () => {
//   const [selected, setSelected] = useState(false);
//   return (
//     <TouchableOpacity onPress={() => setSelected(true)}>
//     <View style={[styles.container, selected && styles.selectedItem]} >
//       <Text style={styles.text}>Articulo</Text>
//       <Text style={styles.existencias}>Existencias</Text>
//     </View>
//     </TouchableOpacity>
//   )
// }
// export default Item
