import { View, Text, Modal, Pressable } from 'react-native'
import React, { useState } from 'react';
import styles from './styles';
import { TextCustom } from '../../atoms'

const MovAlmacenListItem = ({ movimiento }) => {
  const {
    CONCEPTO,
    FOLIO,
    FECHA,
    DESCRIPCION,
  } = movimiento;

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <View
          style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <View style={styles.modal}>
            <Text>{DESCRIPCION}</Text>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}
      >
        <View
          style={styles.item}
        >
          <TextCustom>{FOLIO}</TextCustom>
          <TextCustom>{CONCEPTO}</TextCustom>
          <TextCustom>{FECHA}</TextCustom>
        </View>
      </Pressable>
    </>
  )
}

export default MovAlmacenListItem