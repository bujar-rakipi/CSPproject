import React from 'react';
import { View, Text, Image, Button, StyleSheet, Alert } from 'react-native';
import { Car } from '../components/Car'; 

type CarDetailsProps = {
  route: {
    params: {
      car: Car;
    };
  };
};

const CarDetails: React.FC<CarDetailsProps> = ({ route }) => {
  const { car } = route.params;

  const handleRentNow = () => {
    Alert.alert(
      'Rental Confirmed',
      `You have rented ${car.name} for $${car.price} per day.`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: car.image }} style={styles.image} />
      <Text style={styles.title}>{car.name}</Text>
      <Text style={styles.description}>{car.description}</Text>
      <Text style={styles.price}>${car.price} per day</Text>
      <Button title="Rent Now" onPress={handleRentNow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: '#1A0f3c',
    marginVertical: 10,
  },
});

export default CarDetails;