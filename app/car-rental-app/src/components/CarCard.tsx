import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface CarCardProps {
  car: {
    id: string;
    name: string;
    image: string;
    price: number;
    description: string;
  };
  onPress: () => void;
}

const CarCard: React.FC<CarCardProps> = ({ car, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{car.name}</Text>
        <Text style={styles.price}>${car.price}/day</Text>
        <Text style={styles.description}>{car.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  details: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default CarCard;