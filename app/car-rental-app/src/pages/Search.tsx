import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CarCard from '../components/CarCard';
import useCarList from '../hooks/useCarList';

const Search = () => {
  const [query, setQuery] = useState('');
  const { cars } = useCarList();
  const navigation = useNavigation<any>();

  const filteredCars = cars.filter(car =>
    (car.name || '').toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Search for a car..."
        value={query}
        onChangeText={setQuery}
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 16,
          paddingHorizontal: 8,
          borderRadius: 8,
          backgroundColor: '#fff',
        }}
      />
      <FlatList
        data={filteredCars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CarDetails', { car: item })}>
            <CarCard car={item} />
          </TouchableOpacity>
        )}
        ListEmptyComponent={<Text>No cars found.</Text>}
      />
    </View>
  );
};

export default Search;