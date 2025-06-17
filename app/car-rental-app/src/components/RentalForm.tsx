import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RentalForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Rental Details:', { name, email, pickupDate, returnDate });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rental Form</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Pickup Date"
        value={pickupDate}
        onChangeText={setPickupDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Return Date"
        value={returnDate}
        onChangeText={setReturnDate}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});

export default RentalForm;