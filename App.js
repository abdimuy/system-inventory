import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Articles,
} from './components/pages';
import { PRIMARY_COLOR } from './styles/colors';
import AlmacenesRouter from './routes/AlmacenesRouter';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Almacenes"
        screenOptions={({ route }) => ({
          headerStyle: {
            backgroundColor: PRIMARY_COLOR,
          },
          headerTintColor: '#fff',
          tabBarActiveTintColor: PRIMARY_COLOR,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Almacenes') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Articulos') {
              iconName = focused
                ? 'list'
                : 'list-outline';
            } else if (route.name === 'Tiendas') {
              iconName = focused
                ? 'store'
                : 'store-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          }
        })}
      >
        {/* <Tab.Screen name="Home" component={Home} /> */}
        <Tab.Screen name="Almacenes" component={AlmacenesRouter} />
        <Tab.Screen name="Articulos" component={Articles} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App