import React, { createContext, useContext } from 'react';
import useCarList from '../hooks/useCarList';

const CarContext = createContext<ReturnType<typeof useCarList> | undefined>(undefined);

export const CarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const carList = useCarList();
  return <CarContext.Provider value={carList}>{children}</CarContext.Provider>;
};

export const useCarContext = () => {
  const ctx = useContext(CarContext);
  if (!ctx) throw new Error('useCarContext must be used within CarProvider');
  return ctx;
};