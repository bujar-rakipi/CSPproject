import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
  Tabs: undefined;
  CarDetails: { car: Car };
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Search') iconName = 'search';
          else if (route.name === 'MyRentals') iconName = 'car';
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="MyRentals" component={MyRentals} />
    </Tab.Navigator>
  );
}

const AppNavigator = () => (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="CarDetails" component={CarDetails} options={{ title: 'Car Details' }} />
    </Stack.Navigator>
);

export default AppNavigator;