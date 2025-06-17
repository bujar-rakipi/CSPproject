import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface CarCardProps {
  car: {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
  };
}

const CarCard: React.FC<CarCardProps> = ({ car }) => (
  <View style={styles.card}>
    <Image source={{ uri: car.image }} style={styles.image} />
    <View style={styles.details}>
      <Text style={styles.name}>{car.name}</Text>
      <Text style={styles.price}>${car.price}/day</Text>
      <Text style={styles.description}>{car.description}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    margin: 8,
    width: 220,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 120,
  },
  details: {
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  price: {
    fontSize: 16,
    color: '#007AFF',
    marginVertical: 4,
  },
  description: {
    fontSize: 13,
    color: '#666',
  },
});

export default CarCard;