import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons'; // Importa los iconos de Feather
import HomeScreen from './screens/HomeScreen';
import LandingScreen from './screens/LandingScreen';
import FormScreen from './screens/FormScreen';
import ProductsScreen from './screens/ProductsScreen';

const Stack = createNativeStackNavigator();
//const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
