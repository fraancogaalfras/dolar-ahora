import React, { useEffect, useRef } from 'react';
import { Animated, Text, View, StyleSheet, Button, useAnimatedValue, Dimensions, Image, Easing } from 'react-native';

const Billetes = () => {
  const windowHeight = Dimensions.get('window').height;
  const windowWidth = Dimensions.get('window').width;

  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Definimos la animación de rotación infinita
    const startRotation = () => {
      spinValue.setValue(0);
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 3000, // Duración de cada giro en milisegundos
          useNativeDriver: false, // Mejora el rendimiento
          easing: Easing.linear,
        })
      ).start();
    };

    startRotation();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={styles.container}>
      <Animated.Image style={{ transform: [{ rotate: spin }, { scale: 0.2 }] }} source={require('../assets/rotate_bills.png')} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Billetes;
