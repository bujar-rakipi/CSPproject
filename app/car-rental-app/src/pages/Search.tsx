import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CarCard from '../components/CarCard';
import useCarList from '../hooks/useCarList';

const Search = () => {
  const [query, setQuery] = useState('');
  const { cars } = useCarList();
  const navigation = useNavigation<any>();
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filteredCars = cars.filter(car =>
    (car.name || '').toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        ref={inputRef}
        placeholder="Search for a car..."
        value={query}
        onChangeText={setQuery}
        style={styles.input}
        placeholderTextColor="#aaa"
      />
      <FlatList
        data={filteredCars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CarDetails', { car: item })}
            activeOpacity={0.85}
            style={styles.cardWrapper}
          >
            <CarCard car={item} style={{ borderRadius: 12, overflow: 'hidden' }} />
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        ListEmptyComponent={<Text style={styles.emptyText}>No cars found.</Text>}
        contentContainerStyle={{ paddingBottom: 24 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#f4f8fb',
  },
  input: {
    height: 44,
    borderColor: '#e0e6ed',
    borderWidth: 1.5,
    marginBottom: 18,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#222',
    elevation: 2,
  },
  cardWrapper: {
    borderWidth: 1,
    borderColor: '#e0e6ed',
    borderRadius: 14,
    backgroundColor: '#fff',
    elevation: 3,
    shadowColor: '#007AFF',
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    padding: 6,
  },
  emptyText: {
    textAlign: 'center',
    color: '#aaa',
    marginTop: 40,
    fontSize: 16,
    fontStyle: 'italic',
  },
});

export default Search;