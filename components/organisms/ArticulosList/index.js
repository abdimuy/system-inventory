import { FlatList, RefreshControl } from 'react-native';
import React from 'react';
import { ArticuloListItem } from '../../molecules';

const ArticulosList = ({ articulos, checkboxItems = false, onPressAction, selectedArticulosState, isLoading, onRefresh }) => {
  return (
    <FlatList
      data={articulos}
      progressViewOffset={100}
      // refreshControl={isLoading && <RefreshControl refreshing={isLoading} />}
      refreshControl={
        <RefreshControl
          refreshing={isLoading}
          onRefresh={onRefresh}
          colors={["#78e08f"]}
          progressBackgroundColor="#0a3d62"
        />
      }
      renderItem={({ item }) => renderItem({
        item,
        checkboxItems,
        onPressAction,
        selectedArticulosState
      })}
      getItemLayout={(data, index) => ({
        length: 50,
        offset: 50 * index,
        index
      })}
      // bouncesZoom={true}
      initialNumToRender={20}
      keyExtractor={(item) => item.ARTICULO_ID}
    />
  )
}

const renderItem = ({
  item,
  checkboxItems,
  onPressAction,
  selectedArticulosState
}) => <ArticuloListItem
    checkboxItems={checkboxItems}
    data={item}
    onPressAction={onPressAction}
    selectedArticulosState={selectedArticulosState}
  />

export default ArticulosList