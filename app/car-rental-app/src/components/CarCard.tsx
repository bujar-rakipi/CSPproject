import React from 'react';
import { Image, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Car } from '../components/Car';

interface CarCardProps {
  car: Car;
  style?: ViewStyle;
}

const CarCard: React.FC<CarCardProps> = ({ car, style }) => (
  <View style={[styles.card, style]}>
    <Image source={{ uri: car.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{car.name}</Text>
      <Text style={styles.price}>${car.price}/day</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 4,
  },
});

export default CarCard;