import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import useCarList from '../hooks/useCarList';
import CarCard from '../components/CarCard';

const MyRentals = () => {
  const { cars } = useCarList(); 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Rentals</Text>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarCard car={item} onPress={() => {}} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default MyRentals;