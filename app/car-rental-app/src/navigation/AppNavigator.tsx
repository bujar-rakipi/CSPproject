import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CarDetails from '../pages/CarDetails';
import Home from '../pages/Home';
import MyRentals from '../pages/MyRentals';
import Search from '../pages/Search';

export type Car = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

export type RootStackParamList = {
  Home: undefined;
  CarDetails: { car: Car };
  MyRentals: undefined;
  Search: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CarDetails" component={CarDetails} />
        <Stack.Screen name="MyRentals" component={MyRentals} />
        <Stack.Screen name="Search" component={Search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;