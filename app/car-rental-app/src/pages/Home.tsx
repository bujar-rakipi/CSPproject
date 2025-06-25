import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CarCard from '../components/CarCard';
import Header from '../components/Header';
import useCarList from '../hooks/useCarList';

const Home = () => {
  const { cars, loading, error } = useCarList();
  const navigation = useNavigation<any>();

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

  const featuredCars = cars.slice(0, 3);

  return (
    <FlatList
      data={cars}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ width: '100%', marginVertical: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate('CarDetails', { car: item })}>
            <CarCard car={item} style={{ width: '100%', height: 140 }} />
          </TouchableOpacity>
        </View>
      )}
      ListHeaderComponent={
        <>
          <Header />
          <Text style={styles.greeting}>Welcome back, User 👋</Text>
          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>{cars.length}</Text>
              <Text style={styles.statLabel}>Cars Available</Text>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statNumber}>3</Text>
              <Text style={styles.statLabel}>My Rentals</Text>
            </View>
          </View>
          <Text style={styles.sectionTitle}>Featured Cars</Text>
          <FlatList
            data={featuredCars}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('CarDetails', { car: item })}
                activeOpacity={0.85}
                style={styles.featuredCardWrapper}
              >
                <CarCard car={item} style={styles.featuredCard} />
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
            contentContainerStyle={{ paddingBottom: 16, paddingLeft: 4, paddingRight: 4 }}
          />
          <Text style={styles.sectionTitle}>All Cars</Text>
        </>
      }
      contentContainerStyle={{ paddingBottom: 16, paddingHorizontal: 16 }}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f7f7', padding: 16 },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  greeting: { fontSize: 22, fontWeight: 'bold', marginVertical: 12 },
  statsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statBox: { backgroundColor: '#fff', borderRadius: 12, padding: 18, alignItems: 'center', flex: 1, marginHorizontal: 5, elevation: 2 },
  statNumber: { fontSize: 20, fontWeight: 'bold', color: '#007AFF' },
  statLabel: { fontSize: 14, color: '#888' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  featuredCardWrapper: { padding: 4 },
  featuredCard: { width: 250, height: 140 },
});

export default Home;