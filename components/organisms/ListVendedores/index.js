import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';


const ListVendedores = ({ vendedores, stateVendedores }) => {
  const [vendedoresSelected, setVendedoresSelected] = stateVendedores;
  const onSelectChange = (seleccionados) => {
    setVendedoresSelected(seleccionados);
  }

  return (
    <SectionedMultiSelect
      IconRenderer={Icon}
      items={[
        {
          NOMBRE: 'Vendedores',
          ID: 0,
          children: [
            ...vendedores
          ]
        }
      ]}
      // uniqueKey="ID"
      uniqueKey="NOMBRE"
      subKey="children"
      
      displayKey="NOMBRE"
      onSelectedItemsChange={onSelectChange}
      // onSelectedItemObjectsChange={(items) =>onSelectChange(items)}
      selectedItems={vendedoresSelected}
      
      selectText="Seleccione un vendedor"
      showDropDowns={true}
      expandDropDowns={true}
      showCancelButton={true}
      showChips={true}
      alwaysShowChips={true}
      confirmText="Confirmar"
      cancelText="Cancelar"
      subItemFontFamily={{
        fontSize: 25,
      }}
    />
  )
}

export default ListVendedores
