import { useEffect, useState } from 'react';
import { Car } from '../components/Car';
import carsData from '../assets/cars.json';

export default function useCarList() {
  const [cars, setCars] = useState<Car[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setCars(carsData);
      setLoading(false);
    } catch {
      setError('Failed to load cars');
      setLoading(false);
    }
  }, []);

  return { cars, loading, error };
}