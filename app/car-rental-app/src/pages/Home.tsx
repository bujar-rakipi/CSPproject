import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import CarCard from '../components/CarCard';
import useCarList from '../hooks/useCarList';
import Header from '../components/Header';

const Home = () => {
  const { cars, loading, error } = useCarList();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text>Error loading cars: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
      data={cars}
      renderItem={({ item }) => <CarCard car={item} onPress={() => {}} />}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    paddingBottom: 16,
  },
});

export default Home;