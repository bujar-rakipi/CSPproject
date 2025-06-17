import { useState, useEffect } from 'react';
import carsData from '../assets/cars.json';

export type Car = {
  id: string;
  name: string;
  image: string;
  price: number;
  description: string;
};

export default function useCarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate network delay
    setTimeout(() => {
      try {
        setCars(carsData as Car[]);
        setLoading(false);
      } catch (e) {
        setError('Failed to load cars');
        setLoading(false);
      }
    }, 1000);
  }, []);

  return { cars, loading, error };
}