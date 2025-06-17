import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import useCarList from '../hooks/useCarList';
import CarCard from '../components/CarCard';

const Search = () => {
  const [query, setQuery] = useState('');
  const { cars } = useCarList();
  
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
        }}
      />
      <FlatList
        data={filteredCars}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CarCard car={item} onPress={() => {}} />}
        ListEmptyComponent={<Text>No cars found.</Text>}
      />
    </View>
  );
};

export default Search;