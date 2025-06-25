import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CarCard from '../components/CarCard';
import useCarList from '../hooks/useCarList';

const rentedCarIds = ["1", "3", "7"]; // Example rented car IDs

const MyRentals = () => {
  const { cars } = useCarList();
  const myRentals = cars.filter(car => rentedCarIds.includes(car.id));

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Rentals</Text>
      <FlatList
        data={myRentals}
        renderItem={({ item }) => (
          <TouchableOpacity activeOpacity={0.85} style={styles.cardWrapper}>
            <CarCard car={item} style={{ borderRadius: 12, overflow: 'hidden' }} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
        ListEmptyComponent={<Text style={styles.emptyText}>No rentals yet.</Text>}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f8fb',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#007AFF',
    letterSpacing: 1,
    textAlign: 'center',
  },
  cardWrapper: {
    borderWidth: 1,
    borderColor: '#e0e6ed',
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 4,
    shadowColor: '#007AFF',
    shadowOpacity: 0.10,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    padding: 8,
    marginHorizontal: 2,
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 40,
    fontSize: 17,
    fontStyle: 'italic',
  },
});

export default MyRentals;