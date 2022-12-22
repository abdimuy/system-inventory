import React, { useState, useEffect } from 'react';
import getAlmacenMovs from '../../../services/systemInventoryApi/almacenes/getAlmacenMovs';
import { Loader, Title } from '../../atoms';
import { MovAlmacenList } from '../../organisms';

const MovAlmacen = ({ route }) => {
  const { ALMACEN_ID } = route.params;
  const [movimientos, setMovimientos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [almacen, setAlmacen] = useState({});

  const handleGetAlmacenMovs = async (almacenId) => {
    try {
      const response = await getAlmacenMovs(almacenId);
      setMovimientos(response?.body?.MOVIMIENTOS);
      setAlmacen(response?.body?.ALMACEN);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetAlmacenMovs(ALMACEN_ID);
  }, []);

  return (<>{
    loading ? <Loader /> :
      <>
        <Title>{almacen.ALMACEN}</Title>
        <Title subtitle>Movimientos por almacén</Title>
        <MovAlmacenList movimientos={movimientos} />
      </>
  }</>)
}

export default MovAlmacen