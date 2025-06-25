import React from 'react';
import { View, Text, StyleSheet, PanResponder } from 'react-native';

interface Car {
  name: string;
  details: string;
}

interface SwipeableCarCardProps {
  car: Car;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const SwipeableCarCard: React.FC<SwipeableCarCardProps> = ({ car, onSwipeLeft, onSwipeRight }) => {
  const panResponder = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        return Math.abs(gestureState.dx) > 20; 
      },
      onPanResponderMove: (evt, gestureState) => {
      },
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 50) {
          onSwipeRight(); 
        } else if (gestureState.dx < -50) {
          onSwipeLeft(); 
        }
      },
    })
  ).current;

  return (
    <View {...panResponder.panHandlers} style={styles.card}>
      <Text style={styles.carName}>{car.name}</Text>
      <Text style={styles.carDetails}>{car.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  carName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  carDetails: {
    fontSize: 14,
    color: '#666',
  },
});

export default SwipeableCarCard;