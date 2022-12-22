import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import {
  Stores,
  Almacen,
  Articulo,
  MovAlmacen,
  NuevaSalida
} from '../components/pages';

const Stack = createNativeStackNavigator();

const AlmacenesRouter = () => {
  return (
    <Stack.Navigator
      initialRouteName="AlmacenesList"
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen
        name="AlmacenesList"
        component={Stores}
      />
      <Stack.Screen
        name="Almacen"
        component={Almacen}
      />
      <Stack.Screen
        name="Articulo"
        component={Articulo}
      />
      <Stack.Screen
        name="Movimientos"
        component={MovAlmacen}
      />
      <Stack.Screen
        name="NuevaSalida"
        component={NuevaSalida}
      />
    </Stack.Navigator>
  )
}

export default AlmacenesRouter