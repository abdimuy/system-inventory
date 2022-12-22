import { View, } from 'react-native'
import React, { useState, useEffect } from 'react';
import { AlmacenList } from '../../organisms';
import { getAlmacenes } from '../../../services/systemInventoryApi';
import { Loader, Title } from '../../atoms';
import styles from './styles';

const Stores = ({ navigation }) => {
  const [almacenes, setAlmacenes] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleGetAlmacenes = async () => {
    try {
      const response = await getAlmacenes();
      setAlmacenes(response?.body);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetAlmacenes();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? <Loader /> :
        <>
          <Title>ALMACENES</Title>
          <AlmacenList almacenes={almacenes} />
        </>
      }
    </View>
  )
}

export default Stores