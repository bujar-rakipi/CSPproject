import React from 'react';
import { CarProvider } from './context/CarContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {
  return (
    <CarProvider>
      <AppNavigator />
    </CarProvider>
  );
}